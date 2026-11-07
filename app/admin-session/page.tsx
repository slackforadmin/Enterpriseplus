import Link from 'next/link';

export default function AdminSessionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-12 py-16 max-w-5xl">
        <div className="mb-2">
          <span className="text-xs font-semibold text-[#635BFF] uppercase tracking-wider">세션</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">관리자 세션</h1>
        <p className="text-gray-500 mb-10">Slack Enterprise+ 관리자를 위한 핵심 기능과 관리 도구 안내입니다.</p>

        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <p className="text-sm text-gray-500">콘텐츠를 여기에 추가하세요.</p>
        </div>

        <div className="mt-6">
          <Link
            href="/user-session"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
          >
            다음: 사용자 세션 →
          </Link>
        </div>
      </div>
    </div>
  );
}
