'use client';

import { useEffect, useRef } from 'react';
import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';
import HeroBadge from '@/components/HeroBadge';

export default function FaqReferencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-4xl">
          <HeroBadge>참고 자료</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight mt-1">FAQ &amp; 문제 해결</h1>
          <p className="text-white/70 leading-relaxed">
            런치 과정에서 자주 겪는 상황과 헷갈리기 쉬운 화면을 모았습니다.<br />
            항목을 클릭하면 원인과 해결 방법을 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-4xl space-y-4">
        {/* 404 */}
        <FaqItem q="[결함이 있습니다…] 화면이 떠요">
          <p>
            해당 화면은 Slack의 일반적인 <strong className="text-gray-900">404 오류 페이지</strong>입니다.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-3">
            <div>
              <Label text="원인" color="gray" />
              <ul className="mt-2 space-y-1.5 text-[13px] text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2"><Dot /> 잘못된 URL</li>
                <li className="flex items-start gap-2"><Dot /> 삭제된 URL</li>
              </ul>
            </div>
            <div>
              <Label text="해결 방법" color="indigo" />
              <p className="mt-2 text-[13px] text-gray-600 leading-relaxed">
                <strong className="text-gray-900">시크릿 모드</strong>에서 아래를 진행하세요.
              </p>
              <ul className="mt-2 space-y-1.5 text-[13px] text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2"><Dot /> <span><strong className="text-gray-900">URL 주소 오류 확인</strong> 후, 수정된 URL로 접속</span></li>
                <li className="flex items-start gap-2"><Dot /> <span>Ent+ 조직 주소로 재로그인 후 진행<br /><code className="inline-block mt-1 text-xs bg-[#635BFF]/10 text-[#635BFF] px-1.5 py-0.5 rounded">https://[Ent+조직도메인].enterprise.slack.com/</code></span></li>
              </ul>
            </div>
          </div>

          <Figure src="/faq/404-error.webp" alt="Slack 404 결함이 있습니다 오류 화면" width={2000} height={1162} />
        </FaqItem>

        {/* 조직 vs 워크스페이스 */}
        <FaqItem id="org-vs-ws" q="조직 관리 화면 vs 워크스페이스 관리 화면, 어디로 들어온 거죠?">
          <p>
            지금 어느 화면에 들어와 있는지 먼저 확인하세요. <strong className="text-gray-900">Ent+ 조직 설정은 주로 조직 관리 화면</strong>에서 진행합니다. 두 화면은 주소(URL)로 구분할 수 있습니다.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold text-white bg-[#635BFF] px-2 py-0.5 rounded-full">조직 관리 화면</span>
              </div>
              <Figure src="/faq/org-admin.webp" alt="조직 관리 화면" width={2000} height={1296} />
              <div className="mt-3 space-y-3">
                <div>
                  <Label text="[홈] 클릭 시의 URL" color="indigo" />
                  <code className="block mt-1.5 text-xs bg-gray-100 px-2 py-1.5 rounded break-all">https://app.slack.com/manage/<span className="text-[#635BFF] font-semibold">[Ent+ Org Encoded ID]</span>/</code>
                  <p className="mt-1.5 text-xs text-gray-500 flex items-start gap-1.5"><Dot /> Ent+ Org Encoded ID : <strong className="text-gray-700">E</strong>로 시작하는 Ent+ Org ID</p>
                </div>
                <div>
                  <Label text="메뉴 항목" color="indigo" />
                  <p className="mt-1.5 text-[13px] text-gray-600 leading-relaxed">여러 워크스페이스 목록, SSO 설정, 전체 사용자 관리, 조직 전체 정책(DLP·데이터 리텐션 등)</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold text-white bg-[#0EA5E9] px-2 py-0.5 rounded-full">워크스페이스 관리 화면</span>
              </div>
              <Figure src="/faq/ws-admin.webp" alt="워크스페이스 관리 화면" width={2000} height={1314} />
              <div className="mt-3 space-y-3">
                <div>
                  <Label text="[홈] 클릭 시의 URL" color="sky" />
                  <code className="block mt-1.5 text-xs bg-gray-100 px-2 py-1.5 rounded break-all">https://<span className="text-[#0EA5E9] font-semibold">[워크스페이스도메인명]</span>.slack.com/home</code>
                  <p className="mt-1.5 text-xs text-gray-500 flex items-start gap-1.5"><Dot /> 워크스페이스도메인명 : 워크스페이스별 고유 주소</p>
                </div>
                <div>
                  <Label text="메뉴 항목" color="sky" />
                  <p className="mt-1.5 text-[13px] text-gray-600 leading-relaxed">해당 워크스페이스 내 채널/멤버 관리, 워크스페이스 단위 앱 설정</p>
                </div>
              </div>
            </div>
          </div>
        </FaqItem>
      </div>
    </div>
  );
}

function FaqItem({ q, id, children }: { q: string; id?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (id && typeof window !== 'undefined' && window.location.hash.slice(1) === id && ref.current) {
      ref.current.open = true;
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [id]);
  return (
    <details ref={ref} id={id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden group scroll-mt-6">
      <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden hover:bg-gray-50">
        <svg className="w-4 h-4 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="flex items-center gap-2 font-semibold text-gray-900 text-[15px]">
          <span className="text-[#635BFF] font-bold">Q</span>
          {q}
        </span>
      </summary>
      <div className="px-5 pb-5 pt-1 ml-7 space-y-3 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
        <div className="pt-4 space-y-3">{children}</div>
      </div>
    </details>
  );
}

function Label({ text, color }: { text: string; color: 'gray' | 'indigo' | 'sky' }) {
  const cls =
    color === 'indigo'
      ? 'bg-[#635BFF]/10 text-[#635BFF]'
      : color === 'sky'
        ? 'bg-[#0EA5E9]/10 text-[#0EA5E9]'
        : 'bg-gray-100 text-gray-500';
  return <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded ${cls}`}>{text}</span>;
}

function Dot() {
  return <span className="text-[#635BFF] font-bold flex-shrink-0 mt-0.5">·</span>;
}

function Figure({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="mt-3 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <ZoomableImage src={asset(src)} alt={alt} width={width} height={height} className="block w-full h-auto" />
    </div>
  );
}
