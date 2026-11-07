import Link from 'next/link';
import HeroBadge from '@/components/HeroBadge';

type Task = { text: string; note?: string };

const before: { role: 'admin' | 'user'; title: string; tasks: Task[] }[] = [
  {
    role: 'admin',
    title: '관리자 요청 사항',
    tasks: [
      { text: '사전작업 대시보드 6단계를 모두 완료하고 이전 예약을 마칩니다.', note: '마이그레이션 사전작업 화면 참고' },
      { text: '조직 구성원에게 마이그레이션 일정과 예상 다운타임을 공지합니다.' },
      { text: '마이그레이션 후 로그인 방식(SSO)과 재로그인 절차를 안내합니다.' },
      { text: '데이터 보존 정책을 확정하고 피드백팀에 설정을 요청합니다.', note: '데이터 보존 정책 화면 참고' },
      { text: '마이그레이션 담당자 연락 채널(지원 문의 경로)을 사전에 공유합니다.' },
    ],
  },
  {
    role: 'user',
    title: '사용자 요청 사항',
    tasks: [
      { text: '공지된 마이그레이션 일정과 다운타임 시간을 확인합니다.' },
      { text: '진행 중인 중요한 작업·문서는 미리 저장하거나 백업합니다.' },
      { text: '마이그레이션 중에는 Slack 접속이 일시적으로 제한될 수 있음을 인지합니다.' },
      { text: '마이그레이션 후 안내받을 재로그인 방법(SSO)을 미리 숙지합니다.' },
    ],
  },
];

const after: { role: 'admin' | 'user'; title: string; tasks: Task[] }[] = [
  {
    role: 'admin',
    title: '관리자 요청 사항',
    tasks: [
      { text: '마이그레이션이 정상 완료되었는지 상태와 완료 보고를 확인합니다.' },
      { text: '멤버 계정·채널·DM·파일이 조직으로 정상 이전되었는지 점검합니다.' },
      { text: '운영에 필요한 관리자 권한과 추가 설정을 재확인합니다.', note: '조직 관리자 설정 화면 참고' },
      { text: '이상이 발견되면 지원 사례(Case)를 접수합니다.', note: 'Support Case 신청 가이드 참고' },
      { text: '사용자에게 마이그레이션 완료와 재로그인 안내를 공지합니다.' },
    ],
  },
  {
    role: 'user',
    title: '사용자 요청 사항',
    tasks: [
      { text: '안내받은 방법(SSO)으로 Slack에 다시 로그인합니다.' },
      { text: '참여 중이던 채널·DM·파일이 정상적으로 보이는지 확인합니다.' },
      { text: '데스크톱·모바일 앱을 재실행하고 알림 설정을 다시 확인합니다.' },
      { text: '로그인이나 데이터에 문제가 있으면 관리자에게 문의합니다.' },
    ],
  },
];

export default function MigrationRequestsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }}
        />
        <div className="relative max-w-5xl">
          <HeroBadge>런치 3단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">마이그레이션 전 / 후 진행 요청 사항</h1>
          <p className="text-white/70 leading-relaxed">
            마이그레이션을 진행하는 경우, 전·후로 관리자와 사용자가 확인·진행해야 할 요청 사항입니다.<br />
            일정에 맞춰 체크리스트로 활용하세요.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        <InfoCallout>
          이 화면은 <strong>마이그레이션을 진행하는 경우</strong>에 해당합니다. 전/후 단계별로 관리자와 사용자가 나눠서 확인하면 누락 없이 진행할 수 있습니다.
        </InfoCallout>

        {/* 마이그레이션 전 */}
        <PhaseHeader badge="BEFORE" color="#635BFF" title="마이그레이션 전" desc="예약된 마이그레이션 전에 완료·공지해야 할 사항입니다." />
        <div className="grid md:grid-cols-2 gap-5">
          {before.map((g) => (
            <RoleCard key={g.title} role={g.role} title={g.title} tasks={g.tasks} />
          ))}
        </div>

        {/* 마이그레이션 후 */}
        <PhaseHeader badge="AFTER" color="#0EA5E9" title="마이그레이션 후" desc="마이그레이션이 완료된 직후 확인·조치해야 할 사항입니다." />
        <div className="grid md:grid-cols-2 gap-5">
          {after.map((g) => (
            <RoleCard key={g.title} role={g.role} title={g.title} tasks={g.tasks} />
          ))}
        </div>

        {/* Next */}
        <div className="mt-12">
          <Link
            href="/org-setup"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
          >
            다음: 조직 관리자 설정 →
          </Link>
        </div>
      </div>
    </div>
  );
}

function PhaseHeader({ badge, color, title, desc }: { badge: string; color: string; title: string; desc: string }) {
  return (
    <div className="mt-12 mb-5 first:mt-10">
      <div className="flex items-center gap-2.5 mb-1.5">
        <span className="text-[11px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: color }}>{badge}</span>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function RoleCard({ role, title, tasks }: { role: 'admin' | 'user'; title: string; tasks: Task[] }) {
  const isAdmin = role === 'admin';
  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-gray-100 bg-gray-50/70">
        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg ${isAdmin ? 'bg-[#635BFF]/10' : 'bg-[#0EA5E9]/10'}`}>
          {isAdmin ? (
            <svg className="w-4 h-4 text-[#635BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </span>
        <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
      </div>
      <ul className="px-5 py-4 space-y-3">
        {tasks.map((t, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isAdmin ? 'text-[#635BFF]' : 'text-[#0EA5E9]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
            </svg>
            <div className="text-sm text-gray-700 leading-relaxed">
              {t.text}
              {t.note && <span className="block text-xs text-gray-400 mt-0.5">↳ {t.note}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-xl p-4 mb-2">
      <span className="text-sky-500 flex-shrink-0 mt-0.5">💡</span>
      <p className="text-sm text-sky-800 leading-relaxed">{children}</p>
    </div>
  );
}
