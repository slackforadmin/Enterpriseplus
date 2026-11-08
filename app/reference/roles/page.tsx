import HeroBadge from '@/components/HeroBadge';

const SEARCH_BASE = 'https://slack.com/help/search?query=';
const helpLink = (title: string) => `${SEARCH_BASE}${encodeURIComponent(title)}`;

type Perm = { ko: string; en: string; note?: string; url?: string };
type Role = { ko: string; en: string; desc: string; perms: Perm[] };
type Group = { tier: string; color: string; roles: Role[] };

const groups: Group[] = [
  {
    tier: '조직 (Organization)',
    color: '#635BFF',
    roles: [
      {
        ko: '조직 주 소유자',
        en: 'Org Primary Owner',
        desc: '모든 조직에는 가장 높은 권한을 가진 한 명의 기본 소유자가 있습니다. Slack에서 가장 강력한 관리 역할이며, 청구·워크스페이스 인증·액세스·보안 정책 등에 접근할 수 있습니다. 한 명만 존재할 수 있지만 다른 구성원에게 양도할 수 있습니다. 조직 소유자가 할 수 있는 모든 일에 더해 다음을 할 수 있습니다.',
        perms: [
          { ko: '조직의 소유권 이전', en: 'Transfer ownership of the org', url: 'https://slack.com/intl/ko-kr/help/articles/204401633-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%98%90%EB%8A%94-%EC%A1%B0%EC%A7%81%EC%9D%98-%EC%86%8C%EC%9C%A0%EA%B6%8C-%EC%9D%B4%EC%A0%84' },
          { ko: '채널 관리 도구 사용', en: 'Use channel management tools', url: 'https://slack.com/intl/ko-kr/help/articles/360047512554-%EC%B1%84%EB%84%90-%EA%B4%80%EB%A6%AC-%EB%8F%84%EA%B5%AC-%EC%82%AC%EC%9A%A9' },
        ],
      },
      {
        ko: '조직 소유자',
        en: 'Org Owner',
        desc: '여러 명일 수 있습니다. 조직 주 소유자와 동일한 수준의 권한을 갖지만 조직의 소유권을 이전할 수 없습니다. 조직 관리자가 할 수 있는 모든 일에 더해 다음을 할 수 있습니다.',
        perms: [
          { ko: '도메인 클레임 관리', en: 'Manage domain claiming', url: 'https://slack.com/intl/ko-kr/help/articles/115001379947-Enterprise-%EC%A1%B0%EC%A7%81%EC%9D%98-%ED%81%B4%EB%A0%88%EC%9E%84-%EB%8F%84%EB%A9%94%EC%9D%B8' },
          { ko: '조직 레벨의 앱 관리 정책', en: 'Set up org-wide app management policies', url: 'https://slack.com/intl/ko-kr/help/articles/360000281563-Enterprise-%EC%A1%B0%EC%A7%81%EC%97%90%EC%84%9C-%EC%95%B1-%EA%B4%80%EB%A6%AC' },
          { ko: 'SAML 싱글사인온(SSO) 설정', en: 'Configure single sign-on', url: 'https://slack.com/intl/ko-kr/help/articles/203772216-Slack%EC%9A%A9-SAML-Single-Sign-On-%EC%84%A4%EC%A0%95' },
          { ko: '이메일/표시이름 변경 권한', en: 'Allow users to change their email address or display name', url: 'https://slack.com/intl/ko-kr/help/articles/220403548-Single-Sign-On-%EC%84%A4%EC%A0%95-%EA%B4%80%EB%A6%AC#enterprise-grid-%ED%94%8C%EB%9E%9C-1' },
          { ko: '2단계 인증(2FA) 필수화', en: 'Enable mandatory two-factor authentication', url: 'https://slack.com/intl/ko-kr/help/articles/212221668-%ED%95%84%EC%88%98-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-2%EB%8B%A8%EA%B3%84-%EC%9D%B8%EC%A6%9D' },
        ],
      },
      {
        ko: '조직 관리자',
        en: 'Org Admin',
        desc: '여러 명일 수 있습니다. 조직 수준의 관리 작업을 돕습니다. 워크스페이스 소유자가 할 수 있는 모든 일에 더해 다음을 할 수 있습니다. (조직 소유자/관리자는 이 권한 중 일부를 워크스페이스 소유자/관리자나 구성원에게 전달할 수 있습니다.)',
        perms: [
          { ko: '워크스페이스 생성', en: 'Create a new workspace', url: 'https://slack.com/intl/ko-kr/help/articles/115001344007-Enterprise-%EC%A1%B0%EC%A7%81%EC%97%90%EC%84%9C-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EC%83%9D%EC%84%B1' },
          { ko: '멀티워크스페이스 채널 생성', en: 'Create a multi-workspace channel', url: 'https://slack.com/intl/ko-kr/help/articles/115001399587-Enterprise-%EC%A1%B0%EC%A7%81%EC%9D%98-%EB%A9%80%ED%8B%B0-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%97%90-%EC%B1%84%EB%84%90-%EC%B6%94%EA%B0%80' },
          { ko: 'IDP 그룹을 워크스페이스/채널에 연결', en: 'Connect IDP groups to workspaces or channels', url: 'https://slack.com/intl/ko-kr/help/articles/115001435788-Enterprise-%EC%A1%B0%EC%A7%81%EC%97%90-ID-%EC%A0%9C%EA%B3%B5%EC%97%85%EC%B2%B4-%EA%B7%B8%EB%A3%B9-%EC%97%B0%EA%B2%B0' },
          { ko: 'Slack 커넥트 채널 관리', en: 'Manage Slack Connect channels', note: 'Enterprise+', url: 'https://slack.com/intl/ko-kr/help/articles/115005912706-Slack-Connect-%EC%B1%84%EB%84%90-%EC%8A%B9%EC%9D%B8-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EC%B4%88%EB%8C%80-%EC%9A%94%EC%B2%AD-%EA%B4%80%EB%A6%AC' },
          { ko: '메시지 편집/삭제 권한 관리', en: 'Set edit/deletion policy', url: 'https://slack.com/intl/ko-kr/help/articles/115004868646-%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%8E%B8%EC%A7%91-%EB%B0%8F-%EC%82%AD%EC%A0%9C-%EA%B6%8C%ED%95%9C-%EA%B4%80%EB%A6%AC' },
          { ko: 'Slack 외부 파일 공유 정책', en: 'Set public file sharing policy', url: 'https://slack.com/intl/ko-kr/help/articles/201330736-Slack%EC%97%90-%ED%8C%8C%EC%9D%BC-%EC%B6%94%EA%B0%80#share-files' },
          { ko: '워크스페이스 간 채널 이동', en: 'Move channels between workspaces', url: 'https://slack.com/intl/ko-kr/help/articles/115001946688-Enterprise-%EC%A1%B0%EC%A7%81%EC%97%90%EC%84%9C-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EA%B0%84%EC%9D%98-%EC%B1%84%EB%84%90-%EC%9D%B4%EB%8F%99' },
          { ko: '멀티 워크스페이스 채널 관리', en: 'Manage multi-workspace channel creation', url: 'https://slack.com/intl/ko-kr/help/articles/115004485887-%EB%A9%80%ED%8B%B0-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EC%B1%84%EB%84%90-%EA%B4%80%EB%A6%AC' },
          { ko: '멤버 프로필 일부 편집', en: 'Edit select profile information for members', url: 'https://slack.com/intl/ko-kr/help/articles/115001342407-%EB%A9%A4%EB%B2%84%EC%9D%98-%ED%94%84%EB%A1%9C%ED%95%84-%EB%B3%B4%EA%B8%B0-%EB%B0%8F-%ED%8E%B8%EC%A7%91' },
          { ko: 'Slackbot 응답 정책 설정', en: 'Set Slackbot responses policy', url: 'https://slack.com/intl/ko-kr/help/articles/202026038-Slackbot-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95' },
        ],
      },
    ],
  },
  {
    tier: '워크스페이스 (Workspace)',
    color: '#0EA5E9',
    roles: [
      {
        ko: '워크스페이스 주 소유자',
        en: 'Workspace Primary Owner',
        desc: '모든 워크스페이스에는 가장 높은 권한을 가진 한 명의 기본 소유자가 있습니다. 청구·인증·액세스·보안 정책 등에 접근할 수 있습니다. 한 명만 존재하며 양도할 수 있습니다. (Ent+에서는 보통 워크스페이스 생성 시 조직 주 소유자가 워크스페이스 주 소유자가 되나 변경 가능합니다.) 워크스페이스 소유자가 할 수 있는 모든 일에 더해 다음을 할 수 있습니다.',
        perms: [
          { ko: '워크스페이스 삭제', en: 'Delete a workspace', url: 'https://slack.com/intl/ko-kr/help/articles/204067366-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EC%82%AD%EC%A0%9C' },
          { ko: '워크스페이스 소유권 이전', en: 'Transfer ownership of a workspace', url: 'https://slack.com/intl/ko-kr/help/articles/204401633-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%98%90%EB%8A%94-%EC%A1%B0%EC%A7%81%EC%9D%98-%EC%86%8C%EC%9C%A0%EA%B6%8C-%EC%9D%B4%EC%A0%84' },
          { ko: '워크스페이스 소유자 강등', en: 'Demote a Workspace Owner', url: 'https://slack.com/intl/ko-kr/help/articles/218124397-%EB%A9%A4%EB%B2%84%EC%9D%98-%EC%97%AD%ED%95%A0-%EB%B3%80%EA%B2%BD' },
        ],
      },
      {
        ko: '워크스페이스 소유자',
        en: 'Workspace Owner',
        desc: '워크스페이스의 소유권을 삭제·이전할 수 없다는 점을 제외하면 가장 높은 권한을 보유합니다. 여러 명일 수 있습니다. 워크스페이스 관리자가 할 수 있는 모든 일에 더해 다음을 할 수 있습니다.',
        perms: [
          { ko: '메시지/파일 보존 정책 지정', en: 'Set custom message and file retention policies', url: 'https://slack.com/intl/ko-kr/help/articles/203457187-Slack%EC%97%90%EC%84%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%EC%A1%B4-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A7%80%EC%A0%95' },
          { ko: '모든 멤버 비밀번호 재설정', en: "Reset all members' passwords", url: 'https://slack.com/intl/ko-kr/help/articles/204510068-%EB%AA%A8%EB%93%A0-Slack-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%9E%AC%EC%84%A4%EC%A0%95' },
          { ko: 'Slack 플랜 및 청구 관리', en: "Change your workspace's plan, add a payment method and view billing statements", url: 'https://slack.com/intl/ko-kr/help/articles/218915087-Slack-%ED%94%8C%EB%9E%9C-%EB%B0%8F-%EC%B2%AD%EA%B5%AC-%EC%84%B8%EB%B6%80-%EC%A0%95%EB%B3%B4-%EA%B4%80%EB%A6%AC' },
          { ko: '공개/비공개 채널·DM 내보내기 신청', en: 'Apply to export content from all conversations, including private channels and DMs', url: 'https://slack.com/intl/ko-kr/help/articles/204897248-Slack-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%B0%8F-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8F%84%EA%B5%AC-%EA%B0%80%EC%9D%B4%EB%93%9C' },
          { ko: '앱 요청 승인 켜기', en: 'Turn on Approved Apps', url: 'https://slack.com/intl/ko-kr/help/articles/222386767-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%97%90%EC%84%9C-%EC%95%B1-%EC%9A%94%EC%B2%AD-%EA%B4%80%EB%A6%AC' },
          { ko: '앱 설정 및 권한 관리', en: 'Manage app settings and permissions', url: 'https://slack.com/intl/ko-kr/help/articles/1500009181142-%EC%95%B1-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EA%B6%8C%ED%95%9C-%EA%B4%80%EB%A6%AC' },
          { ko: 'Slack Connect 채널 관리', en: 'Manage Slack Connect channels', note: 'Pro·Business+', url: 'https://slack.com/intl/ko-kr/help/articles/115005912706-Slack-Connect-%EC%B1%84%EB%84%90-%EC%8A%B9%EC%9D%B8-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EC%B4%88%EB%8C%80-%EC%9A%94%EC%B2%AD-%EA%B4%80%EB%A6%AC' },
          { ko: '워크스페이스 검색·액세스 설정', en: 'Set workspace discovery and access', note: 'Enterprise+', url: 'https://slack.com/intl/ko-kr/help/articles/115001915507-Enterprise-%EC%A1%B0%EC%A7%81%EC%97%90%EC%84%9C-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EC%95%A1%EC%84%B8%EC%8A%A4-%EA%B4%80%EB%A6%AC' },
          { ko: '워크스페이스 관리자 강등', en: 'Demote a Workspace Admin', url: 'https://slack.com/intl/ko-kr/help/articles/218124397-%EB%A9%A4%EB%B2%84%EC%9D%98-%EC%97%AD%ED%95%A0-%EB%B3%80%EA%B2%BD' },
          { ko: '표시이름 지침 추가', en: 'name display guidelines', url: 'https://slack.com/intl/ko-kr/help/articles/360036177353-%ED%91%9C%EC%8B%9C-%EC%9D%B4%EB%A6%84-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8-%EC%B6%94%EA%B0%80' },
          { ko: '워크스페이스 언어 설정', en: 'workspace language', url: 'https://slack.com/intl/ko-kr/help/articles/115004236403-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%98%90%EB%8A%94-%EC%A1%B0%EC%A7%81%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EC%96%B8%EC%96%B4-%EC%84%A4%EC%A0%95' },
          { ko: '워크스페이스 이름/URL 변경', en: 'workspace name/URL', url: 'https://slack.com/intl/ko-kr/help/articles/201663443-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%98%90%EB%8A%94-%EC%A1%B0%EC%A7%81-%EC%9D%B4%EB%A6%84-%EB%B0%8F-URL-%EB%B3%80%EA%B2%BD' },
        ],
      },
      {
        ko: '워크스페이스 관리자',
        en: 'Workspace Admin',
        desc: '담당 워크스페이스의 구성원·채널·관리 작업을 관리합니다. 여러 명일 수 있습니다. 멤버가 할 수 있는 모든 일에 더해 다음을 할 수 있습니다.',
        perms: [
          { ko: 'Slack Connect 채널 생성', en: 'Create a Slack Connect channel', url: 'https://slack.com/intl/ko-kr/help/articles/115004151203-Slack-Connect-%EA%B0%80%EC%9D%B4%EB%93%9C--%EC%99%B8%EB%B6%80-%EC%A1%B0%EC%A7%81%EA%B3%BC-%ED%98%91%EC%97%85%ED%95%98%EA%B8%B0' },
          { ko: '공개/비공개 채널 변환', en: 'Make a public channel private', url: 'https://slack.com/intl/ko-kr/help/articles/213185467-%EB%B9%84%EA%B3%B5%EA%B0%9C-%EB%98%90%EB%8A%94-%EA%B3%B5%EA%B0%9C%EB%A1%9C-%EC%B1%84%EB%84%90-%EC%A0%84%ED%99%98' },
          { ko: '채널 이름 변경', en: 'Rename any channel', url: 'https://slack.com/intl/ko-kr/help/articles/201654073-%EC%B1%84%EB%84%90-%EC%9D%B4%EB%A6%84-%EB%B3%80%EA%B2%BD' },
          { ko: '채널 삭제', en: 'Delete a channel', url: 'https://slack.com/intl/ko-kr/help/articles/213185307-%EC%B1%84%EB%84%90-%EB%B3%B4%EA%B4%80-%ED%98%B9%EC%9D%80-%EC%82%AD%EC%A0%9C' },
          { ko: '유저 그룹 생성', en: 'Create user groups', url: 'https://slack.com/intl/ko-kr/help/articles/212906697-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B7%B8%EB%A3%B9-%EC%83%9D%EC%84%B1-%EB%B0%8F-%ED%8E%B8%EC%A7%91' },
          { ko: '게스트 초대 및 공개채널 추가', en: 'Invite new guests and add them to public channels', url: 'https://slack.com/intl/ko-kr/help/articles/202518103-Slack%EC%9D%98-%EA%B2%8C%EC%8A%A4%ED%8A%B8-%EC%97%AD%ED%95%A0-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0' },
          { ko: '멤버 계정 비활성화', en: "Deactivate a member's account", url: 'https://slack.com/intl/ko-kr/help/articles/204475027-%EB%A9%A4%EB%B2%84%EC%9D%98-%EA%B3%84%EC%A0%95-%EB%B9%84%ED%99%9C%EC%84%B1%ED%99%94' },
          { ko: '워크스페이스 관리자 지정', en: 'Promote a Workspace Admin', url: 'https://slack.com/intl/ko-kr/help/articles/218124397-%EB%A9%A4%EB%B2%84%EC%9D%98-%EC%97%AD%ED%95%A0-%EB%B3%80%EA%B2%BD' },
          { ko: '기본 채널 설정', en: 'Set default channels', url: 'https://slack.com/intl/ko-kr/help/articles/201898998-%EC%83%88-%EB%A9%A4%EB%B2%84%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8-%EC%B1%84%EB%84%90-%EC%84%A4%EC%A0%95' },
          { ko: '분석·사용 현황 보기', en: 'View analytics and usage', url: 'https://slack.com/intl/ko-kr/help/articles/218407447-Slack-%EB%B6%84%EC%84%9D-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C-%EB%B3%B4%EA%B8%B0' },
          { ko: '다른 사람 메시지 삭제', en: "Delete other people's messages", url: 'https://slack.com/intl/ko-kr/help/articles/202395258-%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%8E%B8%EC%A7%91-%EB%98%90%EB%8A%94-%EC%82%AD%EC%A0%9C' },
          { ko: '이름/표시이름 변경', en: 'Change full & display names', url: 'https://slack.com/intl/ko-kr/help/articles/115004685366-Slack%EC%97%90%EC%84%9C-%EB%A9%A4%EB%B2%84-%EC%9D%B4%EB%A6%84-%EA%B4%80%EB%A6%AC' },
          { ko: '이메일 주소 변경', en: 'Change an email address', url: 'https://slack.com/intl/ko-kr/help/articles/225531168-%EA%B5%AC%EC%84%B1%EC%9B%90%EC%9D%98-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%A3%BC%EC%86%8C-%EB%B3%80%EA%B2%BD' },
          { ko: '기본 방해금지 시간 설정', en: 'Set default Do Not Disturb hours', url: 'https://slack.com/intl/ko-kr/help/articles/214888418-%EA%B8%B0%EB%B3%B8-%EB%B0%A9%ED%95%B4-%EA%B8%88%EC%A7%80-%EC%8B%9C%EA%B0%84-%EC%84%A4%EC%A0%95' },
          { ko: '2FA 필수화', en: 'Turn on mandatory 2FA', note: 'Enterprise+는 조직 관리자/소유자', url: 'https://slack.com/intl/ko-kr/help/articles/212221668-%ED%95%84%EC%88%98-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-2%EB%8B%A8%EA%B3%84-%EC%9D%B8%EC%A6%9D#free,-standard,-and-plus-plans-1' },
          { ko: '공개 채널 데이터 내보내기', en: 'Export data from public channels', note: 'Enterprise+는 조직 관리자/소유자', url: 'https://slack.com/intl/ko-kr/help/articles/204897248-Slack-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%B0%8F-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8F%84%EA%B5%AC-%EA%B0%80%EC%9D%B4%EB%93%9C' },
          { ko: '워크스페이스 간 채널 이동', en: 'Move channels between workspaces', note: 'Enterprise+', url: 'https://slack.com/intl/ko-kr/help/articles/115001946688-Enterprise-%EC%A1%B0%EC%A7%81%EC%97%90%EC%84%9C-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EA%B0%84%EC%9D%98-%EC%B1%84%EB%84%90-%EC%9D%B4%EB%8F%99' },
          { ko: '채널 관리 도구 사용', en: 'Use channel management tools', note: 'Business+', url: 'https://slack.com/intl/ko-kr/help/articles/360047512554-%EC%B1%84%EB%84%90-%EA%B4%80%EB%A6%AC-%EB%8F%84%EA%B5%AC-%EC%82%AC%EC%9A%A9' },
          { ko: '초대 멤버 전체 공지', en: 'Send messages to all invited members at once', url: 'https://slack.com/intl/ko-kr/help/articles/360024686174-Slack%EC%97%90-%EC%B4%88%EB%8C%80%EB%90%9C-%EB%A9%A4%EB%B2%84#notify-invited-members' },
          { ko: '메시지 편집/삭제 정책 설정', en: 'Set message edit/deletion policy', url: 'https://slack.com/intl/ko-kr/help/articles/115004868646-%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%8E%B8%EC%A7%91-%EB%B0%8F-%EC%82%AD%EC%A0%9C-%EA%B6%8C%ED%95%9C-%EA%B4%80%EB%A6%AC' },
          { ko: '채널 허들 비활성화', en: 'Disable huddles in channels', note: 'Enterprise+', url: 'https://slack.com/intl/ko-kr/help/articles/4402065728147-%ED%8A%B9%EC%A0%95-%EC%B1%84%EB%84%90%EC%97%90%EC%84%9C-%ED%97%88%EB%93%A4-%EB%B9%84%ED%99%9C%EC%84%B1%ED%99%94' },
        ],
      },
    ],
  },
  {
    tier: '채널 (Channel)',
    color: '#10B981',
    roles: [
      {
        ko: '채널 관리자',
        en: 'Channel Manager',
        desc: '새 채널을 만드는 사람에게 자동으로 할당됩니다. 담당 채널의 관리 작업을 수행할 수 있습니다. 멤버가 할 수 있는 모든 일에 더해 다음을 할 수 있습니다. (시스템 역할의 채널 관리자(Channel Admin)와는 다릅니다.)',
        perms: [
          { ko: '다른 채널 관리자 추가·관리', en: 'Add & manage other Channel Managers', url: 'https://slack.com/intl/ko-kr/help/articles/8328303095443-Slack%EC%9D%98-%EC%B1%84%EB%84%90-%EB%A7%A4%EB%8B%88%EC%A0%80-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0' },
          { ko: '공개/비공개 채널 전환', en: 'Convert channels to private or public', url: 'https://slack.com/intl/ko-kr/help/articles/213185467-%EB%B9%84%EA%B3%B5%EA%B0%9C-%EB%98%90%EB%8A%94-%EA%B3%B5%EA%B0%9C%EB%A1%9C-%EC%B1%84%EB%84%90-%EC%A0%84%ED%99%98' },
          { ko: '채널 이름 변경', en: 'Rename channels', url: 'https://slack.com/intl/ko-kr/help/articles/201654073-%EC%B1%84%EB%84%90-%EC%9D%B4%EB%A6%84-%EB%B3%80%EA%B2%BD' },
          { ko: '채널 보관', en: 'Archive channels', url: 'https://slack.com/intl/ko-kr/help/articles/213185307-%EC%B1%84%EB%84%90-%EB%B3%B4%EA%B4%80-%ED%98%B9%EC%9D%80-%EC%82%AD%EC%A0%9C' },
        ],
      },
    ],
  },
];

const systemRoles: Perm[] = [
  { ko: '분석 관리자', en: 'View the analytics dashboard', url: 'https://slack.com/intl/ko-kr/help/articles/218407447-Slack-%EB%B6%84%EC%84%9D-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C-%EB%B3%B4%EA%B8%B0' },
  { ko: '감사 로그 관리자', en: 'Access the audit logs', url: 'https://slack.com/intl/ko-kr/help/articles/360000394286-Slack%EC%9D%98-%EA%B0%90%EC%82%AC-%EB%A1%9C%EA%B7%B8' },
  { ko: '채널 관리자', en: 'Manage how channels are managed' },
  { ko: '콘텐츠 관리자', en: 'Review flagged content and moderate content', url: 'https://slack.com/intl/ko-kr/help/articles/25273135315347-Slack%EC%97%90%EC%84%9C-%ED%94%8C%EB%9E%98%EA%B7%B8%EA%B0%80-%EC%A7%80%EC%A0%95%EB%90%9C-%EC%BD%98%ED%85%90%EC%B8%A0-%EA%B2%80%ED%86%A0' },
  { ko: '사용자 맞춤 관리자', en: 'Manage custom emoji and Slackbot responses', url: 'https://slack.com/intl/ko-kr/help/articles/206870177-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%97%90-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A7%80%EC%A0%95-%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98-%EB%B0%8F-%EB%B3%84%EC%B9%AD-%EC%B6%94%EA%B0%80' },
  { ko: 'DLP 관리자', en: 'Configure and manage Slack Data Loss Prevention', url: 'https://slack.com/intl/ko-kr/help/articles/12914005852819-Slack-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%86%90%EC%8B%A4-%EB%B0%A9%EC%A7%80' },
  { ko: '내보내기 관리자', en: 'Access and manage exports', url: 'https://slack.com/intl/ko-kr/help/articles/201658943-%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0' },
  { ko: '통합 관리자', en: 'View, install, approve and manage apps', url: 'https://slack.com/intl/ko-kr/help/articles/360000281563-Enterprise-%EC%A1%B0%EC%A7%81%EC%97%90%EC%84%9C-%EC%95%B1-%EA%B4%80%EB%A6%AC' },
  { ko: '법적 자료 관리자', en: 'Create and manage legal holds', url: 'https://slack.com/intl/ko-kr/help/articles/4401830811795-%EB%B2%95%EC%A0%81-%EC%9E%90%EB%A3%8C-%EB%B3%B4%EC%A1%B4-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EA%B4%80%EB%A6%AC' },
  { ko: '메시지 활동 관리자', en: 'View message activity in channels', url: 'https://slack.com/intl/ko-kr/help/articles/360046708113-%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%99%9C%EB%8F%99-%EB%B3%B4%EA%B8%B0' },
  { ko: '역할 관리자', en: 'Manage who is assigned system roles', url: 'https://slack.com/intl/ko-kr/help/articles/1500004132581-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%97%AD%ED%95%A0%EC%97%90-%EB%A9%A4%EB%B2%84-%ED%95%A0%EB%8B%B9' },
  { ko: '영업 관리자', en: 'Manage the Slack sales home', url: 'https://slack.com/intl/ko-kr/help/articles/18928363822227-Slack%EC%9D%98-%ED%8C%90%EB%A7%A4-%ED%99%88-%EA%B4%80%EB%A6%AC' },
  { ko: 'Salesforce 관리자', en: 'Manage the Salesforce integration', url: 'https://slack.com/intl/ko-kr/help/articles/30754346665747-Salesforce%EC%99%80-Slack-%EC%97%B0%EA%B2%B0' },
  { ko: '보안 관리자', en: 'Manage sessions and deactivate accounts', url: 'https://slack.com/intl/ko-kr/help/articles/360041717053-Slack%EC%97%90%EC%84%9C-%EB%A9%A4%EB%B2%84-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83%EC%8B%9C%ED%82%A4%EA%B8%B0' },
  { ko: '템플릿 관리자', en: 'Create and publish custom canvases and channel templates', url: 'https://slack.com/intl/ko-kr/help/articles/25886728849299-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A7%80%EC%A0%95-%EC%BA%94%EB%B2%84%EC%8A%A4-%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%84%A4%EC%A0%95-%EA%B4%80%EB%A6%AC' },
  { ko: '사용자 관리자', en: 'Add, remove or deactivate non-admin users' },
  { ko: '워크플로 관리자', en: 'Manage workflows and view workflow analytics', url: 'https://slack.com/intl/ko-kr/help/articles/360035692513-Slack-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C-%EB%B9%8C%EB%8D%94-%EA%B0%80%EC%9D%B4%EB%93%9C' },
];

export default function RolesReferencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }}
        />
        <div className="relative max-w-5xl">
          <HeroBadge>참고 자료</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Roles &amp; Permissions</h1>
          <p className="text-white/70 leading-relaxed">
            Slack Enterprise+의 조직·워크스페이스·채널 역할과 각 역할의 권한입니다.<br />
            각 권한을 클릭하면 Slack 헬프센터에서 자세한 내용을 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        <p className="text-gray-600 leading-relaxed mb-6">
          설정을 진행하며 역할별 권한이 궁금할 때 참고하세요. 조직 소유자부터 채널 관리자까지 역할 계층과 권한을 확인할 수 있습니다.
        </p>

        {/* 역할 계층 구조도 */}
        <div className="mb-12 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
          <div className="flex items-start gap-2.5 mb-5">
            <svg className="w-5 h-5 text-[#635BFF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <div>
              <h2 className="text-base font-bold text-gray-900">역할 계층 한눈에 보기</h2>
              <p className="text-sm text-gray-500 mt-0.5">위에 있는 역할일수록 권한이 많으며, <strong className="text-gray-700">아래 역할의 권한을 모두 포함</strong>합니다.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#635BFF] via-[#0EA5E9] to-gray-300" aria-hidden="true" />
            <div className="relative space-y-4">
              <TierRow color="#635BFF" tier="조직 (Organization)" roles={['조직 주 소유자', '조직 소유자', '조직 관리자']} />
              <TierRow color="#0EA5E9" tier="워크스페이스 (Workspace)" roles={['워크스페이스 주 소유자', '워크스페이스 소유자', '워크스페이스 관리자']} />
              <TierRow color="#10B981" tier="채널 (Channel)" roles={['채널 관리자']} />
              <TierRow color="#94A3B8" tier="멤버 (Member)" roles={['일반 멤버']} />
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2.5">
            <span className="text-[#ECB22E] flex-shrink-0">★</span>
            <span><strong className="text-gray-700">시스템 역할</strong>(분석·감사 로그·콘텐츠·DLP·내보내기 관리자 등)은 위 계층과 별개로, 소유자/관리자가 멤버에게 개별 부여할 수 있습니다.</span>
          </div>
        </div>

        {/* Role groups */}
        <div className="space-y-12">
          {groups.map((group) => (
            <section key={group.tier}>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: group.color }} />
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">{group.tier}</h2>
              </div>
              <div className="space-y-5">
                {group.roles.map((role) => (
                  <div key={role.en} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="px-6 pt-5 pb-4 border-b border-gray-100">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="font-bold text-gray-900">{role.ko}</h3>
                        <span className="text-sm font-medium" style={{ color: group.color }}>{role.en}</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed mt-2">{role.desc}</p>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-px bg-gray-100">
                      {role.perms.map((perm) => (
                        <li key={perm.en} className="bg-white">
                          <a
                            href={perm.url ?? helpLink(perm.en)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 px-5 py-3 hover:bg-gray-50 transition-colors h-full"
                          >
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: group.color }} />
                            <span className="flex-1 text-sm text-gray-700 leading-snug">
                              <span className="inline-flex items-center gap-1.5 flex-wrap">
                                {perm.ko}
                                {perm.note && (
                                  <span className="text-[11px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{perm.note}</span>
                                )}
                              </span>
                              <span className="block text-xs text-gray-400 mt-0.5">{perm.en}</span>
                            </span>
                            <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* System roles */}
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ECB22E]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">시스템 역할 (System Roles)</h2>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              시스템 역할은 소유자나 관리자의 역할 일부를 멤버에게 부여할 수 있습니다. 조직 주 소유자나 소유자라도 해당 메뉴에 접근하려면 역할을 부여받아야 하는 항목도 있습니다. (예: DLP 관리자)
            </p>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <ul className="divide-y divide-gray-50 sm:grid sm:grid-cols-2 sm:divide-y-0 sm:gap-px sm:bg-gray-50">
                {systemRoles.map((role) => (
                  <li key={role.en} className="bg-white">
                    {role.url ? (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors h-full"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ECB22E] flex-shrink-0" />
                        <span className="flex-1 text-sm text-gray-700">
                          {role.ko}
                          <span className="block text-xs text-gray-400 mt-0.5">{role.en}</span>
                        </span>
                        <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 px-6 py-3 h-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ECB22E] flex-shrink-0" />
                        <span className="flex-1 text-sm text-gray-700">
                          {role.ko}
                          <span className="block text-xs text-gray-400 mt-0.5">{role.en}</span>
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function TierRow({ color, tier, roles }: { color: string; tier: string; roles: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="inline-flex items-center gap-2 sm:w-48 flex-shrink-0">
        <span className="w-3 h-3 rounded-full flex-shrink-0 ring-4 ring-white" style={{ background: color }} />
        <span className="text-xs font-bold whitespace-nowrap" style={{ color }}>{tier}</span>
      </span>
      <span className="text-sm text-gray-700">{roles.join(' › ')}</span>
    </div>
  );
}
