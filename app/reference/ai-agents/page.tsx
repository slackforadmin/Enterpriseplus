import Link from 'next/link';

type Feature = { name: string; desc: string; tag?: string };

const aiFeatures: { group: string; items: Feature[] }[] = [
  {
    group: '따라잡기 (Catch up)',
    items: [
      { name: '채널 · 스레드 요약', desc: '채널/DM과 긴 스레드를 데스크톱·모바일에서 한 번에 요약합니다.' },
      { name: '파일 요약', desc: 'PDF·Word·PowerPoint·Excel 파일을 자동으로 요약합니다.' },
      { name: '한눈에 정리 (Recap)', desc: '놓친 활동을 사이드바에서 한눈에 모아 확인합니다.' },
      { name: '허들 노트', desc: '허들 대화를 AI가 받아쓰고 요약 노트를 생성합니다.' },
    ],
  },
  {
    group: '찾기 & 이해하기 (Search & Understand)',
    items: [
      { name: 'Slack AI 검색', desc: '자연어로 질문하면 대화에서 답을 찾아 요약해 줍니다. 답변 공유·재생성 가능.' },
      { name: '엔터프라이즈 검색', desc: '외부 앱(Asana·Box·Confluence·Jira·Google Drive·Salesforce 등)까지 연결해 검색합니다.' },
      { name: '메시지 설명 (Explain)', desc: '전문 용어·약어가 많은 메시지의 맥락을 AI가 풀어 설명합니다.' },
      { name: '메시지 번역', desc: '메시지를 지원 언어로 즉시 번역합니다.' },
    ],
  },
  {
    group: '생성 & 자동화 (Create & Automate)',
    items: [
      { name: '캔버스 콘텐츠 생성', desc: '프롬프트로 캔버스를 생성하고, 기존 캔버스를 AI로 편집·개선합니다.' },
      { name: '워크플로 자동화', desc: 'Workflow Builder에서 AI 응답 생성·채널 요약 등 AI 스텝을 워크플로에 추가합니다.' },
    ],
  },
];

const slackbotFeatures: { group: string; items: Feature[] }[] = [
  {
    group: '시작하기 & 인터페이스',
    items: [
      { name: '개인 맞춤 AI 에이전트', desc: 'Google·Outlook·Salesforce 등과 연동되는 개인 AI 어시스턴트입니다.' },
      { name: '채팅 시작하기', desc: 'Directory·DM·Quick Switcher로 Slackbot을 찾아 대화를 시작합니다.' },
      { name: '음성 받아쓰기', desc: '언어 자동 감지(영어 최적화)로 음성을 텍스트로 변환합니다.' },
      { name: '프롬프트 공유 · 대화 히스토리', desc: '유용한 프롬프트를 공유하고 지난 대화를 다시 확인합니다.' },
      { name: 'Slackbot 메모리', desc: '선호사항·주제 맥락을 기억합니다. (Business+ 주당 15개 제한)', tag: 'Business+' },
    ],
  },
  {
    group: '핵심 기능',
    items: [
      { name: '인텔리전트 검색 & 발견', desc: '메시지·파일·사람·연결 앱 검색, 웹 검색, 외부 링크 읽기를 지원합니다.' },
      { name: '스마트 분석 & 설명', desc: 'PDF·채널·스프레드시트·프레젠테이션을 분석하고 메시지를 설명합니다.' },
      { name: '캘린더 & 스케줄링', desc: '가용성 확인·회의 예약·시간 슬롯 찾기를 도와줍니다.' },
      { name: '콘텐츠 · 이미지 · 슬라이드 생성', desc: '미팅 노트·문서·데이터 시각화, AI 이미지, PowerPoint 슬라이드를 생성합니다.' },
      { name: '캔버스 생성 & 업데이트', desc: '프로젝트 브리프·회고 캔버스를 즉시 생성하고 되돌리기도 가능합니다.' },
      { name: 'Surface (라이브 객체)', desc: '실시간 데이터에 연결된 라이브 보고서·대시보드·KPI 카드를 채널 탭에 고정합니다.' },
    ],
  },
  {
    group: '자동화 & 액션',
    items: [
      { name: 'Slackbot 스킬', desc: '재사용 가능한 저장된 지침으로 작업을 자동화하고 스킬 라이브러리로 공유합니다.' },
      { name: '예정 작업 (Scheduled)', desc: '작업을 예약·관리하고 템플릿으로 자동화를 생성합니다.' },
      { name: '네이티브 액션', desc: '메시지·채널·상태 등 Slack 기본 작업을 수행합니다.' },
      { name: 'Salesforce 통합', desc: 'Slack을 벗어나지 않고 레코드 생성·업데이트, 파일 업로드, 리포트 읽기를 합니다.', tag: 'Salesforce' },
    ],
  },
];

const devItems: Feature[] = [
  { name: 'RTS (Real Time Search)', desc: '실시간 검색 API로 외부 데이터를 연결합니다.' },
  { name: 'MCP (Model Context Protocol)', desc: 'Slackbot MCP Client로 MCP 앱·에이전트를 연결합니다. (Jira 등)' },
  { name: 'Agent SDK', desc: '커스텀 에이전트를 개발합니다.' },
  { name: 'Custom Connectors', desc: '엔터프라이즈 검색용 커스텀 커넥터를 구축합니다.' },
];

const resources = [
  { label: 'Slack 제품 업데이트 (매월)', href: 'https://slack.com/intl/en-gb/whats-new' },
  { label: 'Slack 도움말 센터', href: 'https://slack.com/intl/ko-kr/help' },
];

export default function AiAgentsReferencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-6 md:px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }} />
        <div className="relative max-w-4xl">
          <Link href="/" className="text-sm text-white/60 hover:text-white mb-5 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            런치 가이드로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight mt-1">Slack AI &amp; Agents</h1>
          <p className="text-white/70 leading-relaxed">
            Slack AI와 Agents의 기능·설정·활용법을 정리한 가이드입니다.<br />
            생성형 AI가 Slack 사용 경험에 직접 내장되어 일상 업무를 돕습니다.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-4xl">
        <InfoCallout>
          기술 이슈·버그 리포트는 <strong>feedback@slack.com</strong> 또는 <code className="text-xs bg-sky-100 px-1.5 py-0.5 rounded">/feedback</code>으로 문의하세요.
        </InfoCallout>

        {/* Slack AI 기능 */}
        <SectionLabel color="#635BFF" text="Slack AI 기능" />
        {aiFeatures.map((g) => (
          <FeatureGroup key={g.group} title={g.group} items={g.items} />
        ))}

        {/* Slackbot AI */}
        <SectionLabel color="#4A154B" text="Slackbot AI 어시스턴트" />
        {slackbotFeatures.map((g) => (
          <FeatureGroup key={g.group} title={g.group} items={g.items} />
        ))}

        {/* 프롬프트 */}
        <SectionLabel color="#ECB22E" text="프롬프트 마스터링" />
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          {[
            { step: '1', title: '장면 설정', desc: '역할·목표·맥락을 먼저 알려줍니다.' },
            { step: '2', title: '요청 쌓기', desc: '원하는 작업을 구체적으로 더합니다.' },
            { step: '3', title: '다듬기', desc: '결과를 보고 반복 요청으로 개선합니다.' },
          ].map((s) => (
            <div key={s.step} className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white text-sm font-bold flex items-center justify-center mb-3">{s.step}</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{s.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <Callout>
          프롬프트는 구체적으로 명시하고, 대상·톤을 지정하며, 맥락을 참조하고, 여러 작업을 결합하거나 반복 요청으로 다듬으면 더 좋은 결과를 얻습니다.
        </Callout>

        {/* 개발자 */}
        <SectionLabel color="#0EA5E9" text="개발자 · 플랫폼 & APIs" />
        <FeatureGroup title="" items={devItems} />

        {/* 프라이버시 */}
        <div className="mt-8 flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <span className="text-emerald-500 flex-shrink-0 mt-0.5">🔒</span>
          <p className="text-sm text-emerald-800 leading-relaxed">
            <strong>프라이버시 &amp; 보안</strong> — Slack AI는 기존 권한 범위 내에서만 작동하며, 조직의 데이터 보안 가드레일을 준수합니다.
          </p>
        </div>

        {/* 리소스 */}
        <div className="mt-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">참고 리소스</h2>
          <div className="space-y-2">
            {resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-[#635BFF] hover:underline"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {r.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-2 mt-12 mb-6 first:mt-2">
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
      <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">{text}</h2>
    </div>
  );
}

function FeatureGroup({ title, items }: { title: string; items: Feature[] }) {
  return (
    <div className="mb-6">
      {title && <h3 className="font-semibold text-gray-900 text-sm mb-3">{title}</h3>}
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((f) => (
          <div key={f.name} className="rounded-xl border border-gray-200 bg-white p-4 hover:shadow-[0_6px_20px_rgba(10,37,64,0.06)] transition-shadow">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF] flex-shrink-0" />
              <h4 className="font-semibold text-gray-900 text-sm">{f.name}</h4>
              {f.tag && <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">{f.tag}</span>}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed pl-3.5">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
      <span className="text-amber-500 flex-shrink-0 mt-0.5">💡</span>
      <p className="text-sm text-amber-800 leading-relaxed">{children}</p>
    </div>
  );
}

function InfoCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-xl p-4 mb-8">
      <span className="text-sky-500 flex-shrink-0 mt-0.5">💬</span>
      <p className="text-sm text-sky-800 leading-relaxed">{children}</p>
    </div>
  );
}
