// 빌드 시점 전문(full-text) 검색 색인 생성기
// 각 페이지(app/**/page.tsx)와 사이드바 모달에서 사용자에게 보이는 텍스트만
// 추출해 lib/searchBodies.generated.ts 로 저장한다. (className/SVG path/URL/색상 등 코드는 제외)
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// 내용 성격의 prop 키만 화이트리스트로 수집 (href/src/className/viewBox/d 등은 제외)
const CONTENT_KEYS = ['desc', 'caption', 'label', 'value', 'title', 'q', 'a', 'text', 'sub', 'tier', 'alt', 'badge'];

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&middot;/g, '·')
    .replace(/&rarr;/g, '→')
    .replace(/&amp;/g, '&');
}

function extractText(src) {
  const parts = [];

  // 1) className 속성 제거 (노이즈 최소화)
  let s = src.replace(/className=("[^"]*"|\{[^}]*\})/g, ' ');

  // 2) JSX 텍스트 노드: > ... < 사이의 일반 텍스트 (태그/표현식 제외)
  for (const m of s.matchAll(/>([^<>{}]+)</g)) {
    const t = m[1].trim();
    if (t) parts.push(t);
  }

  // 3) 내용 prop의 문자열 리터럴 값만 수집
  const keyAlt = CONTENT_KEYS.join('|');
  const re = new RegExp("\\b(?:" + keyAlt + ")\\s*[:=]\\s*(?:'([^'\\\\]{2,})'|\"([^\"\\\\]{2,})\"|\\{'([^'\\\\]{2,})'\\}|\\{\"([^\"\\\\]{2,})\"\\})", 'g');
  for (const m of s.matchAll(re)) {
    const t = (m[1] || m[2] || m[3] || m[4] || '').trim();
    if (t) parts.push(t);
  }

  // 4) 정리: 엔티티 해제 → 중복 제거 → 공백 정규화
  const cleaned = parts
    .map((t) => decodeEntities(t).replace(/\s+/g, ' ').trim())
    // 코드/경로/색상 티가 나는 조각 제외
    .filter((t) => t && !/^[#/.]/.test(t) && !/[{}<>]/.test(t) && !/^[Mm][\d.]/.test(t))
    .filter((t) => /[가-힣]/.test(t) || /[A-Za-z]{2,}/.test(t));

  return Array.from(new Set(cleaned)).join(' ');
}

function routeFromFile(rel) {
  // app/page.tsx -> '/', app/x/page.tsx -> '/x', app/x/y/page.tsx -> '/x/y'
  const noSuffix = rel.replace(/^app\//, '').replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '');
  return '/' + noSuffix;
}

async function walkPages(dir, acc) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walkPages(full, acc);
    else if (e.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

async function main() {
  const bodies = {};

  // 페이지
  const pageFiles = await walkPages(path.join(ROOT, 'app'), []);
  for (const file of pageFiles) {
    const rel = path.relative(ROOT, file).split(path.sep).join('/');
    const href = routeFromFile(rel);
    const src = await fs.readFile(file, 'utf8');
    bodies[href] = extractText(src);
  }

  // 사이드바 모달 (페이지 아님 — searchIndex의 action href와 매칭)
  const modalMap = {
    '#sso-exception': 'components/SsoExceptionModal.tsx',
    '#cache-clear': 'components/CacheClearModal.tsx',
  };
  for (const [href, relPath] of Object.entries(modalMap)) {
    try {
      const src = await fs.readFile(path.join(ROOT, relPath), 'utf8');
      bodies[href] = extractText(src);
    } catch {
      /* 모달 파일이 없으면 건너뜀 */
    }
  }

  const header = '// 이 파일은 scripts/build-search-index.mjs 가 자동 생성합니다. 직접 수정하지 마세요.\n';
  const out = header + 'export const searchBodies: Record<string, string> = ' + JSON.stringify(bodies, null, 2) + ';\n';
  const outPath = path.join(ROOT, 'lib', 'searchBodies.generated.ts');
  await fs.writeFile(outPath, out, 'utf8');
  console.log(`[search-index] ${Object.keys(bodies).length}개 항목 본문 색인 생성: ${path.relative(ROOT, outPath)}`);
}

main().catch((err) => {
  console.error('[search-index] 생성 실패:', err);
  process.exit(1);
});
