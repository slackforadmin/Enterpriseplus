import Link from 'next/link';
import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';
import HeroBadge from '@/components/HeroBadge';

type Item = { title: string; caption: string; img: string; mapping?: { label: string; value: string }[] };

const steps: Item[] = [
  {
    title: 'SSO 구성 진입',
    caption: 'Slack 관리자: 보안 → SSO 설정 → SSO 구성을 선택합니다. (Business+는 인증 → SAML 인증)',
    img: 'step01',
  },
  {
    title: 'Enterprise Applications',
    caption: 'Azure AD 관리자: Enterprise Applications → New Application에서 Slack을 검색해 선택합니다.',
    img: 'step02',
  },
  {
    title: '앱 생성 · 사용자 할당',
    caption: 'Slack App 이름을 선택해 Create → Assign User and Group으로 사용자를 선택·저장한 뒤, Setup Single Sign On을 선택합니다.',
    img: 'step03',
  },
  {
    title: 'SAML 선택',
    caption: 'SSO 방식 선택 화면에서 SAML을 선택합니다.',
    img: 'step04',
  },
  {
    title: 'Basic SAML 구성 (1)',
    caption: 'Basic SAML Configuration의 4개 항목을 Slack에 문의 후 입력하고, Certificate를 다운로드합니다.',
    img: 'step05',
  },
  {
    title: 'Basic SAML 구성 (2)',
    caption: 'Setup Slack에서 3개 항목을 복사하여 Slack SSO 구성 화면에 활용합니다.',
    img: 'step06',
  },
  {
    title: '사용자 프로비저닝',
    caption: 'Provision User Account를 선택하고 Azure AD ↔ Slack Profile Mapping을 설정한 후 Save합니다. (Provisioning 앱은 반드시 워크스페이스가 아닌 Org에 설치)',
    img: 'step07',
  },
];

const appendix: Item[] = [
  {
    title: '다중 SSO 구성',
    caption: '하나의 Entra ID에서 두 개 이상의 Slack instance SSO를 생성할 수 있습니다. 기존 SSO와 구분하기 위해 "서비스 제공업체 발급자 URL"을 https://{고객사URL}.enterprise.slack.com/ 형태로 변경하고, Entra ID의 Identifier(EntityID)와 일치시켜야 합니다.',
    img: 'appendix01',
  },
  {
    title: '응답 서명 옵션',
    caption: 'Slack의 응답 서명 옵션 선택 시 Entra ID SAML Signing Certificate 옵션을 동일하게 지정합니다. 옵션 변경 시 New Certificate를 선택해 새 base64 인증서로 변경 후 사용합니다.',
    img: 'appendix02',
  },
  {
    title: '에러 시 Attribute 확인',
    caption: '구성 후 테스트에서 오류가 보이면 아래 attribute 매핑을 확인하세요.',
    mapping: [
      { label: 'first_name', value: 'user.givenname' },
      { label: 'last_name', value: 'user.surname' },
      { label: 'Username', value: 'user.userprincipalname' },
      { label: 'Email', value: 'user.mail' },
      { label: 'Unique ID', value: 'user.userprincipalname' },
    ],
    img: 'appendix03',
  },
];

export default function EntraSSOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #004A87 55%, #0078D4 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 85% 15%, rgba(0,120,212,0.5) 0%, transparent 55%)' }}
        />
        <div className="relative max-w-5xl">
          <HeroBadge>런치 2단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Entra ID SSO 설정</h1>
          <p className="text-white/70 leading-relaxed">
            Microsoft Entra ID(Azure AD)를 IdP로 사용하여 SAML 기반 SSO와 사용자 프로비저닝을 설정합니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Steps */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#0078D4]/10 text-[#0078D4]">
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
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 ml-10">{step.caption}</p>
              <div className="ml-10 rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                <ZoomableImage src={asset(`/entra-sso/${step.img}.png`)} alt={step.title} width={1440} height={810} className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Appendix */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#0078D4]/10 text-[#0078D4]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h2 className="text-lg font-bold text-gray-900">Appendix · 참고 사항</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6 ml-9">특정 상황에서 참고할 추가 설정 및 트러블슈팅 정보입니다.</p>

          <div className="space-y-10">
            {appendix.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 h-7 rounded-lg bg-[#0078D4]/10 text-[#0078D4] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    참고 {i + 1}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 ml-2">{item.caption}</p>
                {item.mapping && (
                  <div className="mb-4 ml-2 rounded-xl border border-gray-200 overflow-hidden bg-white">
                    <ul className="divide-y divide-gray-50">
                      {item.mapping.map((m) => (
                        <li key={m.label} className="flex items-center gap-3 px-4 py-2.5">
                          <span className="text-sm font-medium text-gray-700 w-28 flex-shrink-0">{m.label}</span>
                          <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <code className="text-sm font-medium bg-[#0078D4]/10 text-[#0078D4] px-2 py-0.5 rounded">{m.value}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <ZoomableImage src={asset(`/entra-sso/${item.img}.png`)} alt={item.title} width={1440} height={810} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 p-5 bg-[#0078D4]/5 border border-[#0078D4]/20 rounded-xl">
          <p className="text-sm text-gray-700 leading-relaxed">
            모든 설정이 완료되었습니다. 자세한 옵션과 상세 내용은{' '}
            <a
              href="https://slack.com/intl/ko-kr/help/articles/203772216-SAML-Single-Sign-On"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0078D4] font-medium hover:underline"
            >
              Slack 공식 가이드
            </a>
            와{' '}
            <a
              href="https://learn.microsoft.com/ko-kr/azure/active-directory/saas-apps/slack-tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0078D4] font-medium hover:underline"
            >
              Microsoft 가이드
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
