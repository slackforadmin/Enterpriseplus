export default function UserSessionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-12 py-16 max-w-4xl">
        <div className="mb-2">
          <span className="text-xs font-semibold text-[#635BFF] uppercase tracking-wider">세션</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">사용자 세션</h1>
        <p className="text-gray-500 mb-10">일반 사용자를 위한 Slack 사용 가이드와 온보딩 자료입니다.</p>

        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <p className="text-sm text-gray-500">콘텐츠를 여기에 추가하세요.</p>
        </div>

        <div className="mt-8 p-5 bg-[#635BFF]/5 border border-[#635BFF]/20 rounded-xl">
          <p className="text-sm font-semibold text-[#635BFF] mb-1">🎉 모든 단계 완료!</p>
          <p className="text-sm text-gray-600">Slack Enterprise+ 런치 가이드의 모든 단계를 완료했습니다.</p>
        </div>
      </div>
    </div>
  );
}
