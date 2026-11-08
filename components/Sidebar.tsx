'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import CacheClearModal from '@/components/CacheClearModal';
import SsoExceptionModal from '@/components/SsoExceptionModal';

const navItems = [
  {
    label: '런치 가이드',
    href: '/',
  },
  {
    label: 'Kick-Off 영상',
    href: '/kickoff',
  },
  {
    label: 'Day 1 조직 초기 설정',
    href: '/day1-setup',
  },
  {
    label: 'SSO 설정',
    href: '/sso',
    children: [
      { label: 'SSO없음-DummySSO', href: '/sso/dummy' },
      { label: 'Google', href: '/sso/google' },
      { label: 'Okta', href: '/sso/okta' },
      { label: 'Entra ID', href: '/sso/entra' },
    ],
  },
  {
    label: '마이그레이션',
    href: '/migration',
    children: [
      { label: '마이그레이션 오버뷰 세션', href: '/migration/overview' },
      { label: '마이그레이션 사전작업', href: '/migration/prep' },
      { label: '전/후 진행 요청사항', href: '/migration/requests' },
    ],
  },
  {
    label: '조직 관리자 설정',
    href: '/org-setup',
  },
  {
    label: '관리자 세션',
    href: '/admin-session',
  },
];

const referenceItems = [
  { label: 'Roles & Permissions', href: '/reference/roles' },
  { label: '데이터 보존 정책', href: '/reference/retention' },
  { label: 'Support Case 신청', href: '/reference/support-case' },
  { label: 'FAQ & 문제 해결', href: '/reference/faq' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [cacheOpen, setCacheOpen] = useState(false);
  const [ssoExcOpen, setSsoExcOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('sidebar-collapsed', collapsed);
  }, [collapsed]);

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: typeof navItems[0]) => {
    if (isActive(item.href)) return true;
    if (item.children) {
      return item.children.some((child) => isActive(child.href));
    }
    return false;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        className="sidebar-toggle"
        aria-label={collapsed ? '사이드바 펼치기' : '사이드바 접기'}
        title={collapsed ? '사이드바 펼치기' : '사이드바 접기'}
      >
        {collapsed ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
          </svg>
        )}
      </button>
      <nav className="sidebar flex flex-col">
      {/* Logo */}
      <div className="px-5 py-6 pr-14">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105" style={{ background: 'linear-gradient(135deg, #635BFF 0%, #0EA5E9 100%)' }}>
            <svg width="15" height="15" viewBox="0 0 54 54" fill="none">
              <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#fff"/>
              <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#fff"/>
              <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#fff"/>
              <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.249m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#fff"/>
            </svg>
          </div>
          <span className="text-white font-semibold text-[15px] tracking-tight truncate">Ent+ Launch Guide</span>
        </Link>
      </div>

      {/* Nav items */}
      <div className="flex-1 min-h-0 overflow-y-auto pt-10 pb-2 px-3">
        {navItems.map((item) => (
          <div key={item.href} className="mb-0.5">
            <Link
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${
                isParentActive(item)
                  ? 'bg-[#635BFF] text-white'
                  : 'text-[var(--sidebar-text)] hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.href === '/reference/roles' && (
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )}
              {item.href === '/reference/retention' && (
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              {item.href === '/reference/support-case' && (
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                </svg>
              )}
              {item.label}
            </Link>
            {item.children && isParentActive(item) && (
              <div className="mt-1 ml-3.5 pl-3 border-l border-white/10 space-y-0.5">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`flex items-center px-3 py-1.5 rounded-md text-[12px] transition-all ${
                      isActive(child.href)
                        ? 'text-white font-medium bg-white/10'
                        : 'text-[var(--sidebar-text)] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* 참고 자료 섹션 */}
        <div className="mx-3 my-3 border-t border-white/10" />
        <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--sidebar-text)]/70">
          참고 자료
        </p>
        {referenceItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 px-3 py-2 mb-0.5 rounded-lg text-[13px] font-medium transition-all ${
              isActive(item.href)
                ? 'bg-[#635BFF] text-white'
                : 'text-[var(--sidebar-text)] hover:bg-white/5 hover:text-white'
            }`}
          >
            {item.href === '/reference/roles' && (
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            )}
            {item.href === '/reference/retention' && (
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )}
            {item.href === '/reference/support-case' && (
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 3v-3z" />
              </svg>
            )}
            {item.href === '/reference/faq' && (
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {item.label}
          </Link>
        ))}

        <button
          type="button"
          onClick={() => setSsoExcOpen(true)}
          className="w-full flex items-center gap-2 px-3 py-2 mb-0.5 rounded-lg text-[13px] font-medium text-[var(--sidebar-text)] hover:bg-white/5 hover:text-white transition-all text-left"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          사용자 SSO 예외처리
        </button>
        <button
          type="button"
          onClick={() => setCacheOpen(true)}
          className="w-full flex items-center gap-2 px-3 py-2 mb-0.5 rounded-lg text-[13px] font-medium text-[var(--sidebar-text)] hover:bg-white/5 hover:text-white transition-all text-left"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          캐시 초기화 방법
        </button>
      </div>
    </nav>
    <SsoExceptionModal open={ssoExcOpen} onClose={() => setSsoExcOpen(false)} />
    <CacheClearModal open={cacheOpen} onClose={() => setCacheOpen(false)} />
    </>
  );
}
