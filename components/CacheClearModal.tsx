'use client';

import { useEffect } from 'react';
import { asset } from '@/lib/asset';

export default function CacheClearModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="캐시 초기화 방법"
    >
      <div
        className="w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-none flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10">
              <svg className="w-4 h-4 text-[#635BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </span>
            <h2 className="text-base font-bold text-gray-900">캐시 초기화 방법</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5 overflow-y-auto no-scrollbar">
          <p className="text-sm text-gray-500 leading-relaxed">
            조직이 보이지 않거나 로그인 상태가 꼬인 경우, 이전 워크스페이스 캐시를 초기화하면 해결되는 경우가 많습니다.
          </p>

          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-bold text-gray-800 mb-2">
              <svg className="w-4 h-4 text-[#635BFF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              데스크톱
            </h3>
            <ul className="space-y-2 text-[13px] text-gray-600 leading-relaxed">
              <li className="flex gap-2">
                <span className="font-semibold text-gray-900 w-16 flex-shrink-0">Mac</span>
                <span>Slack 데스크톱 앱 → <Pill>도움말</Pill> → <Pill>문제 해결</Pill> → <Pill>캐시 지우기 및 재시작</Pill></span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-gray-900 w-16 flex-shrink-0">Windows</span>
                <span>왼쪽 상단 ☰ 세 줄 아이콘 → <Pill>도움말</Pill> → <Pill>문제 해결</Pill> → <Pill>캐시 지우기 및 재시작</Pill></span>
              </li>
            </ul>
            <div className="mt-3 rounded-xl overflow-hidden">
              <img src={asset('/dummy-sso/cache-clear-mac.png')} alt="Mac - 도움말 > 문제 해결 > 캐시 지우기 및 재시작" className="block w-full h-auto" />
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-bold text-gray-800 mb-2">
              <svg className="w-4 h-4 text-[#635BFF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
              </svg>
              모바일
            </h3>
            <ul className="space-y-2 text-[13px] text-gray-600 leading-relaxed">
              <li className="flex gap-2">
                <span className="font-semibold text-gray-900 w-16 flex-shrink-0">iOS</span>
                <span>설정 → 앱 → Slack → <Pill>다음 실행 시 캐시 재설정</Pill> 활성화 → 앱 강제 종료</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-gray-900 w-16 flex-shrink-0">Android</span>
                <span>설정 → 앱 → Slack → <Pill>저장공간</Pill> → <Pill>캐시 삭제</Pill></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#635BFF]/10 text-[#635BFF] text-xs font-semibold mx-0.5">{children}</span>
  );
}
