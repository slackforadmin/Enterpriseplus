import Link from 'next/link';
import HeroBadge from '@/components/HeroBadge';

export default function AdminSessionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-5xl">
          <HeroBadge>런치 5단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">관리자 세션</h1>
          <p className="text-white/70 leading-relaxed">
            Slack Enterprise+ 관리자를 위한 핵심 기능과 관리 도구를 영상으로 안내합니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white aspect-video max-w-[64%] flex flex-col items-center justify-center text-center p-8">
          <div className="w-14 h-14 rounded-full bg-[#635BFF]/10 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-[#635BFF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
          <p className="font-semibold text-gray-700 mb-1">관리자 세션 영상 준비 중</p>
          <p className="text-sm text-gray-400">영상이 업로드되면 이 자리에서 바로 재생됩니다.</p>
        </div>

        {/* 런치 프로세스 완료 */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white px-6 py-8 text-center">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emerald-50 mb-3">
            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">런치 프로세스를 모두 완료했습니다</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Kick-Off부터 관리자 세션까지 모든 단계를 마쳤어요.
          </p>
          <div className="mt-5">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#635BFF] hover:underline">
              런치 가이드 처음으로
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
