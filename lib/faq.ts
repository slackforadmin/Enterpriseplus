export type FaqItem = {
  q: string;
  keywords: string[];
  a: string;
  link?: { label: string; href: string };
};

// 자주 묻는 질문 — 새 질문이 들어오면 여기에 항목을 추가하세요.
export const faqs: FaqItem[] = [
  {
    q: 'SSO는 어떻게 설정하나요?',
    keywords: ['sso', '싱글사인온', '로그인', 'saml', '인증'],
    a: 'SSO 설정 페이지에서 사용 여부를 먼저 선택하세요. SSO를 사용하면 Google / Okta / Entra ID 중 하나를 연동하고, 사용하지 않으면 Dummy SSO를 설정합니다.',
    link: { label: 'SSO 설정 보기', href: '/sso' },
  },
  {
    q: 'Google Workspace로 SSO를 연동하려면?',
    keywords: ['google', '구글', 'workspace', 'sso'],
    a: 'Google SSO 설정 페이지에서 영상과 12단계 가이드를 따라 SAML 기반으로 연동합니다.',
    link: { label: 'Google SSO 보기', href: '/sso/google' },
  },
  {
    q: 'Okta SSO 설정 방법은?',
    keywords: ['okta', '옥타', 'sso', '프로비저닝'],
    a: 'Okta SSO 페이지에서 앱 카탈로그 추가부터 프로비저닝까지 22단계로 안내합니다. Business+/Enterprise 플랜별 단계도 구분되어 있어요.',
    link: { label: 'Okta SSO 보기', href: '/sso/okta' },
  },
  {
    q: 'Entra ID(Azure AD) 연동은?',
    keywords: ['entra', '엔트라', 'azure', 'microsoft', '마이크로소프트', 'sso'],
    a: 'Entra ID SSO 페이지에서 7단계 설정과 다중 SSO·응답 서명·attribute 등 참고 사항을 확인하세요.',
    link: { label: 'Entra ID SSO 보기', href: '/sso/entra' },
  },
  {
    q: 'Day 1에 무엇을 설정하나요?',
    keywords: ['day1', 'day 1', '조직', '초기', '설정', '시작일'],
    a: '계약 시작일에 조직 초기 설정(이메일 확인 → Enterprise+ Setup → Account Setting → 조직 설정)을 완료한 뒤 SSO를 구성합니다.',
    link: { label: 'Day 1 설정 보기', href: '/day1-setup' },
  },
  {
    q: '마이그레이션은 어떻게 하나요?',
    keywords: ['마이그레이션', 'migration', '이전', '데이터 이전'],
    a: '마이그레이션이 필요하면 오버뷰 영상을 먼저 보고, 사전작업을 직접 진행하세요. 사전작업 안내 영상이 제공됩니다.',
    link: { label: '마이그레이션 보기', href: '/migration' },
  },
  {
    q: '데이터 보존 기간은 어떻게 설정하나요?',
    keywords: ['데이터 보존', '보존', 'retention', '기간', '삭제', '리텐션'],
    a: '조직 레벨 또는 워크스페이스 레벨에서 공개/비공개 채널·DM·파일·캔버스의 보존 주기를 설정할 수 있습니다. 조직 레벨 설정은 Slack 팀에 요청이 필요해요.',
    link: { label: '데이터 보존 정책 보기', href: '/reference/retention' },
  },
  {
    q: '역할별 권한이 궁금해요.',
    keywords: ['역할', '권한', 'roles', 'permission', '관리자', '소유자', 'owner', 'admin'],
    a: '조직(주 소유자/소유자/관리자), 워크스페이스, 채널, 시스템 역할별 권한을 Roles & Permissions 페이지에서 확인하고, 각 권한은 Slack 헬프센터로 연결됩니다.',
    link: { label: 'Roles & Permissions 보기', href: '/reference/roles' },
  },
  {
    q: '지원 사례(Case)는 어떻게 신청하나요?',
    keywords: ['support', '지원', 'case', '케이스', '사례', 'feedback', '문의'],
    a: '/feedback은 더 이상 동작하지 않습니다. Slack 고객지원센터 → Salesforce Portal 로그인 → 사례 생성 순서로 진행하세요. 한국어/English 경로가 모두 안내됩니다.',
    link: { label: 'Support Case 가이드 보기', href: '/reference/support-case' },
  },
];

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, '');

export function searchFaqs(query: string): FaqItem[] {
  const q = normalize(query);
  if (!q) return [];
  return faqs
    .map((item) => {
      let score = 0;
      const hay = normalize(item.q + ' ' + item.keywords.join(' ') + ' ' + item.a);
      // 키워드 직접 매칭 가중치
      for (const kw of item.keywords) {
        if (q.includes(normalize(kw)) || normalize(kw).includes(q)) score += 3;
      }
      // 질문/답변 본문 포함
      if (hay.includes(q)) score += 1;
      // 쿼리 토큰별 부분 매칭
      for (const token of query.toLowerCase().split(/\s+/).filter(Boolean)) {
        if (hay.includes(normalize(token))) score += 1;
      }
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.item);
}
