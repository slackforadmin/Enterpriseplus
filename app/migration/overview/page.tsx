import Link from 'next/link';

export default function MigrationOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-12 py-16 max-w-4xl">
        <Link href="/migration" className="text-xs text-gray-400 hover:text-gray-600 mb-6 inline-flex items-center gap-1">
          ← 마이그레이션으로 돌아가기
        </Link>
        <div className="mb-2 mt-4">
          <span className="text-xs font-semibold text-[#10B981] uppercase tracking-wider">마이그레이션 · 1단계</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">마이그레이션 오버뷰</h1>
        <p className="text-gray-500 mb-10">마이그레이션 전체 과정과 주요 고려사항을 안내합니다.</p>

        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <p className="text-sm text-gray-500">콘텐츠를 여기에 추가하세요.</p>
        </div>

        <div className="mt-6">
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
