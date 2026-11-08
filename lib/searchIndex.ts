export type SearchEntry = {
  title: string;
  category: string;
  href: string;
  keywords: string[];
  desc: string;
};

// 사이트 전체 검색 인덱스 — 페이지/주요 섹션을 추가하면 여기에 항목을 넣으세요.
export const searchIndex: SearchEntry[] = [
  // 런치 단계
  { title: '런치 가이드 (홈)', category: '런치', href: '/', keywords: ['홈', 'home', '런치', '가이드', '여정', '시작'], desc: 'Kick-Off부터 관리자 온보딩까지 전체 런치 여정을 안내하는 홈 화면입니다.' },
  { title: 'Kick-Off 영상', category: '런치 1단계', href: '/kickoff', keywords: ['kickoff', '킥오프', '영상', '시청', '시작'], desc: '런치 시작 전 전체 과정과 핵심 포인트를 담은 Kick-Off 영상(약 8분).' },
  { title: 'Day 1 조직 초기 설정', category: '런치 2단계', href: '/day1-setup', keywords: ['day1', 'day 1', '조직', '초기', '설정', '시작일', '계약'], desc: '서비스 시작일에 조직의 기본 환경을 설정하는 단계별 가이드입니다.' },
  { title: 'SSO 설정', category: '런치 2단계', href: '/sso', keywords: ['sso', '싱글사인온', '로그인', 'saml', '인증', 'idp'], desc: '조직 구성원의 로그인 방식을 설정합니다. 사용 여부와 IdP를 선택하세요.' },
  { title: 'Dummy SSO 설정', category: 'SSO', href: '/sso/dummy', keywords: ['dummy', '더미', 'sso', 'simple idp', '시크릿', '예외처리'], desc: 'SSO를 사용하지 않는 경우 Simple IdP로 Dummy SSO를 설정합니다.' },
  { title: 'Google SSO 설정', category: 'SSO', href: '/sso/google', keywords: ['google', '구글', 'workspace', 'sso', 'saml'], desc: 'Google Workspace와 SAML 기반으로 SSO를 연동합니다.' },
  { title: 'Okta SSO 설정', category: 'SSO', href: '/sso/okta', keywords: ['okta', '옥타', 'sso', '프로비저닝'], desc: 'Okta 앱 카탈로그 추가부터 프로비저닝까지 SSO를 연동합니다.' },
  { title: 'Entra ID SSO 설정', category: 'SSO', href: '/sso/entra', keywords: ['entra', '엔트라', 'azure', 'microsoft', '마이크로소프트', 'sso'], desc: 'Microsoft Entra ID(Azure AD)와 SSO를 연동하고 attribute 매핑을 확인합니다.' },
  { title: '마이그레이션', category: '런치 3단계', href: '/migration', keywords: ['마이그레이션', 'migration', '이전', '데이터 이전'], desc: '기존 Slack 데이터를 이전하는 경우의 진행 단계를 안내합니다.' },
  { title: '마이그레이션 오버뷰 세션', category: '마이그레이션', href: '/migration/overview', keywords: ['오버뷰', 'overview', '마이그레이션', '영상'], desc: '마이그레이션 전체 과정과 주요 고려사항을 영상으로 안내합니다.' },
  { title: '마이그레이션 사전작업', category: '마이그레이션', href: '/migration/prep', keywords: ['사전작업', '마이그레이션', '대시보드', '이전 예약', '비밀번호', '캐시'], desc: '이전 요청·동의부터 대시보드 6단계, 이전 예약까지 사전작업을 안내합니다.' },
  { title: '마이그레이션 전/후 진행 요청 사항', category: '마이그레이션', href: '/migration/requests', keywords: ['전후', '요청사항', '사용자', '관리자', '캐시 초기화', 'sso 예외처리', '재인증'], desc: 'Dummy SSO/SSO 경우별로 마이그레이션 전·후 사용자·관리자 요청 사항을 안내합니다.' },
  { title: '조직 관리자 설정', category: '런치 4단계', href: '/org-setup', keywords: ['조직', '관리자', '설정', 'dlp', '법적 자료', '플래그', '데이터 내보내기', '데이터 보존'], desc: '운영에 필요하지만 기본값이 권한 부여되지 않은 설정들을 안내합니다.' },
  { title: '관리자 세션', category: '런치 5단계', href: '/admin-session', keywords: ['관리자', '세션', '조직 관리', '메뉴 가이드', '보안', 'dlp', '감사'], desc: '관리자를 위한 조직 관리 화면의 메뉴별 핵심 포인트를 정리한 가이드입니다.' },

  // 참고 자료
  { title: 'Roles & Permissions', category: '참고 자료', href: '/reference/roles', keywords: ['역할', '권한', 'roles', 'permission', '소유자', '관리자', 'owner', 'admin', '계층'], desc: '조직·워크스페이스·채널·시스템 역할별 권한과 역할 계층을 확인합니다.' },
  { title: '데이터 보존 정책 & 기간 설정', category: '참고 자료', href: '/reference/retention', keywords: ['데이터 보존', '보존', 'retention', '기간', '삭제', '리텐션', '내역'], desc: '메시지·파일·캔버스의 보존 주기를 조직/워크스페이스 레벨에서 설정하는 방법.' },
  { title: 'Support Case 신청 가이드', category: '참고 자료', href: '/reference/support-case', keywords: ['support', '지원', 'case', '케이스', '사례', 'feedback', '문의', '포털'], desc: 'Slack 고객지원센터 → Salesforce Portal → 사례 생성까지 접수 흐름을 안내합니다.' },
  { title: 'FAQ & 문제 해결', category: '참고 자료', href: '/reference/faq', keywords: ['faq', '문제 해결', '404', '결함', '오류', '조직 관리', '워크스페이스 관리', 'url'], desc: '404 오류 해결, 조직 관리 vs 워크스페이스 관리 화면 구분 등 자주 겪는 상황을 모았습니다.' },
];

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, '');

export function searchSite(query: string): SearchEntry[] {
  const q = normalize(query);
  if (!q) return [];
  return searchIndex
    .map((item) => {
      let score = 0;
      const hay = normalize(item.title + ' ' + item.category + ' ' + item.keywords.join(' ') + ' ' + item.desc);
      for (const kw of item.keywords) {
        if (q.includes(normalize(kw)) || normalize(kw).includes(q)) score += 3;
      }
      if (normalize(item.title).includes(q)) score += 3;
      if (hay.includes(q)) score += 1;
      for (const token of query.toLowerCase().split(/\s+/).filter(Boolean)) {
        if (hay.includes(normalize(token))) score += 1;
      }
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.item);
}
