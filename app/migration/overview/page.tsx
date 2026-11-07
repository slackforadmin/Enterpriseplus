import Link from 'next/link';
import HeroBadge from '@/components/HeroBadge';

export default function MigrationOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-5xl">
          <Link href="/migration" className="text-sm text-white/60 hover:text-white mb-5 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            마이그레이션으로 돌아가기
          </Link>
          <HeroBadge>런치 3단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">마이그레이션 오버뷰</h1>
          <p className="text-white/70 leading-relaxed">
            마이그레이션 전체 과정과 주요 고려사항을 영상과 함께 안내합니다.
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
          <p className="font-semibold text-gray-700 mb-1">오버뷰 영상 준비 중</p>
          <p className="text-sm text-gray-400">영상이 업로드되면 이 자리에서 바로 재생됩니다.</p>
        </div>

        <div className="mt-8">
          <Link
            href="/migration/prep"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
          >
            다음: 마이그레이션 사전작업 →
          </Link>
        </div>
      </div>
    </div>
  );
}
