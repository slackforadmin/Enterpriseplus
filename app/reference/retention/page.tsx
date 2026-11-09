import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';
import HeroBadge from '@/components/HeroBadge';

type Opt = { label: string; desc: string; recommended?: boolean };

// 공개/비공개 채널, DM 공통 4가지 보존 옵션
const messageOptions: Opt[] = [
  {
    label: '개정 내역을 포함한 모든 메시지 보관',
    desc: 'Slack은 메시지 편집·삭제 로그와 변경한 사용자 ID를 포함하여 모든 메시지를 보관하고 내보내기에 포함합니다.',
    recommended: true,
  },
  {
    label: '모든 메시지를 보관하지만 수정 사항(수정·삭제)은 추적하지 않음',
    desc: 'Slack은 모든 메시지를 보관하지만 편집·삭제 이전의 원본 텍스트 로그는 보관하지 않습니다.',
  },
  {
    label: '특정 기간 이후 메시지 및 수정 사항 삭제',
    desc: 'Slack은 선택한 기간보다 오래된 메시지를 매일 확인하고 영구적으로 삭제합니다.',
  },
  {
    label: '일정 기간이 지난 후 삭제 (내보내기로 전체 내역 계속 액세스 가능)',
    desc: '데이터 내보내기 또는 Discovery API를 통해, 보존이 실행되고 UI에서 메시지를 삭제한 후에도 편집·삭제 로그에 계속 액세스할 수 있습니다.',
  },
];

const fileOptions: Opt[] = [
  { label: '파일 보관', desc: 'Slack은 공유된 파일을 모두 보관합니다. 단, 삭제된 파일은 포함되지 않습니다.' },
  { label: '특정 기간(일) 동안만 파일 보관', desc: '선택한 기간보다 오래된 파일(코드조각·포스트·업로드 파일·타사 앱(Google Drive·Box·Dropbox) 공유 파일)을 영구 삭제합니다. 타사 앱 파일은 해당 앱에 남아 있어 Slack에서 삭제해도 원본에는 영향이 없습니다.' },
  { label: '삭제된 파일을 포함하여 모든 파일 보관', desc: '워크스페이스 수명 기간 동안 모든 파일을 보관합니다. 삭제된 파일은 모든 대화 내보내기·Discovery API로 이용 가능합니다.', recommended: true },
  { label: '삭제된 파일을 포함하여 일정 기간(일) 동안 모든 파일 보관', desc: '선택 기간보다 오래된 파일(코드조각·포스트·업로드 파일·타사 앱 공유 파일)을 영구 삭제합니다. 수동으로 삭제된 파일은 모든 대화 내보내기·Discovery API로 확인할 수 있습니다.' },
  { label: '메시지 보존 기간과 일치', desc: '해당 파일을 공유한 메시지가 삭제될 때까지 모든 파일을 보관합니다. 공유되지 않은 파일은 30일의 유예 기간 후 영구 삭제됩니다.' },
  { label: '메시지 보존 기간과 일치, 삭제된 파일 유지', desc: '해당 파일을 공유한 메시지가 삭제될 때까지 모든 파일을 보관합니다. 공유되지 않은 파일은 30일의 유예 기간 후 조직에서 숨겨집니다.' },
];

const canvasOptions: Opt[] = [
  { label: '캔버스 및 리스트 보관', desc: 'Slack은 모든 캔버스·리스트를 보관하지만 삭제된 캔버스·리스트는 보관하지 않습니다.' },
  { label: '정해진 일수 동안만 보관', desc: '정한 일수가 경과된 캔버스·리스트는 모두 영구 삭제합니다.' },
  { label: '삭제된 캔버스를 포함하여 캔버스 및 리스트 보관', desc: '워크스페이스 수명 기간 동안 모든 캔버스·리스트를 보관합니다. 삭제된 캔버스·리스트는 모든 대화 내보내기·Discovery API로 이용 가능합니다.', recommended: true },
  { label: '삭제된 캔버스를 포함하여 캔버스 및 리스트를 보관하지만 정해진 일수 동안만 보관', desc: '선택한 일수가 경과된 캔버스·리스트를 영구 삭제합니다. 수동으로 삭제한 캔버스·리스트는 모든 대화 내보내기·Discovery API로 이용 가능합니다.' },
];

const wsDataOptions: Opt[] = [
  { label: '메시지를 절대 삭제하지 않음 – 편집 내용 저장', desc: 'Slack에서 모든 메시지를 보관하고 편집·삭제를 추적합니다.' },
  { label: '메시지를 절대 삭제하지 않음 – 편집 내용 저장하지 않음 (기본값)', desc: 'Slack에서 모든 메시지를 보관하지만 편집·삭제는 추적하지 않습니다.' },
  { label: '사용자 지정 타임라인 선택', desc: 'Slack에서 사용자 지정 기간에 따라 메시지를 삭제합니다.' },
];

const wsOverrideOptions: Opt[] = [
  { label: '재정의 허용 안 함 (기본값)', desc: '워크스페이스에서 재정의를 허용하지 않습니다.' },
  { label: '멤버 재정의 허용', desc: '멤버는 비공개 채널 재정의를 설정할 수 있으며, 워크스페이스 소유자는 공개 채널 재정의를 설정할 수 있습니다.' },
];

// 신청 시 정할 값 요약 (조직 레벨 기준 권장값)
const summary: { item: string; rec: string; choose?: boolean }[] = [
  { item: '공개 채널', rec: '개정 내역을 포함한 모든 메시지 보관' },
  { item: '공개 채널 · 워크스페이스 고정(Lock)', rec: '예 / 아니오 중 선택', choose: true },
  { item: '비공개 채널', rec: '개정 내역을 포함한 모든 메시지 보관' },
  { item: '비공개 채널 · 워크스페이스 고정(Lock)', rec: '예 / 아니오 중 선택', choose: true },
  { item: '다이렉트 메시지 (DM)', rec: '개정 내역을 포함한 모든 메시지 보관' },
  { item: '보존 재정의', rec: '관리자 재정의 - 항상 재정의 허용' },
  { item: '파일 보존', rec: '삭제된 파일을 포함하여 모든 파일 보관' },
  { item: '캔버스 및 리스트 보존', rec: '삭제된 캔버스를 포함하여 모두 보관' },
];

export default function RetentionReferencePage() {
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
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">데이터 보존 정책 &amp; 기간 설정</h1>
          <p className="text-white/70 leading-relaxed">
            각 항목의 보존 방식을 이해하고 값을 정한 뒤 피드백팀에 신청하기 위한 참고 자료입니다.<br />
            아래 요약표에서 권장 값을 먼저 확인하고, 상세 카드에서 각 옵션을 비교하세요.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* 신청 시 정할 값 요약 */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10">
              <svg className="w-4 h-4 text-[#635BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </span>
            <h2 className="text-lg font-bold text-gray-900">신청 시 정할 값 (요약)</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            조직 레벨 기준으로 <strong className="text-gray-700">총 8개 항목</strong>을 선택합니다. 대부분은 권장 값이 있으며, 공개·비공개 채널의 <strong className="text-gray-700">워크스페이스 고정(Lock)</strong>은 예/아니오 중 하나를 선택합니다. 아래 상세 카드에서 각 항목의 다른 옵션도 확인한 뒤 신청해주세요.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
            <div className="grid grid-cols-[1fr_1.4fr] px-5 py-3 bg-gray-50 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <span>항목</span>
              <span>권장 값 / 선택</span>
            </div>
            <ul className="divide-y divide-gray-50">
              {summary.map((s) => (
                <li key={s.item} className="grid grid-cols-[1fr_1.4fr] items-center px-5 py-3 gap-3">
                  <span className="text-sm font-semibold text-gray-900">{s.item}</span>
                  <span className="inline-flex items-start gap-1.5 text-sm text-gray-700">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 ${s.choose ? 'text-gray-600 bg-gray-100' : 'text-white bg-[#635BFF]'}`}>{s.choose ? '택1' : '권장'}</span>
                    {s.rec}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Slack 공식 문서:{' '}
            <a href="https://app.slack.com/slackhelp/ko-KR/203457187" target="_blank" rel="noopener noreferrer" className="text-[#635BFF] hover:underline">
              데이터 보존 및 삭제 정책
            </a>
          </p>
        </div>

        {/* 시작 전 알아두기 */}
        <SectionHeader color="#0A2540" text="시작 전 알아두기" />
        <div className="space-y-4">
          <InfoCallout>
            <strong>조직 레벨로 설정하면</strong> 하위 워크스페이스의 공개/비공개 채널 설정은 전부 무효화됩니다.<br />
            조직 레벨 설정은 <strong>조직 주 소유자</strong>가 <strong>지원 포털</strong>에 요청해야 하며, Slack Connect 채널은 내 조직에만 적용되고 UI에서 직접 수정할 수 없습니다.<br />
            지원 포털 요청 방법은 좌측 사이드바의 <strong>Support Case 신청</strong>을 참고하세요.
          </InfoCallout>
          <Figure src="/retention/org-diagram.png" alt="Locking retention down Org-wide 다이어그램" width={1455} height={876} />
          <p className="text-xs text-gray-400 text-center">
            조직 레벨에서 보존을 잠그면(Lock) 하위 워크스페이스는 개별 설정을 할 수 없습니다. External Org는 각자의 정책을 따릅니다.
          </p>
        </div>

        {/* 조직 URL / 인증 코드 */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/70">
            <h3 className="font-bold text-gray-900 text-sm">신청 전 준비 — 조직 URL · 인증 코드 추출</h3>
          </div>
          <div className="px-5 py-5">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">조직 레벨 설정을 요청하려면 먼저 조직 URL과 인증 코드가 필요합니다.</p>
            <ol className="space-y-2">
              {[
                '해당 조직에 로그인 후 아무 채널이나 DM을 엽니다.',
                '메시지 입력란을 클릭합니다.',
                <>
                  <Chip>/verify</Chip>를 입력한 다음 Enter를 눌러 메시지를 보냅니다. (맨 앞에 반드시 슬래시 포함)
                </>,
                'Slackbot이 조직 URL과 인증 코드가 포함된 메시지(본인만 볼 수 있음)를 회신합니다.',
                '코드와 URL을 포함한 전체 메시지를 복사해 Slack 팀에 전달합니다.',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-[11px] font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ===== 조직 레벨 ===== */}
        <SectionHeader color="#635BFF" text="조직 레벨 설정 (Org Level)" sub="피드백팀에 요청하여 설정합니다. 현재 보존 기간은 조직 관리 화면 → 설정 → 내역에서 확인할 수 있습니다." />
        <div className="mb-6">
          <Figure src="/retention/org-settings.png" alt="조직 관리 - 데이터 보존 내역 화면" width={1509} height={1452} />
        </div>

        <ItemCard n="1" level="org" title="공개 채널" decide="아래 두 가지를 각각 선택합니다.">
          <div>
            <StepLabel n="1" text="보존 방식 (4가지 중 하나 선택)" />
            <OptionGrid options={messageOptions} />
          </div>
          <div>
            <StepLabel n="2" text="워크스페이스 고정(Lock) 여부 (예 / 아니오 중 선택)" />
            <SubDecision title="이 정책을 워크스페이스 수준에 고정(Lock)하시겠습니까?">
              <YesNo yes label="예 (잠금)" desc="조직의 공개 채널 보존 정책이 모든 워크스페이스의 모든 공개 채널에 적용됩니다. 워크스페이스 소유자는 개별 설정을 할 수 없습니다." />
              <YesNo label="아니오 (잠그지 않음)" desc="워크스페이스 공개 채널 보존은 기본적으로 조직 정책과 동일하게 설정됩니다. 워크스페이스 소유자가 각 워크스페이스별 정책을 설정할 수 있습니다." />
            </SubDecision>
          </div>
        </ItemCard>

        <ItemCard n="2" level="org" title="비공개 채널" decide="아래 두 가지를 각각 선택합니다. (공개 채널과 동일한 구조)">
          <div>
            <StepLabel n="1" text="보존 방식 (4가지 중 하나 선택)" />
            <OptionGrid options={messageOptions} />
          </div>
          <div>
            <StepLabel n="2" text="워크스페이스 고정(Lock) 여부 (예 / 아니오 중 선택)" />
            <SubDecision title="이 정책을 워크스페이스 수준에서 고정하시겠습니까?">
              <YesNo yes label="예 (잠금)" desc="조직의 비공개 채널 보존 정책이 모든 워크스페이스의 모든 비공개 채널에 적용됩니다. 워크스페이스 소유자는 개별 설정을 할 수 없습니다." />
              <YesNo label="아니오 (잠그지 않음)" desc="워크스페이스 비공개 채널 보존은 기본적으로 조직 정책과 동일하게 설정됩니다. 워크스페이스 소유자가 각 워크스페이스별 정책을 설정할 수 있습니다." />
            </SubDecision>
          </div>
        </ItemCard>

        <ItemCard n="3" level="org" title="다이렉트 메시지 (DM)" decide="메시지를 어떻게 보존할지 선택합니다." note="DM은 Org(조직) 레벨 데이터이므로 워크스페이스 레벨 설정이 불가능합니다.">
          <OptionGrid options={messageOptions} />
        </ItemCard>

        <ItemCard n="4" level="org" title="보존 재정의 (Override)" decide="멤버 재정의와 관리자 재정의 중 설정합니다. 한 번에 하나만 가능합니다.">
          <SubDecision title="멤버 재정의">
            <YesNo label="조직 전체 정책 없음" desc="워크스페이스 멤버가 보존을 중단하는 옵션은 잠겨 있지 않으며, 워크스페이스 소유자가 수정할 수 있습니다." />
            <YesNo label="멤버 - 항상 재정의 허용" desc="멤버는 비공개 채널·DM 보존 설정을 중단할 수 있고, 워크스페이스 소유자는 공개 채널 설정을 재정의할 수 있습니다. 항상 활성화되며 워크스페이스 수준에서 수정 불가." />
            <YesNo label="멤버 - 재정의 허용 안 함" desc="멤버가 보존을 중단할 수 있는 옵션은 항상 비활성화되며 워크스페이스 수준에서 수정 불가." />
          </SubDecision>
          <SubDecision title="관리자 재정의">
            <YesNo yes label="관리자 재정의 - 항상 재정의 허용" desc="채널을 관리하는 조직 소유자·관리자가 기본 보존 정책을 재정의하는 개별 채널(DM 제외)에 사용자 지정 정책을 설정할 수 있습니다. 보존 재정의는 조직 채널 관리 대시보드에서 설정합니다." />
            <YesNo label="관리자 재정의 - 재정의 허용 안 함" desc="채널을 관리하는 조직 소유자·관리자가 보존을 재정의할 수 없습니다." />
          </SubDecision>
          <Figure src="/retention/channel-menu.png" alt="조직 채널 관리 - 메시지 내역 편집 메뉴" width={1215} height={933} />
          <Callout>
            관리자 재정의 - 항상 재정의 허용인 경우, DM에는 별도 재정의 정책을 설정할 수 없습니다. 단,{' '}
            <a href="https://api.slack.com/methods/admin.conversations.setCustomRetention" target="_blank" rel="noopener noreferrer" className="text-[#635BFF] hover:underline">admin.conversations.setCustomRetention</a> API로 설정 가능합니다.
          </Callout>
          <InfoCallout>
            채널 재정의는 파일이 아닌, 채널에서 공유된 메시지에 적용됩니다. 조직 내에서 공유되는 모든 파일은 단일 파일 보존 정책(아래 파일 보존 참조)으로 관리되며, 조직 수준의 파일 보존 정책은 재정의할 수 없습니다.
          </InfoCallout>
        </ItemCard>

        <ItemCard n="5" level="org" title="파일 보존" decide="공유된 파일을 어떻게 보존할지 선택합니다." note="파일은 Org(조직) 레벨 데이터이므로 워크스페이스 레벨 설정이 불가능합니다.">
          <OptionGrid options={fileOptions} />
        </ItemCard>

        <ItemCard n="6" level="org" title="캔버스 및 리스트 보존" decide="캔버스·리스트를 어떻게 보존할지 선택합니다." note="캔버스/리스트는 Org(조직) 레벨 데이터이므로 워크스페이스 레벨 설정이 불가능합니다.">
          <OptionGrid options={canvasOptions} />
          <Callout>캔버스와 리스트가 편집/수정되는 경우, 리텐션 기간은 리셋됩니다.</Callout>
        </ItemCard>

        {/* ===== 워크스페이스 레벨 ===== */}
        <SectionHeader color="#0EA5E9" text="워크스페이스 레벨 설정 (Workspace Level)" sub="조직 정책이 없을 때, 메시지(공개/비공개 채널) 보존 주기를 워크스페이스 단위로 설정할 수 있습니다." />

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg px-4 py-2.5">
            <span className="text-gray-400">권한</span>
            <strong className="text-gray-900">워크스페이스 소유자 이상</strong>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg px-4 py-2.5">
            <span className="text-gray-400">설정 경로</span>
            <span className="text-gray-900">설정 → 설정 및 권한 → 데이터 보존</span>
          </div>
        </div>

        <div className="mb-6">
          <Figure src="/retention/ws-settings.png" alt="워크스페이스 데이터 보존 설정 화면" width={1485} height={798} />
        </div>

        <ItemCard n="1" level="ws" title="데이터 보존" decide="워크스페이스 메시지의 보존 방식을 선택합니다.">
          <OptionGrid options={wsDataOptions} />
          <Callout>멀티 워크스페이스 채널의 조직 레벨 설정이 없으면 &ldquo;메시지를 절대 삭제하지 않음 - 편집 내용 저장하지 않음&rdquo;으로 기본 설정됩니다.</Callout>
        </ItemCard>

        <ItemCard n="2" level="ws" title="재정의 (워크스페이스)" decide="멤버·소유자의 채널 재정의 허용 여부를 선택합니다.">
          <OptionGrid options={wsOverrideOptions} />
          <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <span className="text-emerald-500 flex-shrink-0 mt-0.5">💡</span>
            <div className="text-sm text-emerald-800 leading-relaxed">
              <p className="font-semibold mb-1">참고 사항</p>
              <ul className="space-y-0.5">
                <li>· 해당 정책은 <strong>삭제된 채널</strong>에는 적용되지 않습니다.</li>
                <li>· <strong>보관된 채널</strong>에는 적용됩니다.</li>
              </ul>
            </div>
          </div>
        </ItemCard>
      </div>
    </div>
  );
}

function SectionHeader({ color, text, sub }: { color: string; text: string; sub?: string }) {
  return (
    <div className="mt-16 mb-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">{text}</h2>
      </div>
      {sub && <p className="text-sm text-gray-500 leading-relaxed">{sub}</p>}
    </div>
  );
}

function LevelBadge({ level }: { level: 'org' | 'ws' }) {
  const isOrg = level === 'org';
  return (
    <span
      className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
        isOrg ? 'bg-[#635BFF]/10 text-[#635BFF]' : 'bg-[#0EA5E9]/10 text-[#0EA5E9]'
      }`}
    >
      {isOrg ? '조직 레벨' : '워크스페이스 레벨'}
    </span>
  );
}

function ItemCard({
  n,
  level,
  title,
  decide,
  note,
  children,
}: {
  n: string;
  level: 'org' | 'ws';
  title: string;
  decide: string;
  note?: string;
  children: React.ReactNode;
}) {
  const ring = level === 'org' ? 'bg-[#635BFF]' : 'bg-[#0EA5E9]';
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2.5 flex-wrap mb-2">
          <span className={`w-7 h-7 rounded-lg ${ring} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>{n}</span>
          <h3 className="font-bold text-gray-900 text-base">{title}</h3>
          <LevelBadge level={level} />
        </div>
        <p className="text-sm text-gray-500 flex items-start gap-1.5">
          <span className="text-gray-400 font-medium flex-shrink-0">무엇을 정하나</span>
          <span className="text-gray-300">·</span>
          <span>{decide}</span>
        </p>
        {note && (
          <div className="mt-3">
            <LinkCallout>{note}</LinkCallout>
          </div>
        )}
      </div>
      <div className="px-5 py-5 space-y-5">{children}</div>
    </div>
  );
}

function OptionGrid({ options }: { options: Opt[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map((o) => (
        <div key={o.label} className={`rounded-xl border p-4 ${o.recommended ? 'border-[#635BFF]/40 bg-[#635BFF]/[0.04]' : 'border-gray-200 bg-white'}`}>
          <div className="flex items-center gap-2 mb-1.5">
            {o.recommended && <span className="text-[11px] font-bold text-white bg-[#635BFF] px-2 py-0.5 rounded">권장 👍</span>}
            <span className="text-sm font-semibold text-gray-900">{o.label}</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{o.desc}</p>
        </div>
      ))}
    </div>
  );
}

function StepLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-2 mb-2.5">
      <span className="w-5 h-5 rounded-full bg-[#635BFF] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">{n}</span>
      <span className="text-sm font-semibold text-gray-800">{text}</span>
    </div>
  );
}

function SubDecision({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
      <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-gray-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">?</span>
        {title}
      </h4>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function YesNo({ yes, label, desc }: { yes?: boolean; label: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className={`text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 whitespace-nowrap ${yes ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
        {label}
      </span>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#635BFF]/10 text-[#635BFF] text-sm font-semibold mx-0.5">
      {children}
    </span>
  );
}

function Callout({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 ${className}`}>
      <span className="text-amber-500 flex-shrink-0 mt-0.5">⚠️</span>
      <p className="text-sm text-amber-800 leading-relaxed">{children}</p>
    </div>
  );
}

function InfoCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-xl p-4">
      <span className="text-sky-500 flex-shrink-0 mt-0.5">💡</span>
      <p className="text-sm text-sky-800 leading-relaxed">{children}</p>
    </div>
  );
}

function LinkCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-xl p-3.5">
      <span className="text-[#635BFF] flex-shrink-0 mt-0.5">📌</span>
      <p className="text-[13px] text-indigo-900 leading-relaxed">{children}</p>
    </div>
  );
}

function Figure({ src, alt, width, height, w = 'w-4/5' }: { src: string; alt: string; width: number; height: number; w?: string }) {
  return (
    <div className={`${w} rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm`}>
      <ZoomableImage src={asset(src)} alt={alt} width={width} height={height} className="w-full h-auto" />
    </div>
  );
}
