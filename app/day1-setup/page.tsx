import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';
import HeroBadge from '@/components/HeroBadge';

export default function Day1Setup() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-5xl">
          <HeroBadge>런치 2단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">조직 초기 설정</h1>
          <p className="text-white/70 leading-relaxed">
            계약 시작일에 Enterprise+ 환경을 사용하기 위한 조직 초기 설정 가이드입니다.<br />
            아래 순서대로 진행해주세요!
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Section 1: 이메일 확인 */}
        <Section num={1} title="이메일 확인">
          <StepRow
            n="1"
            text={
              <>
                <strong className="text-gray-900">계약 시작일</strong>이 되면 계약서에{' '}
                <strong className="text-gray-900">조직 소유자</strong>로 지정된 사람이 아래와 같은 메일을 수신하게 됩니다.
              </>
            }
            img={{ src: '/day1/email-01.png', alt: 'Finish setting up Slack Enterprise+ 메일', width: 1680, height: 1053 }}
          />
          <StepRow
            n="2"
            text={<>메일 하단의 <Chip>Finish Setup</Chip> 버튼을 클릭합니다.</>}
            img={{ src: '/day1/email-02.png', alt: 'Finish Setup 버튼', width: 1868, height: 724 }}
          />
        </Section>

        {/* Section 2: Enterprise+ Setup */}
        <Section num={2} title="Enterprise+ Setup">
          <StepRow
            n="1"
            text={<><Chip>시작</Chip> 버튼을 클릭합니다. <span className="text-gray-400 text-sm">(1/3단계)</span></>}
            img={{ src: '/day1/setup-step1.webp', alt: 'Slack Enterprise+ 환영 화면', width: 1680, height: 944 }}
          />
          <StepRow
            n="2"
            text={<>본인의 <strong className="text-gray-900">이름과 비밀번호</strong>를 입력한 후, <Chip>계속</Chip> 버튼을 클릭합니다. <span className="text-gray-400 text-sm">(2/3단계)</span></>}
            img={{ src: '/day1/setup-step2.png', alt: '계정 만들기 - 이름과 비밀번호 입력', width: 1680, height: 959 }}
          />
          <StepRow
            n="3"
            text={
              <>
                <p>
                  <strong className="text-gray-900">조직의 이름과 도메인</strong>을 설정한 후, <Chip>완료</Chip> 버튼을 클릭합니다. <span className="text-gray-400 text-sm">(3/3단계)</span>
                </p>
                <Callout className="mt-4">
                  나중에 변경할 수 있기 때문에 지금은 변경하지 않고 완료하시는 것을 권장합니다.
                  특히 조직 도메인의 경우 SSO 설정 전까지는 아무때나 변경하셔도 무방합니다.
                </Callout>
              </>
            }
            img={{ src: '/day1/setup-step3.png', alt: '조직 이름 지정', width: 1680, height: 951 }}
          />
        </Section>

        {/* Section 3: Account Setting */}
        <Section num={3} title="Account Setting">
          <InfoCallout>
            실제 환경에선 이 단계에서 <strong>조직 소유자</strong>에 대한 <strong>2FA 설정</strong> 화면이 뜹니다.
            관리자는 2FA 설정이 필수이므로 설정해주세요!
          </InfoCallout>
          <StepRow
            n="1"
            text={
              <>
                왼쪽 하단의 <strong className="text-gray-900">프로필 이미지</strong> 클릭 →{' '}
                <strong className="text-gray-900">Account Settings</strong>를 클릭합니다.
              </>
            }
            img={{ src: '/day1/account-01.webp', alt: '프로필 이미지 → Account Settings', width: 2000, height: 1322 }}
          />
          <StepRow
            n="2"
            text={
              <>
                <p>해당 계정의 <strong className="text-gray-900">타임존과 언어</strong>를 설정합니다.</p>
                <ul className="mt-3 space-y-1 text-gray-600 border-l-2 border-[#635BFF]/30 pl-4">
                  <li>타임존: <strong className="text-gray-900">(UTC+9:00) Seoul</strong></li>
                  <li>언어: <strong className="text-gray-900">한국어</strong></li>
                </ul>
              </>
            }
            img={{ src: '/day1/account-02.png', alt: 'Two-Factor Authentication, Time Zone, Language 설정', width: 1880, height: 1194 }}
          />
          <Step n="3">
            변경 후 화면 상단의 <Chip>워크스페이스로 돌아가기</Chip> 링크를 클릭하면 이전 화면으로 돌아옵니다.
          </Step>
          <Callout>
            새로고침해도 언어가 변경되지 않는 경우는 로그아웃 &amp; 로그인을 하시면 반영된 내용을 확인하실 수 있습니다.
          </Callout>
        </Section>

        {/* Section 4: 조직 설정 */}
        <Section num={4} title="조직 설정" last>
          <StepRow
            n="1"
            text={<><Chip>조직 설정</Chip> 버튼을 클릭합니다.</>}
            img={{ src: '/day1/org-01.png', alt: '조직 설정 버튼', width: 1680, height: 911 }}
          />
          <StepRow
            n="2"
            text={<><Chip>기본 조직 설정 사용</Chip>을 선택한 후, <Chip>시작하기</Chip> → <Chip>계속</Chip> 버튼을 클릭합니다.</>}
            img={{ src: '/day1/org-02.png', alt: '기본 조직 설정 사용 선택', width: 1122, height: 1166 }}
          />
        </Section>
      </div>
    </div>
  );
}

function Section({ num, title, last, children }: { num: number; title: string; last?: boolean; children: React.ReactNode }) {
  return (
    <section className={last ? 'mb-4' : 'mb-16'}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-[#635BFF] text-white text-base font-bold flex items-center justify-center flex-shrink-0">
          {num}
        </div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

type Img = { src: string; alt: string; width: number; height: number };

function StepRow({ n, text, img }: { n: string; text: React.ReactNode; img: Img }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="flex items-start gap-3">
        <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
          {n}
        </span>
        <div className="text-gray-700 leading-relaxed pt-0.5">{text}</div>
      </div>
      <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
        <ZoomableImage src={asset(img.src)} alt={img.alt} width={img.width} height={img.height} className="w-full h-auto" />
      </div>
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

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
        {n}
      </span>
      <p className="text-gray-700 leading-relaxed pt-0.5">{children}</p>
    </div>
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
      <span className="text-sky-500 flex-shrink-0 mt-0.5">⚠️</span>
      <p className="text-sm text-sky-800 leading-relaxed">{children}</p>
    </div>
  );
}
