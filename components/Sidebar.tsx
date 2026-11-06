'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    label: '런치 가이드',
    href: '/',
  },
  {
    label: 'Day 1 조직 초기 설정',
    href: '/day1-setup',
  },
  {
    label: 'SSO 설정',
    href: '/sso',
    children: [
      { label: 'SSO 없음 (Dummy SSO)', href: '/sso/dummy' },
      { label: 'Google', href: '/sso/google' },
      { label: 'Okta', href: '/sso/okta' },
      { label: 'Entra ID', href: '/sso/entra' },
    ],
  },
  {
    label: '마이그레이션',
    href: '/migration',
    children: [
      { label: '마이그레이션 오버뷰', href: '/migration/overview' },
      { label: '마이그레이션 사전작업', href: '/migration/prep' },
    ],
  },
  {
    label: '관리자 세션',
    href: '/admin-session',
  },
  {
    label: '사용자 세션',
    href: '/user-session',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: typeof navItems[0]) => {
    if (isActive(item.href)) return true;
    if (item.children) {
      return item.children.some((child) => isActive(child.href));
    }
    return false;
  };

  return (
    <nav className="sidebar flex flex-col">
      {/* Logo */}
      <div className="px-5 py-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #635BFF 0%, #0EA5E9 100%)' }}>
            <svg width="15" height="15" viewBox="0 0 54 54" fill="none">
              <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#fff"/>
              <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#fff"/>
              <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#fff"/>
              <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.249m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#fff"/>
            </svg>
          </div>
          <span className="text-white font-semibold text-[15px] tracking-tight">Launch Guide</span>
        </div>
      </div>

      {/* Nav items */}
      <div className="flex-1 py-2 px-3">
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
      </div>
    </nav>
  );
}
