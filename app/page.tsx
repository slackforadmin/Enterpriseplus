import Link from 'next/link';
import Image from 'next/image';
import { asset } from '@/lib/asset';

type SubLink = { label: string; href: string };
type Phase = {
  number: string;
  title: string;
  description: string;
  badge?: string;
  links?: SubLink[];
  note?: string;
};

const phases: Phase[] = [
  {
    number: '01',
    title: 'Kick-Off 영상 시청',
    description: '런치를 시작하기 전, Kick-Off 영상을 통해 전체 과정과 핵심 포인트를 먼저 확인합니다.',
    note: '영상 준비 중',
    links: [{ label: 'Kick-Off 영상', href: '/kickoff' }],
  },
  {
    number: '02',
    title: '서비스 시작일 · Day 1 설정',
    description: '서비스 시작일에 조직의 기본 환경과 로그인 방식을 설정합니다. 조직 초기 설정을 완료한 뒤 SSO를 구성하세요.',
    links: [
      { label: 'Day 1 조직 초기 설정', href: '/day1-setup' },
      { label: 'SSO 설정', href: '/sso' },
    ],
  },
  {
    number: '03',
    title: '마이그레이션',
    description: '기존 Slack 데이터를 이전하는 경우, 오버뷰 영상을 먼저 시청한 뒤 사전작업을 직접 진행합니다. 마이그레이션 전·후 사용자/관리자 진행사항을 함께 안내합니다.',
    badge: '필요 시',
    links: [
      { label: '마이그레이션 오버뷰', href: '/migration/overview' },
      { label: '마이그레이션 사전작업', href: '/migration/prep' },
    ],
  },
  {
    number: '04',
    title: '조직 추가 설정',
    description: '관리자가 조직 운영에 필요한 기본 추가 설정을 진행합니다.',
    links: [{ label: '조직 추가 설정', href: '/org-setup' }],
  },
  {
    number: '05',
    title: '관리자 세션',
    description: '관리자 세션 영상을 통해 Slack Enterprise+의 핵심 관리 기능을 학습합니다.',
    links: [{ label: '관리자 세션', href: '/admin-session' }],
  },
  {
    number: '06',
    title: '사용자 세션',
    description: '일반 사용자를 위한 Slack 사용법과 온보딩을 영상으로 안내합니다.',
    badge: '필요 시',
    links: [{ label: '사용자 세션', href: '/user-session' }],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="px-6 md:px-12 py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 80% 20%, rgba(99,91,255,0.4) 0%, transparent 50%)' }}
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
              처음 Slack을 도입하시나요? 아래 여정을 따라<br />
              Kick-Off부터 사용자 온보딩까지 차근차근 진행하세요.
            </p>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <Image
              src={asset('/slackbot.png')}
              alt="Slackbot"
              width={160}
              height={160}
              className="rounded-3xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Journey timeline */}
      <div className="px-6 md:px-12 py-14">
        <div className="max-w-3xl">
          <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-8">
            런치 여정
          </h2>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-[#635BFF] via-[#635BFF]/40 to-[#635BFF]/10" />

            <div className="space-y-8">
              {phases.map((phase) => (
                <div key={phase.number} className="relative flex gap-5">
                  {/* node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-white border-2 border-[#635BFF] text-[#635BFF] font-bold text-xs flex items-center justify-center shadow-sm">
                      {phase.number}
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-semibold text-[var(--foreground)] text-base">{phase.title}</h3>
                      {phase.badge && (
                        <span className="text-[11px] font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                          {phase.badge}
                        </span>
                      )}
                      {phase.note && (
                        <span className="text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          {phase.note}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">{phase.description}</p>

                    {phase.links && (
                      <div className="flex flex-wrap gap-2">
                        {phase.links.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#635BFF] bg-[#635BFF]/8 border border-[#635BFF]/20 rounded-lg px-3 py-1.5 hover:bg-[#635BFF]/12 transition-colors"
                          >
                            {l.label}
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
