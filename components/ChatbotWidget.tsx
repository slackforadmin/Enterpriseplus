'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { asset } from '@/lib/asset';
import { faqs, searchFaqs, type FaqItem } from '@/lib/faq';
import { searchSite, type SearchEntry } from '@/lib/searchIndex';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const results: FaqItem[] = submitted ? searchFaqs(query) : [];
  const pages: SearchEntry[] = submitted ? searchSite(query) : [];
  const nothing = submitted && results.length === 0 && pages.length === 0;
  const suggestions = faqs.slice(0, 4);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform bg-white border border-gray-200 flex items-center justify-center overflow-hidden"
        aria-label={open ? '도우미 닫기' : '도우미 열기'}
      >
        {open ? (
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <Image src={asset('/slackbot.png')} alt="도우미" width={40} height={40} className="rounded-xl" />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="px-5 py-4 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}>
            <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image src={asset('/slackbot.png')} alt="도우미" width={28} height={28} className="rounded-md" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">런치 도우미</div>
              <div className="text-white/60 text-xs">사이트 내용을 키워드로 검색하세요</div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {!submitted && (
              <>
                <p className="text-sm text-gray-500">자주 묻는 질문이에요. 키워드로 검색할 수도 있어요.</p>
                <div className="space-y-2">
                  {suggestions.map((f) => (
                    <button
                      key={f.q}
                      onClick={() => {
                        setQuery(f.q);
                        setSubmitted(true);
                      }}
                      className="w-full text-left text-sm text-gray-700 bg-gray-50 hover:bg-[#635BFF]/8 border border-gray-100 rounded-lg px-3 py-2 transition-colors"
                    >
                      {f.q}
                    </button>
                  ))}
                </div>
              </>
            )}

            {nothing && (
              <div className="text-center py-6">
                <p className="text-sm text-gray-500 mb-1">검색 결과가 없어요.</p>
                <p className="text-xs text-gray-400">다른 키워드로 검색하거나 사이드바 메뉴를 확인해보세요.</p>
              </div>
            )}

            {submitted &&
              results.map((f) => (
                <div key={f.q} className="rounded-xl border border-gray-100 p-3.5">
                  <div className="flex items-start gap-2 mb-1.5">
                    <span className="text-[#635BFF] mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <p className="text-sm font-semibold text-gray-900">{f.q}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                  {f.link && (
                    <Link
                      href={f.link.href}
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#635BFF] mt-2 hover:underline"
                    >
                      {f.link.label}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}

            {submitted && pages.length > 0 && (
              <div className="pt-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">페이지 바로가기</p>
                <div className="space-y-2">
                  {pages.map((p) => {
                    const inner = (
                      <>
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10 flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-[#635BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </span>
                        <span className="flex-1 min-w-0 text-left">
                          <span className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-[#635BFF]">{p.title}</span>
                            <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{p.category}</span>
                          </span>
                          <span className="block text-xs text-gray-500 leading-relaxed mt-0.5">{p.desc}</span>
                        </span>
                      </>
                    );
                    const cls = 'group w-full flex items-start gap-2.5 rounded-xl border border-gray-100 p-3 hover:border-[#635BFF]/40 hover:bg-[#635BFF]/[0.03] transition-colors';
                    if (p.action) {
                      return (
                        <button
                          key={p.href}
                          type="button"
                          onClick={() => {
                            setOpen(false);
                            window.dispatchEvent(new CustomEvent('open-modal', { detail: p.action }));
                          }}
                          className={cls}
                        >
                          {inner}
                        </button>
                      );
                    }
                    return (
                      <Link key={p.href} href={p.href} onClick={() => setOpen(false)} className={cls}>
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="p-3 border-t border-gray-100 flex gap-2">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSubmitted(false);
              }}
              placeholder="질문을 입력하세요 (예: SSO 설정)"
              className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF]"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-lg bg-[#635BFF] text-white flex items-center justify-center hover:bg-[#4F46E5] transition-colors flex-shrink-0"
              aria-label="검색"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
