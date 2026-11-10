import { searchBodies } from './searchBodies.generated';

export type SearchEntry = {
  title: string;
  category: string;
  href: string;
  keywords: string[];
  desc: string;
  action?: 'cache' | 'sso-exception';
};

// 사이트 전체 검색 인덱스 — 페이지/주요 섹션을 추가하면 여기에 항목을 넣으세요.
export const searchIndex: SearchEntry[] = [
  // 론치 단계
  { title: '론치 가이드 (홈)', category: '론치', href: '/', keywords: ['홈', 'home', '론치', '가이드', '여정', '시작', '온보딩', '관리자 온보딩', '단계', '프로세스'], desc: 'Kick-Off부터 관리자 온보딩까지 전체 론치 여정을 안내하는 홈 화면입니다.' },
  { title: 'Kick-Off', category: '론치 1단계', href: '/kickoff', keywords: ['kickoff', '킥오프', '영상', '시청', '시작', '아키텍처', '조직 구조', '워크스페이스', '슬랙 커넥트', 'connect', '스폰서드', '관리자 타입', '역할', '사용자 타입', '게스트', '멤버', 'dm', '디엠'], desc: '론치 시작 전 Enterprise+ 조직 구조·관리자 역할·사용자 타입을 담은 Kick-Off 영상(약 8분).' },
  { title: 'Day 1 조직 초기 설정', category: '론치 2단계', href: '/day1-setup', keywords: ['day1', 'day 1', '조직', '초기', '설정', '시작일', '계약', '계약 시작일', '이메일 확인', 'account setting', 'enterprise setup', '조직 도메인', '워크스페이스 생성', '주 소유자'], desc: '계약 시작일에 조직의 기본 환경을 설정하는 단계별 가이드입니다.' },
  { title: 'SSO 설정', category: '론치 2단계', href: '/sso', keywords: ['sso', '싱글사인온', '로그인', 'saml', '인증', 'idp', 'sso 없음', 'sso 사용', 'dummy', 'google', 'okta', 'entra'], desc: '조직 구성원의 로그인 방식을 설정합니다. 사용 여부와 IdP를 선택하세요.' },
  { title: 'Dummy SSO 설정', category: 'SSO', href: '/sso/dummy', keywords: ['dummy', '더미', 'sso', 'simple idp', '시크릿', '시크릿 모드', '예외처리', 'add to slack', 'sso 구성', 'setup instructions', '버튼명 변경', '미사용 버튼', '조직 설치', '앱 액세스 허용'], desc: 'SSO를 사용하지 않는 경우 Simple IdP로 Dummy SSO를 설정합니다.' },
  { title: 'Google SSO 설정', category: 'SSO', href: '/sso/google', keywords: ['google', '구글', 'workspace', 'sso', 'saml', '프로비저닝', 'idp', '단계별 설정'], desc: 'Google Workspace와 SAML 기반으로 SSO를 연동합니다.' },
  { title: 'Okta SSO 설정', category: 'SSO', href: '/sso/okta', keywords: ['okta', '옥타', 'sso', '프로비저닝', 'saml', 'application label', 'domain', '앱 카탈로그', 'provisioning', 'push groups', '그룹 sync', 'scim'], desc: 'Okta 앱 카탈로그 추가부터 프로비저닝·그룹 Sync까지 SSO를 연동합니다.' },
  { title: 'Entra ID SSO 설정', category: 'SSO', href: '/sso/entra', keywords: ['entra', '엔트라', 'azure', 'azure ad', 'microsoft', '마이크로소프트', 'sso', 'saml', 'attribute', '속성 매핑', 'unique id', 'first_name', '프로비저닝'], desc: 'Microsoft Entra ID(Azure AD)와 SSO를 연동하고 attribute 매핑을 확인합니다.' },
  { title: '마이그레이션', category: '론치 3단계', href: '/migration', keywords: ['마이그레이션', 'migration', '이전', '데이터 이전', '워크스페이스 이전', '단계'], desc: '기존 Slack 데이터를 이전하는 경우의 진행 단계를 안내합니다.' },
  { title: '마이그레이션 오버뷰 세션', category: '마이그레이션', href: '/migration/overview', keywords: ['오버뷰', 'overview', '마이그레이션', '영상', '세션', '전체 과정', '고려사항'], desc: '마이그레이션 전체 과정과 주요 고려사항을 영상으로 안내합니다.' },
  { title: '마이그레이션 사전작업', category: '마이그레이션', href: '/migration/prep', keywords: ['사전작업', '마이그레이션', '대시보드', '이전 예약', '비밀번호', '캐시', 'verify', '인증 코드', '조직 url', '이전 요청', '동의', '이메일 업데이트', '계정 검토', '설정 검토', '충돌', 'csv', 'utf-8', 'kst', '타임존', '병합'], desc: '이전 요청·동의부터 대시보드 단계, 이전 예약까지 사전작업을 안내합니다.' },
  { title: '마이그레이션 전/후 진행 요청 사항', category: '마이그레이션', href: '/migration/requests', keywords: ['전후', '요청사항', '사용자', '관리자', '캐시 초기화', 'sso 예외처리', '재인증', '비밀번호', '패스워드', '워크플로', '커넥터', '워크플로 커넥터', '사전 승인', '앱', '웹훅', '로그인 확인'], desc: 'Dummy SSO/SSO 경우별로 마이그레이션 전·후 사용자·관리자 요청 사항과 워크플로 커넥터 사전 승인을 안내합니다.' },
  { title: '조직 관리자 설정', category: '론치 4단계', href: '/org-setup', keywords: ['조직', '관리자', '설정', 'dlp', '법적 자료', '플래그', '데이터 내보내기', '데이터 보존', 'retention', '내보내기', '모든 채널과 대화', '사용자 지정', '채널 감사', 'export', 'ip 허용', '역할', '권한'], desc: '운영에 필요하지만 기본값이 권한 부여되지 않은 설정들(데이터 내보내기·보존 등)을 안내합니다.' },
  { title: '관리자 세션', category: '론치 5단계', href: '/admin-session', keywords: ['관리자', '세션', '조직 관리', '메뉴 가이드', '보안', 'dlp', '감사', '감사 로그', '스킬', '엔터프라이즈 검색', 'jira', 'confluence', '컴플라이언스', 'ip 허용', '메시지 복사', '데이터 내보내기', '역할', '권한', '영상'], desc: '관리자를 위한 조직 관리 화면의 메뉴별(사용·구성, 역할·권한, 보안·컴플라이언스 등) 핵심 포인트를 정리한 가이드입니다.' },

  // 참고 자료
  { title: 'Roles & Permissions', category: '참고 자료', href: '/reference/roles', keywords: ['역할', '권한', 'roles', 'permission', '소유자', '관리자', 'owner', 'admin', '계층', '주 소유자', '조직 소유자', '조직 관리자', '워크스페이스 소유자', '시스템 역할', 'system role', '채널 관리자', '역할 계층'], desc: '조직·워크스페이스·채널·시스템 역할별 권한과 역할 계층을 확인합니다.' },
  { title: '데이터 보존 정책 & 기간 설정', category: '참고 자료', href: '/reference/retention', keywords: ['데이터 보존', '보존', 'retention', '기간', '삭제', '리텐션', '내역', '공개 채널', '비공개 채널', 'dm', '파일 보존', '캔버스', '리스트', '워크스페이스 고정', 'lock', '잠금', '재정의', 'override'], desc: '메시지·파일·캔버스의 보존 주기와 워크스페이스 고정(Lock)을 조직/워크스페이스 레벨에서 설정하는 방법.' },
  { title: 'Support Case 신청 가이드', category: '참고 자료', href: '/reference/support-case', keywords: ['support', '지원', 'case', '케이스', '사례', 'feedback', '문의', '포털', '지원 포털', 'portal', 'salesforce', '고객지원센터'], desc: 'Slack 고객지원센터 → Salesforce Portal → 사례 생성까지 접수 흐름을 안내합니다.' },
  { title: 'FAQ & 문제 해결', category: '참고 자료', href: '/reference/faq', keywords: ['faq', '문제 해결', '404', '결함', '오류', '조직 관리', '워크스페이스 관리', 'url', '시크릿 모드', 'encoded id', 'org id', '홈 클릭', '메뉴 항목', '화면 구분', '어느 화면'], desc: '404 오류 해결, 조직 관리 vs 워크스페이스 관리 화면 구분 등 자주 겪는 상황을 모았습니다.' },

  // 사이드바 모달 (페이지 아님 — 클릭 시 모달 열림)
  { title: '사용자 SSO 인증 예외처리', category: '도구', href: '#sso-exception', action: 'sso-exception', keywords: ['sso 예외처리', '예외처리', 'sso 우회', '이메일 비밀번호 로그인', '로그인 허용', '특정 멤버', '예외'], desc: 'SSO를 사용하지 않는 인원이 이메일·비밀번호로 로그인하도록 예외를 설정하는 방법입니다.' },
  { title: '캐시 초기화 방법', category: '도구', href: '#cache-clear', action: 'cache', keywords: ['캐시', '캐시 초기화', 'cache', '조직 안 보임', '로그인 꼬임', '데스크톱', '모바일', 'mac', 'windows', 'ios', 'android'], desc: '조직이 보이지 않거나 로그인이 꼬일 때 데스크톱·모바일에서 캐시를 초기화하는 방법입니다.' },
];

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, '');

export function searchSite(query: string): SearchEntry[] {
  const q = normalize(query);
  if (!q) return [];
  return searchIndex
    .map((item) => {
      let score = 0;
      const body = searchBodies[item.href] || '';
      const hay = normalize(item.title + ' ' + item.category + ' ' + item.keywords.join(' ') + ' ' + item.desc + ' ' + body);
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
