import Link from 'next/link';
import HeroBadge from '@/components/HeroBadge';

type Row = { k: string; v: React.ReactNode };
type Item = { title: string; en?: string; desc?: React.ReactNode; rows?: Row[]; bullets?: React.ReactNode[]; tip?: React.ReactNode; warn?: React.ReactNode };
type Group = { label: string; color: string; items: Item[] };

const guide: Group[] = [
  {
    label: '사용 · 구성',
    color: '#635BFF',
    items: [
      { title: '홈', en: 'Home', desc: '워크스페이스 현황·멤버 수·신규 기능 릴리스를 한눈에 보는 대시보드입니다. 운영보다는 현황 파악용으로 활용하세요.' },
      {
        title: '워크스페이스', en: 'Workspaces',
        desc: <>생성·변경은 여기서 진행합니다. 단, <strong className="text-gray-900">삭제는 워크스페이스 주 소유자만</strong> 해당 워크스페이스 설정 화면에서 가능합니다.</>,
        rows: [
          { k: '요청 시', v: '사용자가 신청 → 관리자 승인 필요' },
          { k: '초대받은 사용자만', v: '내부 관리자가 초대해야 입장 가능' },
          { k: '공개', v: '누구나 자유롭게 입장·퇴장 가능' },
          { k: '숨겨짐', v: '소속되지 않은 경우 워크스페이스 자체가 비노출' },
        ],
        tip: <>기밀 워크스페이스라면 접근 유형을 <strong>숨겨짐</strong>으로 설정하세요.</>,
      },
      {
        title: '멤버', en: 'Members',
        desc: '모든 조직 멤버를 한 화면에서 관리합니다. 계정 유형 변경(소유자·관리자 지정)도 여기서 가능합니다.',
        rows: [
          { k: '추가', v: '이미 조직에 있지만 다른 워크스페이스에 있는 멤버' },
          { k: '초대', v: '조직에 없는 외부 인원' },
        ],
        warn: <><strong>권한 레벨 규칙</strong>: 동일 레벨끼리는 서로 권한을 뺄 수 없습니다. 조직 소유자의 권한 변경은 반드시 <strong>조직 주 소유자</strong>가 수행해야 합니다.</>,
      },
      { title: '외부 사람들', en: 'External Users', desc: 'Slack Connect로 연결된 외부 사용자 목록입니다. 여기서 채널에서 제거하거나 연계 자체를 해제할 수 있습니다.' },
      {
        title: '그룹', en: 'Groups',
        desc: '그룹은 두 가지 소스로 생성됩니다.',
        rows: [
          { k: 'IDP 그룹', v: 'SSO 프로비저닝으로 자동 생성 · Slack에서 직접 멤버 수정 불가(IDP에서만 관리)' },
          { k: 'Slack 그룹', v: "우측 상단 '그룹 만들기'로 수동 생성 · 화면에서 바로 수정 가능" },
        ],
        tip: <>그룹에 <strong>워크스페이스·채널을 사전 매핑</strong>해두면 신규 멤버를 그룹에 넣는 것만으로 자동 배치됩니다. 멤버십을 <strong>필수</strong>로 설정하면 임의 탈퇴도 방지됩니다.</>,
      },
      {
        title: '아틀라스', en: 'Atlas',
        desc: '사용자 프로필 구성 및 조직도 구현 화면입니다.',
        bullets: [
          <>프로필의 <strong>관리자</strong> 항목에 관리자 ID를 입력하면 자동으로 조직도가 생성됩니다.</>,
          <>IDP에서 매니저 ID를 관리한다면 → <strong>필드 매핑으로 자동화</strong> 가능</>,
          <>그렇지 않다면 → <strong>SCIM API로 수동 입력</strong> 필요</>,
        ],
        tip: <>커스텀 필드 추가 시 기존 필드는 수정할 수 없습니다. 화면 하단 <strong>새로운 모듈 추가</strong> → <strong>사용자 편집</strong> 방식으로 추가하세요.</>,
      },
      {
        title: '통합', en: 'Integrations',
        desc: '앱 관리 허브입니다. 여러 워크스페이스 운영 시 조직 레벨에서 앱을 일괄 허용할 수 있습니다.',
        bullets: [
          <><strong>설치된 앱</strong>: 설치 현황·워크스페이스별 설치 상태 확인(같은 앱이라도 워크스페이스마다 별도 설치 필요)</>,
          <><strong>승인된 앱</strong>: 사전 승인 시 사용자가 별도 요청 없이 바로 설치 가능</>,
        ],
      },
      {
        title: '스킬', en: 'Skills', desc: <>도구 메뉴 안에 있으며, <strong className="text-gray-900">Slackbot용 업무 매뉴얼</strong>로 생각하면 됩니다. 어떤 일을 어떤 순서로 하고 결과를 어떤 형태로 줄지 미리 정해두면 언제든 같은 방식으로 처리됩니다. 보고서 작성·미팅 준비처럼 반복 작업에 유용하며, 여기서 멤버가 만든 스킬 목록·사용 현황을 관리합니다.</>,
      },
      {
        title: '채널', en: 'Channels',
        desc: <>채널 메뉴는 기본적으로 <strong className="text-gray-900">조직 주 소유자에게만</strong> 표시됩니다. 역할 및 권한 &gt; 계정 유형에서 조직 소유자에게도 권한을 부여하면 메뉴가 보입니다.</>,
        rows: [
          { k: '공개 → 비공개', v: '모든 멤버 가능' },
          { k: '비공개 → 공개', v: '워크스페이스 관리자 이상만 가능' },
        ],
        bullets: [
          <><strong>채널 이동</strong>: 기존 워크스페이스를 유지한 채 새 워크스페이스를 추가한 뒤 기존 것을 제거하는 2단계 방식이 안전</>,
          <><strong>AI 검색 제한</strong>: 특정 채널을 AI 검색 대상에서 제외하려면 해당 채널에서 'AI 사용 제한' 선택</>,
        ],
      },
      {
        title: 'Slack Connect', desc: '외부 조직과의 연결을 관리합니다.',
        tip: <><strong>Connect 설정은 항상 양쪽 조직 설정을 모두 따릅니다.</strong> 한쪽만 허용해도 상대방이 승인해야 연결이 완료됩니다.</>,
        bullets: [
          <>글로벌 기본값 설정 후 특정 조직별 개별 세부 설정 조정 가능</>,
          <>파일 업로드·승인 등을 조직별로 다르게 적용 가능</>,
          <><strong>DM → 채널 전환</strong>: 최대 9명 제한, 초과 시 채널로 전환(양쪽 조직 모두 허용 필요)</>,
        ],
      },
      {
        title: '분석', en: 'Analytics',
        desc: '메시지 작성·허들 사용·AI 활용 등 사용 현황 데이터를 확인합니다. 도입 후 활용도를 파악하는 데 유용합니다.',
        tip: <><strong>전체 멤버 리스트 추출</strong>: 분석 &gt; 멤버 탭 &gt; CSV 내보내기</>,
      },
    ],
  },
  {
    label: '역할 · 권한',
    color: '#ECB22E',
    items: [
      {
        title: '역할 및 권한', en: 'Roles & Permissions',
        desc: '각 액션별로 누가 수행할 수 있는지 정의합니다. 불필요한 권한은 제거하고 필요한 권한만 부여하세요.',
        bullets: [
          <><strong>역할(Roles)</strong>: 특정 권한만 선택적으로 부여(예: 감사팀에 감사 로그 관리자 역할만 부여)</>,
          <><strong>사용자 지정 역할</strong>: 여러 권한을 조합한 커스텀 역할을 특정 사용자에게 할당(조직 주 소유자 전용)</>,
        ],
      },
      {
        title: '기능 액세스', en: 'Feature Access',
        desc: '현재는 AI 기능에 대해서만 제어가 가능합니다.',
        bullets: [
          <>개인별 또는 그룹(IDP·Slack 그룹)별로 AI 기능 허용/차단 설정</>,
          <>설정 옵션: 전체 차단 / 특정 사용자·그룹만 허용 / 특정 사용자·그룹만 제외</>,
        ],
        warn: <>게스트 사용자에게는 AI 기능 일부만 제공됩니다.</>,
      },
    ],
  },
  {
    label: '보안 · 컴플라이언스',
    color: '#E11D48',
    items: [
      {
        title: '보안', en: 'Security',
        desc: 'Slack 권장 보안 설정 중 미적용 항목을 안내(관리자 고문)하며, SSO는 최대 11개까지 연동 가능합니다.',
        rows: [
          { k: '2단계 인증', v: 'IDP 연동 시 IDP 기준, 아니면 Slack 자체 2FA 사용' },
          { k: '세션 유지 기간', v: '기본 무제한 → 기간 설정 시 자동 로그아웃 (데스크톱은 별도 알림 없음 주의)' },
          { k: 'IP 허용 목록', v: '승인된 IP(사무실·VPN 등)에서만 접속 허용, 그 외 IP는 접속 제한' },
          { k: '파일 다운로드', v: '모바일: 전체 on/off / 데스크톱: IP 기반 제어' },
          { k: '메시지 복사 제한', v: '스크린 캡처 방지는 미지원이나, 모바일 메시지 복사 제한은 부분 제공' },
          { k: '모바일 비밀번호', v: '앱 전환 시 PIN 코드 입력 요구(권장)' },
          { k: '탈옥·루팅 기기 차단', v: '보안 정책 필요 시 활성화' },
          { k: '최소 앱 버전', v: '구버전 사용자에게 업데이트 알림 강제 발송' },
        ],
        tip: <>세션 기간 설정 후에도 기존 멤버가 동시에 로그아웃되지 않고, 설정 기간에 걸쳐 순차적으로 처리됩니다(시스템 부하 방지).</>,
      },
      {
        title: '감사 로그 & 보안 감지',
        bullets: [
          <><strong>감사 로그</strong>: 조직 내 모든 주요 활동 기록 열람</>,
          <><strong>보안 감지</strong>: 비정상 이벤트(급격한 다운로드·이상 네트워크 접속 등) 자동 감지·리스트업</>,
        ],
        tip: <>이상 징후 발생 시 자동 액션(예: 세션 종료)은 보안 설정 &gt; 이상 징후 이벤트 응답 설정에서 가능합니다.</>,
      },
      {
        title: '데이터 손실 방지', en: 'DLP',
        desc: '정규 표현식으로 민감 정보 패턴을 등록하고, 해당 메시지 발생 시 처리 방식을 설정합니다.',
        rows: [
          { k: '알림만 전송', v: '하루 1회 일괄 관리자 알림' },
          { k: '경고 표시', v: '전송 전 사용자에게 확인 팝업' },
          { k: '자동 차단', v: '즉시 숨김 처리 → DLP 관리 화면에 기록' },
        ],
      },
      { title: '플래그가 지정된 콘텐츠', desc: '조직 설정에서 활성화하면 사용자가 특정 메시지를 신고할 수 있고, 신고된 내용이 이 화면에 모입니다. 관리자가 확인 후 삭제·경고 조치를 취합니다.' },
      {
        title: '데이터 내보내기', desc: '조직 내 모든 워크스페이스 또는 특정 워크스페이스의 데이터를 추출합니다. 감사 용도 또는 사용자 데이터를 AI 학습 용도로 활용하기도 합니다.',
        bullets: [
          <><strong>모든 채널 및 대화 선택</strong> 시 공개·비공개 채널·DM·파일까지 모두 내보내집니다.</>,
          <>데이터는 <strong>JSON 포맷</strong>으로 제공됩니다.</>,
          <><strong>채널 감사 보고서</strong>로 특정 워크스페이스·채널에 누가 들어가 있는지(멤버 구성) 확인할 수 있습니다.</>,
        ],
        tip: <>파일은 직접 다운로드가 아니라 Amazon S3에 저장된 뒤 <strong>다운로드 링크</strong>로 제공됩니다.</>,
      },
      {
        title: '법적 자료 보존', desc: '특정인을 지정하면 이후 해당 인원의 메시지가 삭제되어도 데이터가 보존됩니다. 지정된 인원은 데이터 내보내기 대상이 되어 행위 추적이 가능합니다.',
        warn: <><strong>소급 적용 불가</strong> — 지정 시점 이후부터만 적용됩니다.</>,
      },
      { title: '키 관리', en: 'Key Management', desc: '별도 애드온 기능(Amazon KMS만 지원). 자체 암호화 키 사용이 필요한 경우에만 해당됩니다.' },
      { title: '정보 장벽', en: 'Information Barriers', desc: '특정 그룹 간 커뮤니케이션을 차단하는 컴플라이언스 기능입니다. 사용자 간 DM 차단이 가능합니다.' },
      {
        title: '이메일 도메인',
        rows: [
          { k: '외부 워크스페이스 가입 차단', v: '회사 도메인 등록 시 해당 이메일로 외부 워크스페이스 가입 방지' },
          { k: 'Slack Connect 초대 경로 강제 지정', v: '회사 이메일 사용자는 반드시 지정된 워크스페이스를 통해서만 Connect 연결' },
        ],
      },
    ],
  },
  {
    label: '기타 · 설정',
    color: '#0EA5E9',
    items: [
      { title: '개발자 프로그램', desc: '내부 Slack 앱 개발 시 샌드박스 환경을 제공합니다. 가입하면 여기서 목록을 확인할 수 있습니다.' },
      {
        title: '설정', en: 'Settings',
        bullets: [
          <><strong>조직 정보</strong>: 아이콘·기본 언어 변경</>,
          <><strong>조직 설정</strong>: 다양한 세부 기능 설정</>,
          <><strong>조직 정책</strong>: Slack 관리 정책 설정</>,
        ],
      },
      { title: '엔터프라이즈 검색', en: 'Enterprise Search', desc: <>GitHub·Confluence 등 외부 서비스를 Slack 검색과 연결합니다. 도메인 설정·사용자 인증 완료 후 검색 결과에 외부 콘텐츠가 함께 표시됩니다. Jira·Confluence는 이제 <strong className="text-gray-900">멀티 도메인 연동</strong>을 지원합니다.</>, tip: <>회사 계정만 연동되도록 하려면 <strong>허용된 도메인에 회사 도메인을 등록</strong>하세요.</> },
      { title: '채널 관리', en: 'Channel Management', desc: '기본 조직 전체 채널 설정으로, 신규 멤버 합류 시 자동으로 특정 채널에 추가됩니다. 멤버십을 필수로 설정하면 임의 탈퇴를 막을 수 있습니다.' },
      { title: '내역', en: 'Retention', desc: '조직 레벨의 데이터 보존 설정을 확인합니다. 변경이 필요한 경우 피드백팀에 설정 요청하세요.' },
      { title: '청구', en: 'Billing', desc: '계약 연장·비용 확인 화면입니다. 우측 상단 버튼으로 보고서 생성 가능(조직 주 소유자 전용). 계약 갱신 시 참고 자료로 활용하세요.' },
    ],
  },
];

export default function AdminSessionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-5xl">
          <HeroBadge>런치 5단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">관리자 세션</h1>
          <p className="text-white/70 leading-relaxed">
            Slack Enterprise+ 관리자를 위한 핵심 기능과 관리 도구를 영상으로 안내합니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10">
            <svg className="w-4 h-4 text-[#635BFF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </span>
          <h2 className="text-lg font-bold text-gray-900">관리자 세션 영상</h2>
        </div>

        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white aspect-video max-w-[64%] flex flex-col items-center justify-center text-center p-8">
          <div className="w-14 h-14 rounded-full bg-[#635BFF]/10 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-[#635BFF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
          <p className="font-semibold text-gray-700 mb-1">관리자 세션 영상 준비 중</p>
          <p className="text-sm text-gray-400">영상이 업로드되면 이 자리에서 바로 재생됩니다.</p>
        </div>

        <div className="mt-4 flex items-start gap-2.5 bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 max-w-[64%]">
          <span className="text-sky-500 flex-shrink-0 mt-0.5">📌</span>
          <p className="text-[13px] text-sky-800 leading-relaxed">아래 내용은 <strong>영상에서 설명하는 내용을 정리한 자료</strong>입니다. 영상과 함께 참고하세요.</p>
        </div>

        {/* 조직 관리 화면 메뉴 가이드 */}
        <div className="mt-14">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10">
              <svg className="w-4 h-4 text-[#635BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </span>
            <h2 className="text-lg font-bold text-gray-900">조직 관리 화면 메뉴 가이드</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">관리자 세션에서 다루는 조직 관리 화면의 메뉴별 핵심 포인트를 정리했습니다.</p>

          <div className="space-y-10">
            {guide.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: group.color }} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">{group.label}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <MenuCard key={item.title} item={item} color={group.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 런치 프로세스 완료 */}
        <div className="mt-14 rounded-2xl border border-gray-200 bg-white px-6 py-8 text-center">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emerald-50 mb-3">
            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">런치 프로세스를 모두 완료했습니다</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Kick-Off부터 관리자 세션까지 모든 단계를 마쳤어요.
          </p>
          <div className="mt-5">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#635BFF] hover:underline">
              런치 가이드 처음으로
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuCard({ item, color }: { item: Item; color: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 flex flex-col">
      <div className="flex items-baseline gap-2 flex-wrap mb-2">
        <h4 className="font-bold text-gray-900 text-[15px]">{item.title}</h4>
        {item.en && <span className="text-xs font-medium" style={{ color }}>{item.en}</span>}
      </div>
      {item.desc && <p className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</p>}

      {item.rows && (
        <div className="mt-3 rounded-lg border border-gray-100 overflow-hidden">
          <ul className="divide-y divide-gray-50">
            {item.rows.map((r, i) => (
              <li key={i} className="flex gap-3 px-3 py-2">
                <span className="text-[12px] font-semibold text-gray-800 w-24 flex-shrink-0">{r.k}</span>
                <span className="text-[12px] text-gray-600 leading-relaxed">{r.v}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.bullets && (
        <ul className="mt-3 space-y-1.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: color }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {item.tip && (
        <div className="mt-3 flex items-start gap-2 bg-sky-50 border border-sky-100 rounded-lg px-3 py-2">
          <span className="text-sky-500 flex-shrink-0 text-xs mt-0.5">💡</span>
          <p className="text-[12px] text-sky-800 leading-relaxed">{item.tip}</p>
        </div>
      )}

      {item.warn && (
        <div className="mt-3 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
          <span className="text-amber-500 flex-shrink-0 text-xs mt-0.5">⚠️</span>
          <p className="text-[12px] text-amber-800 leading-relaxed">{item.warn}</p>
        </div>
      )}
    </div>
  );
}
