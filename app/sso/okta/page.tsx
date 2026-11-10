import Link from 'next/link';
import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';
import HeroBadge from '@/components/HeroBadge';

type Step = { title: string; caption: string; tag?: string };

const steps: Step[] = [
  { title: 'SSO 구성 진입', caption: 'Slack 관리자: 보안 → SSO 설정 → SSO 구성을 선택합니다. (Business+는 인증 → SAML 인증)' },
  { title: 'Okta 앱 카탈로그', caption: 'Okta 관리자: Applications → Browse App Catalog에서 Slack을 검색해 선택합니다.' },
  { title: 'Add Integration', caption: 'Slack을 검색한 후 Add Integration을 선택합니다.' },
  { title: 'Application Label 입력', caption: 'Application Label은 사용자에게 보일 이름입니다.\nDomain은 Slack 접속 주소에서 .slack.com 앞의 도메인 부분을 입력합니다. (예: acme.enterprise.slack.com → acme.enterprise)' },
  { title: 'SAML 2.0 선택', caption: 'Sign-On Method에서 SAML 2.0을 선택합니다.' },
  { title: 'View Setup Instructions', caption: 'View Setup Instructions를 클릭하면 새 창으로 안내 윈도우가 열립니다.' },
  { title: 'Done 클릭', caption: 'Done을 클릭합니다.' },
  { title: 'IdP 정보 확인', caption: 'View Setup Instructions 창의 3가지 항목을 Slack 설정 화면에서 활용합니다.' },
  { title: '사용자 할당', caption: 'Assignments 메뉴에서 Slack을 사용할 사용자를 할당합니다. (설정 중인 관리자는 필수 할당)' },
  { title: 'Slack SSO 구성 입력', caption: 'View Setup Instructions 정보를 Slack SSO 구성창에 복사/붙여넣기 후 테스트 구성을 클릭합니다.' },
  { title: '설정 완료', caption: 'Okta 연동이 성공적으로 테스트되면 업데이트 확인 버튼을 눌러 Slack 설정을 완료합니다.' },
  { title: 'Provisioning 앱 설치', caption: '사용자 할당/삭제 시 Slack 계정을 자동 생성·비활성화하는 Provisioning을 위해, Slack에 Okta용 앱을 설치합니다.' },
  { title: 'Authenticate with Slack', caption: 'Okta 앱을 Slack에 설치하기 위한 인증 과정 - Authenticate with Slack을 선택합니다.' },
  { title: '설치 대상 선택', caption: 'Business+ 플랜은 워크스페이스에, Enterprise+ 플랜은 조직(Org)에 설치합니다.' },
  { title: '인증 후 Save', caption: '인증을 끝낸 후 Save 버튼을 선택합니다.' },
  { title: '프로비저닝 옵션', caption: 'Create User, Update User Attributes, Deactivate Users를 모두 선택한 후 Save합니다.' },
  { title: 'Push Groups', caption: 'Push Groups 버튼을 클릭합니다. (Group sync는 Okta LCM 라이선스 필요, 적용 시 메뉴 추가)' },
  { title: '그룹 Sync', caption: 'Sync할 그룹을 검색·선택한 후 Save합니다.' },
  { title: 'Sync 완료', caption: 'Pushing → Active 상태가 되면 그룹 sync가 완료됩니다. (중복 유저 등 오류 시 Okta Support 문의)' },
  { title: '사용자 그룹 설정', caption: '관리자 페이지 → 사람 → 사용자 그룹 편집 → 그룹 선택 → 핸들 및 기본 채널 추가', tag: 'Business+' },
  { title: 'Sync 그룹 확인', caption: 'sync된 그룹을 확인합니다.', tag: 'Enterprise+' },
  { title: '기본 워크스페이스 연결', caption: '기본 워크스페이스 연결 - 기본 워크스페이스를 선택합니다.', tag: 'Enterprise+' },
];

export default function OktaSSOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #004E7C 55%, #007DC1 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 85% 15%, rgba(0,125,193,0.5) 0%, transparent 55%)' }}
        />
        <div className="relative max-w-5xl">
          <HeroBadge>론치 2단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Okta SSO 설정</h1>
          <p className="text-white/70 leading-relaxed">
            Okta를 IdP로 사용하여 SAML 기반 SSO와 사용자 프로비저닝을 설정합니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Video */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#007DC1]/10">
              <svg className="w-4 h-4 text-[#007DC1]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
            <h2 className="text-lg font-bold text-gray-900">영상으로 먼저 보기</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-black max-w-[64%]">
            <video controls preload="metadata" poster={asset('/okta-sso/poster.svg')} className="w-full h-auto">
              <source src={asset('/okta-sso/okta-saml-demo.mp4')} type="video/mp4" />
              브라우저가 영상 재생을 지원하지 않습니다.
            </video>
          </div>
          <p className="text-xs text-gray-400 mt-3">전체 설정 과정을 영상으로 확인한 뒤, 아래 단계별 가이드를 따라 진행하세요.</p>
        </div>

        {/* Steps */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#007DC1]/10 text-[#007DC1]">
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
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{step.title}</h3>
                  {step.tag && (
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                        step.tag === 'Enterprise+'
                          ? 'bg-[#007DC1]/10 text-[#007DC1]'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {step.tag} 플랜
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 ml-10 whitespace-pre-line">{step.caption}</p>
              <div className="ml-10 rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                <ZoomableImage
                  src={asset(`/okta-sso/step${String(i + 1).padStart(2, '0')}.png`)}
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
        <div className="mt-12 p-5 bg-[#007DC1]/5 border border-[#007DC1]/20 rounded-xl">
          <p className="text-sm text-gray-700 leading-relaxed">
            모든 설정이 완료되었습니다. 자세한 옵션과 상세 내용은{' '}
            <a
              href="https://slack.com/intl/ko-kr/help/articles/203772216-SAML-Single-Sign-On"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007DC1] font-medium hover:underline"
            >
              Slack 공식 가이드
            </a>
            와{' '}
            <a
              href="https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Slack.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007DC1] font-medium hover:underline"
            >
              Okta 가이드
            </a>
            를 참고해주세요.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/migration"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
          >
            다음: 마이그레이션 →
          </Link>
        </div>
      </div>
    </div>
  );
}
