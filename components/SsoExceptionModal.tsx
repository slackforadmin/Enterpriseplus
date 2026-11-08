'use client';

import { useEffect } from 'react';
import { asset } from '@/lib/asset';

export default function SsoExceptionModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
      aria-label="사용자 SSO 인증 예외처리"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h2 className="text-base font-bold text-gray-900">사용자 SSO 인증 예외처리</h2>
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
        <div className="px-6 py-5 space-y-5 overflow-y-auto">
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <span className="text-amber-500 flex-shrink-0 mt-0.5">⚠️</span>
            <p className="text-sm text-amber-800 leading-relaxed">
              Dummy SSO를 설정한 경우, <strong>모든 사용자에 대해 예외 설정이 반드시 필요</strong>합니다. <strong>새 사용자를 초대할 때마다</strong>, 그리고 <strong>마이그레이션 이후 전체 사용자</strong>에 대해 예외를 설정해야 하며, 설정하지 않으면 해당 사용자는 로그인할 수 없습니다.
            </p>
          </div>

          {/* 단계 */}
          <div className="space-y-4">
            <Step n="1">
              조직 관리 화면에서 <Pill>보안</Pill> → <Pill>SSO 설정</Pill> → <Pill>이메일과 비밀번호로 로그인하도록 허용</Pill>의 <Pill>편집</Pill> 버튼을 클릭합니다.
            </Step>
            <Step n="2">
              아래 항목을 모두 체크합니다.
              <ul className="mt-2.5 space-y-1.5">
                {[
                  '사용자가 이메일과 비밀번호로 로그인하고 SSO를 우회하도록 허용',
                  '모든 조직 소유자',
                  '모든 게스트',
                  '특정 멤버',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[13px] text-gray-700 leading-relaxed">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Step>
            <Step n="3">
              <Pill>특정 멤버</Pill>를 선택한 뒤 <Pill>추가</Pill>에서 해당 멤버를 선택합니다.
            </Step>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img src={asset('/dummy-sso/sso-exception.webp')} alt="이메일과 비밀번호로 로그인하도록 허용 - SSO 우회 설정" className="block w-full h-auto" />
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            사용자가 로그인할 때 Dummy SSO를 거치지 않고 ID/비밀번호로 로그인하도록 하는 설정입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
      <div className="text-sm text-gray-700 leading-relaxed pt-0.5 flex-1">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#635BFF]/10 text-[#635BFF] text-xs font-semibold mx-0.5">{children}</span>
  );
}
