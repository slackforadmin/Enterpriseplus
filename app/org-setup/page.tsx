import Link from 'next/link';
import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';
import HeroBadge from '@/components/HeroBadge';

const recommended: { label: string; value: string; choose?: boolean }[] = [
  { label: '공개 채널', value: '개정 내역을 포함한 모든 메시지 보관' },
  { label: '공개 채널 · 워크스페이스 고정(Lock)', value: '예 / 아니오 중 선택', choose: true },
  { label: '비공개 채널', value: '개정 내역을 포함한 모든 메시지 보관' },
  { label: '비공개 채널 · 워크스페이스 고정(Lock)', value: '예 / 아니오 중 선택', choose: true },
  { label: '다이렉트 메시지', value: '개정 내역을 포함한 모든 메시지 보관' },
  { label: '보존 재정의', value: '관리자 재정의 - 항상 재정의 허용' },
  { label: '파일 보존', value: '삭제된 파일을 포함하여 모든 파일 보관' },
  { label: '캔버스 및 리스트 보존', value: '삭제된 캔버스를 포함하여 캔버스 및 리스트 보관' },
];

export default function OrgSetupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-5xl">
          <HeroBadge>런치 4단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">조직 관리자 설정</h1>
          <p className="text-white/70 leading-relaxed">
            운영에 필요하지만 기본값으로 권한이 부여되지 않은 설정들입니다.<br />
            확인 후 설정해주세요.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-4xl">
        <p className="text-gray-600 leading-relaxed mb-10">
          관리자 계정에서 운영에 필요하지만 <strong className="text-gray-900">기본값이 권한 부여되지 않은 상태</strong>의 권한들입니다. 확인 후 설정해주세요.
        </p>

        {/* 1. DLP */}
        <Section num={1} title="DLP 권한 추가" badge="관리자 화면">
          <StepRow n="1" text={<>조직 관리 화면의 <Chip>보안</Chip> → <Chip>데이터 손실 방지</Chip> 항목이 없는지 확인합니다. (없다면 아래 할당 작업 진행)</>}
            img={{ src: '/org-setup/dlp-1.png', alt: '보안 > 데이터 손실 방지 확인', width: 1120, height: 1264 }} />
          <StepRow n="2" text={<><Chip>역할 및 권한</Chip> → <Chip>역할</Chip> → <Chip>DLP 관리자</Chip>의 <Chip>···</Chip> → <Chip>사용자 할당</Chip>을 선택합니다.</>}
            img={{ src: '/org-setup/dlp-2.png', alt: '역할 및 권한 > 역할 > DLP 관리자 > 사용자 할당', width: 1184, height: 1442 }} />
          <StepRow n="3" text={<>본인 계정을 선택한 뒤 <Chip>할당</Chip> 버튼을 클릭합니다.</>}
            img={{ src: '/org-setup/dlp-3.png', alt: '멤버에게 DLP 관리자 역할 할당', width: 1568, height: 1400 }} />
        </Section>

        {/* 2. 법적 자료 관리자 */}
        <Section num={2} title="법적 자료 관리자 권한 추가" badge="관리자 화면">
          <Step n="1">
            조직 관리 화면의 <Chip>역할 및 권한</Chip> → <Chip>역할</Chip> → <Chip>법적 자료 관리자</Chip>의 <Chip>···</Chip> → <Chip>사용자 할당</Chip>을 선택합니다.
          </Step>
        </Section>

        {/* 3. 플래그 콘텐츠 검토 */}
        <Section num={3} title="플래그가 지정된 콘텐츠 검토 활성화" badge="관리자 화면">
          <StepRow n="1" text={<><Chip>설정</Chip> → <Chip>조직 설정</Chip> → <Chip>플래그가 지정된 콘텐츠 검토</Chip>를 활성화합니다.</>}
            img={{ src: '/org-setup/flag-content.webp', alt: '설정 > 조직 설정 > 플래그가 지정된 콘텐츠 검토', width: 2000, height: 1151 }} />
        </Section>

        {/* 4. 데이터 내보내기 */}
        <Section num={4} title="데이터 내보내기 권한 요청" badge="피드백팀 요청">
          <p className="text-gray-600 leading-relaxed">
            데이터 내보내기 권한은 피드백팀에 요청해야 합니다.<br />
            다음 내보내기 기능 중 활성화를 희망하시는 기능을 함께 지정해 요청해주세요.
          </p>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start gap-2 text-gray-600 leading-relaxed">
              <span className="text-[#635BFF] font-bold flex-shrink-0 mt-0.5">·</span>
              <span>
                <strong className="text-gray-900">모든 채널과 대화</strong>
                <span className="block text-sm text-gray-500 mt-0.5">법률과 규정을 준수하기 위해 공개 채널, 비공개 채널, DM의 메시지와 파일 링크를 JSON 형식으로 내보냅니다.</span>
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-600 leading-relaxed">
              <span className="text-[#635BFF] font-bold flex-shrink-0 mt-0.5">·</span>
              <span>
                <strong className="text-gray-900">사용자 지정 데이터 내보내기</strong> <span className="text-sm text-[#635BFF]">📄 ‘모든 채널과 대화’가 활성화되어야 함께 활성화할 수 있습니다.</span>
                <span className="block text-sm text-gray-500 mt-0.5">대화 유형, 멤버 또는 특정 워크스페이스별로 내보낼 데이터를 JSON 또는 TXT 파일 형식으로 선택합니다.</span>
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-600 leading-relaxed">
              <span className="text-[#635BFF] font-bold flex-shrink-0 mt-0.5">·</span>
              <span>
                <strong className="text-gray-900">채널 감사</strong>
                <span className="block text-sm text-gray-500 mt-0.5">이전 계획 또는 기타 워크스페이스 관리 요구 사항에 대한 채널의 CSV 리스트와 해당 세부정보를 내보냅니다.</span>
              </span>
            </li>
          </ul>
          <div className="flex items-start gap-2 ml-2">
            <span className="text-[#635BFF] flex-shrink-0 mt-0.5">📄</span>
            <p className="text-gray-600 leading-relaxed">
              각 기능에 대한 자세한 내용은{' '}
              <a href="https://slack.com/intl/ko-kr/help/articles/201658943" target="_blank" rel="noopener noreferrer" className="text-[#635BFF] hover:underline font-medium">
                워크스페이스 데이터 내보내기
              </a>{' '}
              고객지원센터 페이지를 참고해주세요.
            </p>
          </div>
        </Section>

        {/* 5. Data Retention */}
        <Section num={5} title="Data Retention 설정 요청" badge="피드백팀 요청" last>
          <p className="text-gray-600 leading-relaxed">
            Enterprise+ 플랜의 데이터 보존 정책은 관리자 화면에서 설정할 수 없어 <strong className="text-gray-900">피드백팀에 요청</strong>해야 합니다.<br />요청 시 다음 정보가 필요합니다.
          </p>
          <ul className="space-y-2 ml-2">
            <li className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-[11px] font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span><strong className="text-gray-900">조직 레벨 설정의 8가지 항목 값</strong> — 삭제/편집 데이터 보관 및 멤버 재정의 방지를 위해 <Chip>권장</Chip> 값으로 설정하는 것을 권장합니다. 권장 표시가 없는 항목은 내용 확인 후 선택해주세요.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-[11px] font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span>조직 URL과 인증 코드</span>
            </li>
          </ul>

          <div className="flex items-start gap-2 ml-2">
            <span className="text-[#635BFF] flex-shrink-0 mt-0.5">📄</span>
            <p className="text-gray-600 leading-relaxed">
              관리 방식은{' '}
              <Link href="/reference/retention" className="text-[#635BFF] hover:underline font-medium">
                데이터 보존 정책
              </Link>{' '}
              화면을 참조하여 정한 뒤 피드백팀에 요청해주세요.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-gray-200 overflow-hidden bg-white">
            <div className="px-5 py-3 bg-[#635BFF]/5 border-b border-gray-100">
              <span className="text-sm font-bold text-gray-900">권장 설정 값 (총 8개 항목)</span>
              <p className="text-xs text-gray-500 mt-0.5">대부분은 권장 값이 있으며, 공개·비공개 채널의 워크스페이스 고정(Lock)은 예/아니오 중 하나를 선택합니다.</p>
            </div>
            <ul className="divide-y divide-gray-50">
              {recommended.map((r) => (
                <li key={r.label} className="flex items-center gap-3 px-5 py-3">
                  <span className="text-sm text-gray-500 w-36 flex-shrink-0">{r.label}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${r.choose ? 'text-gray-600 bg-gray-100' : 'text-white bg-[#635BFF]'}`}>{r.choose ? '택1' : '권장'}</span>
                    {r.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <div className="mt-12">
          <Link
            href="/admin-session"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
          >
            다음: 관리자 세션 →
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ num, title, badge, last, children }: { num: number; title: string; badge?: string; last?: boolean; children: React.ReactNode }) {
  return (
    <section className={last ? 'mb-4' : 'mb-14'}>
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="w-9 h-9 rounded-xl bg-[#635BFF] text-white text-base font-bold flex items-center justify-center flex-shrink-0">{num}</div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {badge && (
          <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{badge}</span>
        )}
      </div>
      <div className="space-y-4 ml-1">{children}</div>
    </section>
  );
}

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
      <p className="text-gray-700 leading-relaxed pt-0.5">{children}</p>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#635BFF]/10 text-[#635BFF] text-sm font-semibold mx-0.5">{children}</span>
  );
}

type Img = { src: string; alt: string; width: number; height: number };

function StepRow({ n, text, img }: { n: string; text: React.ReactNode; img: Img }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="flex items-start gap-3">
        <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
        <p className="text-gray-700 leading-relaxed pt-0.5">{text}</p>
      </div>
      <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
        <ZoomableImage src={asset(img.src)} alt={img.alt} width={img.width} height={img.height} className="w-full h-auto" />
      </div>
    </div>
  );
}
