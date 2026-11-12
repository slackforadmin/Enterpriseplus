import Link from 'next/link';
import HeroBadge from '@/components/HeroBadge';
import { asset } from '@/lib/asset';

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
          <HeroBadge>론치 3단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">마이그레이션 오버뷰 세션</h1>
          <p className="text-white/70 leading-relaxed">
            마이그레이션 전체 과정과 주요 고려사항을 영상과 함께 안내합니다.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            약 12분 소요
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10">
            <svg className="w-4 h-4 text-[#635BFF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </span>
          <h2 className="text-lg font-bold text-gray-900">마이그레이션 오버뷰 영상</h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-black max-w-full md:max-w-[64%]">
          <video controls playsInline preload="metadata" className="w-full h-auto aspect-video">
            <source src={asset('/migration/overview.mp4')} type="video/mp4" />
            브라우저가 영상 재생을 지원하지 않습니다.
          </video>
        </div>
        <p className="text-xs text-gray-400 mt-3">영상으로 마이그레이션 전체 과정을 이해한 뒤, 사전작업을 진행하세요.</p>

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
