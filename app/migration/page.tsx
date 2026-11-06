'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MigrationPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-12 py-16 max-w-4xl">
        <div className="mb-2">
          <span className="text-xs font-semibold text-[#10B981] uppercase tracking-wider">선택사항</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">마이그레이션</h1>
        <p className="text-gray-500 mb-10">
          기존 Slack 데이터를 Enterprise+로 이전할 계획이 있으신가요?
        </p>

        <div className="space-y-3 mb-8">
          <button
            onClick={() => setSelected('yes')}
            className={`w-full flex items-center gap-4 p-5 bg-white rounded-xl border-2 text-left transition-all ${
              selected === 'yes' ? 'border-[#635BFF] shadow-sm' : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-[#10B981] text-lg">✓</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">마이그레이션 있음</div>
              <div className="text-xs text-gray-500 mt-0.5">기존 Slack 데이터를 Enterprise+로 이전합니다.</div>
            </div>
            {selected === 'yes' && (
              <div className="ml-auto w-5 h-5 rounded-full bg-[#635BFF] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>

          <button
            onClick={() => setSelected('no')}
            className={`w-full flex items-center gap-4 p-5 bg-white rounded-xl border-2 text-left transition-all ${
              selected === 'no' ? 'border-[#635BFF] shadow-sm' : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span className="text-gray-400 text-lg">✕</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">마이그레이션 없음</div>
              <div className="text-xs text-gray-500 mt-0.5">새로 시작하거나 마이그레이션이 필요하지 않습니다.</div>
            </div>
            {selected === 'no' && (
              <div className="ml-auto w-5 h-5 rounded-full bg-[#635BFF] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        </div>

        {selected === 'yes' && (
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">마이그레이션 단계</h3>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/migration/overview')}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-[#10B981] hover:bg-[#10B981]/5 transition-all text-left group"
              >
                <div className="w-7 h-7 rounded-full bg-[#10B981] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <div className="font-medium text-gray-900 text-sm group-hover:text-[#10B981]">마이그레이션 오버뷰</div>
                  <div className="text-xs text-gray-400 mt-0.5">마이그레이션 전체 과정을 이해합니다.</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#10B981] ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => router.push('/migration/prep')}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-[#10B981] hover:bg-[#10B981]/5 transition-all text-left group"
              >
                <div className="w-7 h-7 rounded-full bg-[#10B981] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <div className="font-medium text-gray-900 text-sm group-hover:text-[#10B981]">마이그레이션 사전작업</div>
                  <div className="text-xs text-gray-400 mt-0.5">마이그레이션 전 필요한 준비를 완료합니다.</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#10B981] ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {selected === 'no' && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              마이그레이션 없이 진행합니다. 다음 단계인 <strong>관리자 세션</strong>으로 이동하세요.
            </p>
            <button
              onClick={() => router.push('/admin-session')}
              className="mt-3 px-4 py-2 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
            >
              관리자 세션으로 →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
