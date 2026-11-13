import Link from 'next/link';
import { asset } from '@/lib/asset';
import HeroBadge from '@/components/HeroBadge';
import ZoomableImage from '@/components/ZoomableImage';

export default function MigrationPrepPage() {
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
          <HeroBadge>론치 3단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">마이그레이션 사전작업</h1>
          <p className="text-white/70 leading-relaxed">
            마이그레이션 진행 전 완료해야 할 사전 준비 작업을 영상으로 안내합니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Video */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10">
              <svg className="w-4 h-4 text-[#635BFF]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
            <h2 className="text-lg font-bold text-gray-900">사전작업 영상 가이드</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-black max-w-full md:max-w-[64%]">
            <video controls playsInline preload="metadata" poster={asset('/migration/poster.svg')} className="w-full h-auto">
              <source src={asset('/migration/migration-demo.mp4')} type="video/mp4" />
              브라우저가 영상 재생을 지원하지 않습니다.
            </video>
          </div>
          <p className="text-xs text-gray-400 mt-3">영상을 참고하여 사전작업을 완료한 뒤 마이그레이션을 진행하세요.</p>
        </div>

        {/* 사전작업 진행 방법 */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#635BFF]/10">
              <svg className="w-4 h-4 text-[#635BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </span>
            <h2 className="text-lg font-bold text-gray-900">사전작업 진행 방법</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            마이그레이션은 <strong className="text-gray-900">이전 요청 → 상대 워크스페이스 동의 → 사전작업 대시보드(6단계) → 이전 예약</strong> 순서로 진행됩니다.
            아래 순서대로 준비해주세요.
          </p>

          {/* Phase A: 이전 요청 & 동의 */}
          <PrepPhase label="STEP 0" title="이전 요청 및 동의">
            <PrepStep n="1">
              Migration 화면 우측 상단의 <Chip>워크스페이스 이전</Chip> 버튼을 클릭하고,<br /> 이전 대상 워크스페이스의 <strong className="text-gray-900">워크스페이스 ID</strong>(<strong className="text-gray-900">T로 시작</strong>)와 <strong className="text-gray-900">주소</strong>를 입력한 뒤 이전 요청을 합니다.
              <InfoNote className="mt-3">
                워크스페이스 ID는 해당 워크스페이스를 웹 브라우저로 접속한 URL에서 확인 가능합니다. (예: <code className="text-xs bg-[#635BFF]/10 text-[#635BFF] px-1.5 py-0.5 rounded break-all">https://app.slack.com/client/<span className="font-bold">T…</span></code> )
              </InfoNote>
              <div className="mt-3 grid sm:grid-cols-2 gap-4 items-start">
                <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <ZoomableImage src={asset('/migration-prep/01-transfer-button.png')} alt="이전 화면 우측 상단 워크스페이스 이전 버튼" width={2048} height={1277} className="w-full h-auto" />
                </div>
                <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <ZoomableImage src={asset('/migration-prep/01b-transfer-modal.png')} alt="워크스페이스 이전 모달 - 워크스페이스 ID·URL 입력" width={1614} height={1278} className="w-full h-auto" />
                </div>
              </div>
            </PrepStep>
            <PrepStep n="2" parallel img={{ src: '/migration-prep/02-approval-request.png', alt: 'Slack 앱으로 전달된 이전 승인 요청 메시지', width: 1916, height: 1046 }}>
              요청하면 이전 대상 워크스페이스의 <strong className="text-gray-900">주 소유자</strong>에게 Slack 앱으로 승인 요청 메시지가 전달됩니다. 주 소유자가 <Chip>이전 승인</Chip> 버튼을 클릭해야 사전작업을 진행할 수 있습니다.
              <WarnNote className="mt-3">동의하지 않으면 마이그레이션 사전작업을 진행할 수 없습니다.</WarnNote>
            </PrepStep>
            <PrepStep n="3" parallel img={{ src: '/migration-prep/03-prestep-needed.png', alt: '이전 목록에서 사전 이전 단계 필요 상태', width: 2048, height: 1274 }}>
              승인이 완료되면 상태가 <StateChip>사전 이전 단계 필요</StateChip>로 변경되고, <strong className="text-gray-900">사전작업 대시보드</strong>가 자동 생성됩니다.
            </PrepStep>
          </PrepPhase>

          {/* Phase B: 대시보드 6단계 */}
          <PrepPhase label="대시보드" title="사전작업 6단계">
            <p className="text-sm text-gray-500 leading-relaxed mb-5 ml-1">
              대시보드로 들어가면 6단계가 표시되며, <strong className="text-gray-700">앞의 2단계는 보통 자동으로 완료</strong>되어 있습니다. 아래는 직접 진행해야 하는 단계입니다.
            </p>
            <PrepStep n="1">
              <strong className="text-gray-900">이전하는 사용자 이메일 업데이트</strong> — 필요한 경우 마이그레이션 중 일괄 업데이트, 아니면 <Chip>이 단계</Chip>를 건너뛰세요. 전체 목록은 CSV로 확인합니다.
              <WarnNote tone="red" className="mt-3">이메일 업데이트 시, <strong>모든 이전 사용자에 대해 도메인 변경</strong>하는 경우에는 <strong>게스트를 포함한</strong> <strong>모든 사용자의 도메인이 변경</strong>되므로 주의 부탁드립니다.</WarnNote>
              <InfoNote className="mt-3">다운로드한 CSV는 <strong>UTF-8 인코딩</strong>으로 변환하여 저장한 뒤 열어야 한글이 깨지지 않습니다.</InfoNote>
              <div className="mt-3 grid sm:grid-cols-2 gap-4 items-start">
                <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <ZoomableImage src={asset('/migration-prep/04-dashboard.png')} alt="사전작업 대시보드 — 이메일 업데이트" width={2048} height={1297} className="w-full h-auto" />
                </div>
                <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <ZoomableImage src={asset('/migration-prep/04b-email-update-modal.png')} alt="이전하는 사용자 이메일 업데이트 모달 - 도메인 변경/CSV 업로드" width={1520} height={1336} className="w-full h-auto" />
                </div>
              </div>
            </PrepStep>
            <PrepStep n="2" parallel img={{ src: '/migration-prep/05-account-review.png', alt: '이전 중인 사용자 계정 검토 — 일치하는 이메일 병합', width: 2048, height: 1290 }}>
              <strong className="text-gray-900">이전 중인 사용자 계정 검토</strong> — 두 가지 경우로 나뉩니다.
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#635BFF] font-bold flex-shrink-0">·</span>
                  <span><strong className="text-gray-900">충돌 없음</strong> (이메일 일치) — 사용자 이전 탭에서 목록을 검토하고 문제가 없으면 <Chip>일치하는 이메일 병합</Chip> 버튼을 눌러 <Chip>동의</Chip>하면 완료됩니다. 이메일이 일치하면 두 계정이 병합되고, 중복이 없으면 새 계정이 생성됩니다.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#635BFF] font-bold flex-shrink-0">·</span>
                  <span><strong className="text-gray-900">충돌 있음</strong> (이름은 같으나 이메일·역할 불일치) — 충돌 건수가 표시되며, 각 사용자에 대해 <Chip>계정 병합</Chip> 또는 병합할 계정이 없으면 <Chip>새 계정으로 이전</Chip>을 선택합니다.</span>
                </li>
              </ul>
            </PrepStep>
            <PrepStep n="3" parallel img={{ src: '/migration-prep/07-setting-compare.png', alt: '충돌하는 설정 검토 — 기존 워크스페이스와 조직 설정 비교', width: 2048, height: 1296 }}>
              <strong className="text-gray-900">충돌하는 설정 검토</strong> — <Chip>설정 충돌 검토</Chip> 버튼을 클릭하면 좌측에 기존 워크스페이스 설정, 우측에 Enterprise+ 설정이 나란히 표시됩니다. 차이를 확인한 뒤 <Chip>설정 확인</Chip>을 클릭합니다.
              <InfoNote className="mt-3">
                SSO·멤버 제외 등은 확인만 하면 됩니다. <strong>데이터 보존 정책</strong>은 기존 설정을 보며 향후 정책을 어떻게 가져갈지 결정해야 하며, 데이터 감사·관리를 위해 <strong>모든 변경사항을 보관</strong>하도록 설정하는 것을 권장합니다. 자세한 내용은{' '}
                <Link href="/reference/retention" className="text-[#635BFF] font-medium hover:underline">데이터 보존 정책</Link> 화면을 참고하세요.
              </InfoNote>
            </PrepStep>
            <PrepStep n="4" parallel img={{ src: '/migration-prep/08-schedule.png', alt: '이전 예약 — 날짜·시간 선택 (KST 기준)', width: 1014, height: 978 }}>
              <strong className="text-gray-900">이전 예약</strong> — 5단계까지 완료되면 <Chip>이전 예약</Chip> 버튼이 활성화됩니다. 희망하는 마이그레이션 날짜와 시간을 선택합니다.<br />(선택 불가한 날짜는 표시되지 않으며, 소요시간이 2시간으로 표시되면 실제로는 2시간~2시간 59분 범위입니다.)
              <WarnNote className="mt-3">
                예약은 <strong>Slack 계정에 설정된 타임존 기준</strong>으로 적용됩니다. 한국 시간으로 예약하려면 계정 타임존이 <strong>GMT+9</strong>로 설정되어 있는지 먼저 확인하세요.
              </WarnNote>
            </PrepStep>
          </PrepPhase>

          <InfoNote className="mt-2">
            예약 후에도 디데이 전 변경사항이 생기면 재검출됩니다. <strong>대시보드를 다시 확인·재처리</strong>해야 예정대로 실행되니, 예약 뒤에는 되도록 변경하지 마세요.
          </InfoNote>
        </div>

        {/* Next */}
        <div className="mt-6">
          <Link
            href="/migration/requests"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
          >
            다음: 전/후 진행 요청 사항 →
          </Link>
        </div>
      </div>
    </div>
  );
}

function PrepPhase({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 bg-gray-50/70">
        <span className="text-[11px] font-bold text-[#635BFF] bg-[#635BFF]/10 px-2 py-0.5 rounded-full flex-shrink-0">{label}</span>
        <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
      </div>
      <div className="px-5 py-5 space-y-5">{children}</div>
    </div>
  );
}

type StepImg = { src: string; alt: string; width: number; height: number };

function PrepStep({ n, img, parallel = false, children }: { n: string; img?: StepImg; parallel?: boolean; children: React.ReactNode }) {
  const figure = img && (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
      <ZoomableImage src={asset(img.src)} alt={img.alt} width={img.width} height={img.height} className="w-full h-auto" />
    </div>
  );
  return (
    <div className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
      {parallel && img ? (
        <div className="flex-1 min-w-0 grid md:grid-cols-2 gap-5 items-start">
          <div className="text-gray-700 leading-relaxed pt-0.5 text-sm">{children}</div>
          {figure}
        </div>
      ) : (
        <div className="text-gray-700 leading-relaxed pt-0.5 text-sm flex-1 min-w-0">
          {children}
          {img && <div className="mt-3">{figure}</div>}
        </div>
      )}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#635BFF]/10 text-[#635BFF] text-sm font-semibold mx-0.5">{children}</span>
  );
}

function StateChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-sm font-semibold mx-0.5 border border-amber-200">{children}</span>
  );
}

function InfoNote({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-start gap-2.5 bg-sky-50 border border-sky-200 rounded-lg px-3.5 py-2.5 ${className}`}>
      <span className="text-sky-500 flex-shrink-0 mt-0.5 text-sm">💡</span>
      <p className="text-[13px] text-sky-900 leading-relaxed">{children}</p>
    </div>
  );
}

function WarnNote({ children, className = '', tone = 'amber' }: { children: React.ReactNode; className?: string; tone?: 'amber' | 'red' }) {
  const red = tone === 'red';
  return (
    <div className={`flex items-start gap-2.5 rounded-lg px-3.5 py-2.5 ${red ? 'bg-rose-50 border border-rose-200' : 'bg-amber-50 border border-amber-200'} ${className}`}>
      <span className={`flex-shrink-0 mt-0.5 text-sm ${red ? 'text-rose-500' : 'text-amber-500'}`}>⚠️</span>
      <p className={`text-[13px] leading-relaxed ${red ? 'text-rose-800' : 'text-amber-800'}`}>{children}</p>
    </div>
  );
}
