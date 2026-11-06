import Link from 'next/link';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Day 1 조직 초기 설정',
    description: 'Enterprise+ 조직의 기본 설정을 완료합니다. 워크스페이스 생성, 도메인 연결, 기본 정책을 구성합니다.',
    href: '/day1-setup',
  },
  {
    number: '02',
    title: 'SSO 설정',
    description: 'Single Sign-On을 구성합니다. SSO 없이 Dummy SSO를 사용하거나, Google / Okta / Entra ID와 연동할 수 있습니다.',
    href: '/sso',
  },
  {
    number: '03',
    title: '마이그레이션',
    description: '기존 Slack 데이터를 Enterprise+로 이전합니다. 마이그레이션 오버뷰와 사전작업을 순서대로 진행합니다.',
    href: '/migration',
  },
  {
    number: '04',
    title: '관리자 세션',
    description: '관리자를 위한 Slack Enterprise+ 핵심 기능과 관리 도구 사용법을 안내합니다.',
    href: '/admin-session',
  },
  {
    number: '05',
    title: '사용자 세션',
    description: '일반 사용자를 위한 Slack 사용 가이드와 온보딩 자료를 제공합니다.',
    href: '/user-session',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="px-12 py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A2540 0%, #1A1F71 60%, #635BFF 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(99,91,255,0.4) 0%, transparent 50%)',
          }}
        />
        <div className="max-w-6xl relative flex items-center gap-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
              Enterprise+ Plan
            </div>
            <h1 className="text-5xl font-bold text-white mb-5 leading-[1.1] tracking-tight">
              Slack 런치 가이드
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Enterprise+ 플랜 도입을 위한 단계별 가이드입니다.<br />
              아래 순서에 따라 설정을 진행해주세요.
            </p>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <Image
              src="/slackbot.png"
              alt="Slackbot"
              width={160}
              height={160}
              className="rounded-3xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="px-12 py-14">
        <div className="max-w-3xl">
          <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-6">
            진행 단계
          </h2>
          <div className="space-y-3">
            {steps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-[var(--border)] hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)] hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 bg-gradient-to-br from-[#635BFF] to-[#0EA5E9]">
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#635BFF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#635BFF] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
