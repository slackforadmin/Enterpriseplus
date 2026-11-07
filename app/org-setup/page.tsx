import Link from 'next/link';

export default function OrgSetupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-5xl">
          <Link href="/" className="text-sm text-white/60 hover:text-white mb-5 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            런치 가이드로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight mt-1">조직 추가 설정</h1>
          <p className="text-white/70 leading-relaxed">
            관리자가 조직 운영에 필요한 기본 추가 설정을 진행합니다.
          </p>
        </div>
      </div>

      <div className="px-12 py-12 max-w-5xl">
        <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-xl p-4 mb-8">
          <span className="text-sky-500 flex-shrink-0 mt-0.5">💡</span>
          <p className="text-sm text-sky-800 leading-relaxed">
            관리자 세션을 듣기 전, 조직에 기본적으로 필요한 설정을 먼저 완료하세요. 세부 항목은 곧 업데이트됩니다.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-10 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full bg-[#635BFF]/10 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-[#635BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="font-semibold text-gray-700 mb-1">콘텐츠 준비 중</p>
          <p className="text-sm text-gray-400">조직 추가 설정 가이드가 곧 업데이트됩니다.</p>
        </div>

        {/* Next */}
        <div className="mt-8">
          <Link
            href="/admin-session"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
          >
            다음: 관리자 세션 →
          </Link>
        </div>
      </div>
    </div>
  );
}
