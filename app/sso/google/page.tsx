import Link from 'next/link';
import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';

const steps = [
  { title: 'SSO 구성 진입', caption: 'Slack 관리자: 보안 → SSO 설정 → SSO 구성을 선택합니다. (Business+는 인증 → SAML 인증)' },
  { title: 'Google 웹 및 모바일 앱', caption: 'Google Workspace 관리자 페이지에서 앱 → 웹 및 모바일 앱을 선택합니다.' },
  { title: '앱 검색', caption: '앱 추가 → 앱 검색을 선택합니다.' },
  { title: 'Slack(SAML) 선택', caption: 'Slack을 입력한 후, Slack 웹(SAML)을 선택합니다.' },
  { title: 'IdP 정보 복사', caption: 'SSO URL, 엔티티 ID, 인증서 내용을 메모장 등에 복사해 둡니다.' },
  { title: 'ACS URL · 엔티티 ID 입력', caption: 'Slack 팀에서 제공받은 ACS URL과 엔티티 ID를 입력하고, 서명된 응답을 체크합니다.' },
  { title: '사용자 정보 매핑', caption: '사용자 정보 매핑을 위해 3가지 기본 속성을 설정합니다.' },
  { title: '사용자 액세스', caption: '사용자 액세스를 선택합니다.' },
  { title: '사용 대상 선택', caption: '어떤 사용자가 Slack을 사용할지 선택합니다. (전체 또는 특정 그룹)' },
  { title: 'Slack SSO 구성 진입', caption: 'Slack 관리자 화면에서 보안 → SSO 설정 → SSO 구성을 선택합니다.' },
  { title: 'SSO 설정 붙여넣기', caption: 'Google 콘솔에서 복사한 내용을 Slack SSO 설정 화면에 모두 붙여넣어 설정합니다.' },
  { title: '자동 프로비저닝', caption: '프로비저닝을 사용하려면 자동 프로비저닝 → REAUTHORIZE를 클릭합니다. (미사용 시 JIT)' },
];

export default function GoogleSSOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #1E3A5F 55%, #4285F4 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 85% 15%, rgba(66,133,244,0.5) 0%, transparent 55%)' }}
        />
        <div className="relative max-w-5xl">
          <Link href="/sso" className="text-sm text-white/60 hover:text-white mb-5 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            SSO 설정으로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight mt-1">Google SSO 설정</h1>
          <p className="text-white/70 leading-relaxed">
            Google Workspace를 IdP로 사용하여 SAML 기반 SSO를 설정합니다.
          </p>
        </div>
      </div>

      <div className="px-12 py-12 max-w-5xl">
        {/* Video */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#4285F4]/10">
              <svg className="w-4 h-4 text-[#4285F4]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
            <h2 className="text-lg font-bold text-gray-900">영상으로 먼저 보기</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-black max-w-[64%]">
            <video controls preload="metadata" className="w-full h-auto">
              <source src={asset('/google-sso/google-saml-demo.mp4')} type="video/mp4" />
              브라우저가 영상 재생을 지원하지 않습니다.
            </video>
          </div>
          <p className="text-xs text-gray-400 mt-3">전체 설정 과정을 영상으로 확인한 뒤, 아래 단계별 가이드를 따라 진행하세요.</p>
        </div>

        {/* Steps */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#4285F4]/10 text-[#4285F4]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </span>
          <h2 className="text-lg font-bold text-gray-900">단계별 설정 가이드</h2>
        </div>

        <div className="space-y-10">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{step.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 ml-10">{step.caption}</p>
              <div className="ml-10 rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                <ZoomableImage
                  src={asset(`/google-sso/step${String(i + 1).padStart(2, '0')}.png`)}
                  alt={step.title}
                  width={1440}
                  height={810}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-5 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-xl">
          <p className="text-sm text-gray-700 leading-relaxed">
            모든 설정이 완료되었습니다. 자세한 옵션과 상세 내용은{' '}
            <a
              href="https://slack.com/intl/ko-kr/help/articles/203772216-SAML-Single-Sign-On"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4285F4] font-medium hover:underline"
            >
              Slack 공식 가이드 문서
            </a>
            를 참고해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
