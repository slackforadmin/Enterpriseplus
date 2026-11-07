import Link from 'next/link';
import { asset } from '@/lib/asset';
import HeroBadge from '@/components/HeroBadge';

export default function MigrationPrepPage() {
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
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">마이그레이션 사전작업</h1>
          <p className="text-white/70 leading-relaxed">
            마이그레이션 진행 전 완료해야 할 사전 준비 작업을 영상으로 안내합니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Video */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10">
              <svg className="w-4 h-4 text-[#635BFF]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
            <h2 className="text-lg font-bold text-gray-900">사전작업 영상 가이드</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-black max-w-[64%]">
            <video controls preload="metadata" poster={asset('/migration/poster.svg')} className="w-full h-auto">
              <source src={asset('/migration/migration-demo.mp4')} type="video/mp4" />
              브라우저가 영상 재생을 지원하지 않습니다.
            </video>
          </div>
          <p className="text-xs text-gray-400 mt-3">영상을 참고하여 사전작업을 완료한 뒤 마이그레이션을 진행하세요.</p>
        </div>

        {/* Next */}
        <div className="mt-6">
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
