import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';
import HeroBadge from '@/components/HeroBadge';

type Img = { src: string; alt: string; width: number; height: number };

const flow = [
  { n: 1, title: '접속', sub: 'Slack Help Center', desc: '제출 또는 도움 요청' },
  { n: 2, title: '로그인', sub: 'Salesforce Portal', desc: '로그인·계정 생성' },
  { n: 3, title: '사례 생성', sub: 'Create a Case', desc: '정보 입력' },
  { n: 4, title: '제출 완료', sub: 'Case 번호 발급', desc: '지원팀 연결' },
];

export default function SupportCaseReferencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-5xl">
          <HeroBadge>참고 자료</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Support Case 신청 가이드</h1>
          <p className="text-white/70 leading-relaxed">
            Slack 고객지원센터에서 지원 사례(Case)를 생성하고 제출하는 방법입니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* feedback 중단 안내 */}
        <div className="mb-8 rounded-2xl border border-[#635BFF]/20 bg-[#635BFF]/[0.05] p-5">
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#635BFF] bg-[#635BFF]/10 px-2.5 py-1 rounded-full">
              📣 변경 안내
            </span>
          </div>
          <p className="text-gray-800 leading-relaxed">
            <code className="text-sm font-medium bg-[#635BFF]/10 text-[#635BFF] px-1.5 py-0.5 rounded">/feedback</code> · <code className="text-sm font-medium bg-[#635BFF]/10 text-[#635BFF] px-1.5 py-0.5 rounded">feedback@slack.com</code> 은 더 이상 동작하지 않습니다. 이제 <strong className="text-gray-900">Slack 고객지원센터</strong>에서 지원 사례(Case)를 생성하세요.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            <code className="text-xs font-medium bg-[#635BFF]/10 text-[#635BFF] px-1.5 py-0.5 rounded">/feedback</code> 실행 시 Help Center 안내창으로 이동합니다.
          </p>
        </div>

        {/* 전체 흐름 */}
        <section className="mb-14">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-5">전체 접수 흐름</h2>
          <div className="flex flex-col sm:flex-row sm:items-stretch gap-2">
            {flow.map((f, i) => (
              <div key={f.n} className="flex items-center gap-2 sm:flex-1">
                <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 h-full">
                  <div className="w-7 h-7 rounded-full bg-[#635BFF] text-white text-xs font-bold flex items-center justify-center mb-2">{f.n}</div>
                  <div className="font-semibold text-gray-900 text-sm">{f.title}</div>
                  <div className="text-xs text-[#635BFF] font-medium mt-0.5">{f.sub}</div>
                  <div className="text-xs text-gray-400 mt-1">{f.desc}</div>
                </div>
                {i < flow.length - 1 && (
                  <div className="flex-shrink-0 text-gray-300 sm:rotate-0 rotate-90 self-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mt-4">
            Slack 고객지원센터 → Salesforce Portal 로그인 → 본인 Org 기준으로 사례 생성·제출. 언어(한국어/English)에 따라 생성 방식이 다르며, 두 경로를 모두 안내합니다.
          </p>
        </section>

        {/* 공통 STEP 1~5 */}
        <SectionLabel color="#635BFF" text="STEP 1–5 · 공통 (포털 접속)" />

        <StepRow n="1" title="Slack 고객지원센터 접속" img={{ src: '/support-case/step1-helpcenter.png', alt: 'Slack Help Center', width: 1176, height: 711 }}>
          <a href="https://slack.com/intl/ko-kr/help" target="_blank" rel="noopener noreferrer" className="text-[#635BFF] hover:underline font-medium">Slack Help Center</a>에 접속한 뒤, 우측 끝 <Chip>제출 또는 도움 요청 보기</Chip>를 클릭합니다.
        </StepRow>

        <StepRow n="2" title="[내 사례] 열기" img={{ src: '/support-case/step2-mycases.png', alt: '내 사례 메뉴', width: 1110, height: 726 }}>
          도움말에서 우측 <Chip>내 사례</Chip>를 클릭하면 지원 포털(Salesforce Portal)로 이동합니다.
        </StepRow>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
            <h3 className="font-semibold text-gray-900 text-sm">Portal 로그인 · 계정 생성</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed ml-10 mb-4">
            최초 1회만 계정을 생성하면 이후 재사용합니다. 아래 <strong className="text-gray-900">A → B → C</strong> 순서로 진행하세요.
          </p>
          <div className="ml-10 grid sm:grid-cols-3 gap-4">
            <CaptionedShot step="A" caption={<>로그인 승인 → <Chip>승인하고 계속</Chip></>} img={{ src: '/support-case/step3a-approve.png', alt: 'Salesforce 로그인 승인 화면', width: 584, height: 646 }} />
            <CaptionedShot step="B" caption={<>지역 선택·약관 동의 → <Chip>Next</Chip></>} img={{ src: '/support-case/step3b-region.png', alt: '지역 선택 및 약관 동의 (Step 2 of 3)', width: 428, height: 726 }} />
            <CaptionedShot step="C" caption={<>이름·회사·역할 입력 → <Chip>Next</Chip></>} img={{ src: '/support-case/step3c-info.png', alt: '이름·회사·역할 입력 (Step 3 of 3)', width: 424, height: 730 }} />
          </div>
        </div>

        <StepRow n="4" title="로그인 후 포털 화면" img={{ src: '/support-case/step4-portal.png', alt: 'Salesforce Portal 홈', width: 1158, height: 708 }}>
          본인 Org의 <strong className="text-gray-900">Org ID · Success Plan</strong>을 확인하고, <Chip>Create a Case</Chip>로 사례를 생성할 수 있습니다.
        </StepRow>

        <StepRow n="5" title="언어 설정" img={{ src: '/support-case/step5-language.png', alt: '언어 설정', width: 1062, height: 615 }}>
          <span className="block mb-2">화면 좌측 하단에서 언어를 변경할 수 있습니다. 언어별로 사례 생성 방식이 다릅니다.</span>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-gray-200 p-2.5">
              <div className="text-xs font-bold text-gray-900 mb-1">한국어</div>
              <div className="text-xs text-gray-500">수동 양식 입력 · 간단</div>
            </div>
            <div className="rounded-lg border border-gray-200 p-2.5">
              <div className="text-xs font-bold text-gray-900 mb-1">English</div>
              <div className="text-xs text-gray-500">Fin 에이전트 대화형 · 글로벌 지원팀 연결 유리</div>
            </div>
          </div>
        </StepRow>

        {/* 한국어 경로 */}
        <SectionLabel color="#007a5a" text="STEP 6–7 · 한국어 경로" />

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">6</span>
            <h3 className="font-semibold text-gray-900 text-sm">(한국어) 사례 생성</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed ml-10 mb-3">내 사례 화면에서 중앙 하단 또는 우측 <Chip>사례 생성</Chip>을 클릭해 입력 양식으로 이동합니다.</p>
          <div className="ml-10 grid sm:grid-cols-2 gap-4">
            <Figure img={{ src: '/support-case/step6-caselist-empty.png', alt: '생성된 사례가 없습니다 - 사례 생성 버튼', width: 1310, height: 772 }} />
            <Figure img={{ src: '/support-case/step6-portal-create.png', alt: '포털 홈 - 사례 생성 버튼', width: 1306, height: 746 }} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">7</span>
              <h3 className="font-semibold text-gray-900 text-sm">(한국어) 사례 정보 입력</h3>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed ml-10">
              <span className="block mb-2"><strong className="text-gray-900">필수 입력</strong>: 사례 제목·설명, 제품(Slack)·주제, 인스턴스 유형·연락 가능 시간대, 심각도(기본 Lv4)·Slack ID(자동)</span>
              <span className="block">선택 입력: 협업자·파일 첨부 → 입력 후 <Chip>사례 만들기</Chip> 클릭</span>
            </div>
          </div>
          <div className="space-y-3">
            <Figure img={{ src: '/support-case/step7-form-1.png', alt: '사례 생성 양식 - 제목·설명·제품·주제', width: 684, height: 708 }} />
            <Figure img={{ src: '/support-case/step7-form-2.png', alt: '사례 생성 양식 - 인스턴스·심각도·Slack ID·파일', width: 698, height: 646 }} />
          </div>
        </div>

        {/* English 경로 */}
        <SectionLabel color="#1264a3" text="STEP 8–9 · English 경로 (Fin 에이전트)" />

        <StepRow n="8" title="(English) Create a Case" img={{ src: '/support-case/step8-english.png', alt: 'Agentforce Fin 대화 진입', width: 1170, height: 543 }}>
          <Chip>Create a Case</Chip> 클릭 시 표시되거나 <Chip>Ask Agentforce</Chip>를 클릭해 Fin 대화창에 진입합니다. 입력창에 요청을 작성합니다. <span className="text-gray-400 text-xs">(대화형·영어 응대 필요)</span>
        </StepRow>

        <StepRow n="9" title="(English) 에이전트에 케이스 요청" img={{ src: '/support-case/step9-fin.png', alt: 'Fin 대화 흐름', width: 1236, height: 621 }}>
          <span className="block">① 요청: 케이스 생성 → ② 정보: 상황·제품(Slack) 설명 → ③ 생성: Fin이 케이스 생성 진행</span>
          <span className="block text-gray-400 text-xs mt-1">Fin이 제품·상황을 되물으며 정보를 수집한 뒤 케이스를 생성합니다.</span>
        </StepRow>

        {/* 확인 */}
        <SectionLabel color="#635BFF" text="STEP 10–11 · 접수 확인" />

        <StepRow n="10" title="생성된 케이스 확인" img={{ src: '/support-case/step10-created.png', alt: '생성된 케이스', width: 1236, height: 609 }}>
          <span className="block">한국어: 사례 생성 → 양식 입력 → 제출 → 사례 번호 발급</span>
          <span className="block">English: Create a Case → Fin 대화 → 케이스 생성 → 사례 번호 발급</span>
        </StepRow>

        <StepRow n="11" title="케이스 생성 확인 (이메일)" img={{ src: '/support-case/step11-email.png', alt: '확인 이메일', width: 726, height: 699 }}>
          사례 생성 시 등록한 이메일 주소로 확인 메일이 발송됩니다.
        </StepRow>

        {/* 참고 */}
        <div className="mt-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECB22E]" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">참고 · Slack 앱에서 포털 접속</h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Slack 앱 도움말 패널을 통해서도 지원 포털에 접속할 수 있습니다. 아래 <strong className="text-gray-900">A → B → C</strong> 순서로 진행하세요.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <CaptionedShot step="A" caption={<>도움말 패널 하단 <Chip>내 사례</Chip> 클릭</>} img={{ src: '/support-case/ref-a-mycase.png', alt: 'Slack 도움말 패널 - 내 사례', width: 628, height: 510 }} />
            <CaptionedShot step="B" caption={<>로그인 승인 → <Chip>승인하고 계속</Chip></>} img={{ src: '/support-case/ref-b-approve.png', alt: 'Salesforce 로그인 승인', width: 584, height: 646 }} />
            <CaptionedShot step="C" caption={<>포털 화면에서 내 사례·<Chip>사례 생성</Chip> 이용</>} img={{ src: '/support-case/ref-c-portal.png', alt: '포털 홈 화면', width: 1678, height: 792 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-2 mt-14 mb-6">
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
      <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">{text}</h2>
    </div>
  );
}

function StepRow({ n, title, children, img }: { n: string; title: string; children: React.ReactNode; img: Img }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{n}</span>
          <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        </div>
        <div className="text-sm text-gray-600 leading-relaxed ml-10">{children}</div>
      </div>
      <Figure img={img} />
    </div>
  );
}

function Figure({ img }: { img: Img }) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
      <ZoomableImage src={asset(img.src)} alt={img.alt} width={img.width} height={img.height} className="w-full h-auto" />
    </div>
  );
}

function CaptionedShot({ step, caption, img }: { step: string; caption: React.ReactNode; img: Img }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-5 h-5 rounded-full bg-[#635BFF] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">{step}</span>
        <span className="text-xs text-gray-600 leading-snug">{caption}</span>
      </div>
      <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
        <ZoomableImage src={asset(img.src)} alt={img.alt} width={img.width} height={img.height} className="w-full h-auto" />
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#635BFF]/10 text-[#635BFF] text-sm font-semibold mx-0.5">{children}</span>
  );
}

