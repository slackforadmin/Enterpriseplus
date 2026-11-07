'use client';

import { useRouter } from 'next/navigation';
import { GoogleLogo, OktaLogo, EntraLogo } from '@/components/IdpLogos';

type Idp = {
  id: string;
  label: string;
  description: string;
  href: string;
  logo: React.ReactNode;
};

const idps: Idp[] = [
  {
    id: 'google',
    label: 'Google Workspace',
    description: 'Google 계정으로 로그인',
    href: '/sso/google',
    logo: <GoogleLogo />,
  },
  {
    id: 'okta',
    label: 'Okta',
    description: 'Okta IdP로 로그인',
    href: '/sso/okta',
    logo: <OktaLogo />,
  },
  {
    id: 'entra',
    label: 'Microsoft Entra ID',
    description: 'Entra ID(Azure AD)로 로그인',
    href: '/sso/entra',
    logo: <EntraLogo />,
  },
];

export default function SSOPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-16 pb-14 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }}
        />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-5 border border-white/10">
            Single Sign-On
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">SSO 설정</h1>
          <p className="text-white/70 leading-relaxed">
            조직 구성원이 어떤 방식으로 로그인할지 설정합니다.<br />
            아래에서 사용하는 IdP를 선택해주세요.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* SSO 사용 */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-7 h-7 rounded-lg bg-[#635BFF] text-white text-sm font-bold flex items-center justify-center">1</span>
            <h2 className="text-lg font-bold text-gray-900">SSO를 사용하는 경우</h2>
          </div>
          <p className="text-sm text-gray-500 mb-5 ml-9">조직에서 사용하는 Identity Provider를 선택합니다.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {idps.map((idp) => (
              <button
                key={idp.id}
                onClick={() => router.push(idp.href)}
                className="group text-left p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#635BFF] hover:shadow-[0_12px_40px_rgba(10,37,64,0.1)] hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {idp.logo}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{idp.label}</h3>
                <p className="text-xs text-gray-500">{idp.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-medium text-gray-400">또는</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* SSO 미사용 */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-7 h-7 rounded-lg bg-[#635BFF] text-white text-sm font-bold flex items-center justify-center">2</span>
            <h2 className="text-lg font-bold text-gray-900">SSO를 사용하지 않는 경우</h2>
          </div>
          <button
            onClick={() => router.push('/sso/dummy')}
            className="group relative w-full flex items-center gap-5 text-left p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#635BFF] hover:shadow-[0_12px_40px_rgba(99,91,255,0.12)] hover:-translate-y-0.5 transition-all overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#635BFF] to-[#0EA5E9] flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519C11.05 6.494 12.95 6.494 14.121 7.519c1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 mb-1">
                <h3 className="font-semibold text-gray-900 text-base">Dummy SSO 설정</h3>
                <span className="text-[11px] font-medium text-[#635BFF] bg-[#635BFF]/10 px-2 py-0.5 rounded-full">SSO 미사용</span>
              </div>
              <p className="text-sm text-gray-500">별도의 IdP 없이 Dummy SSO를 설정하여 진행합니다.</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#635BFF] group-hover:bg-[#635BFF] transition-all">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
