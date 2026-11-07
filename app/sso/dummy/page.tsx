import Link from 'next/link';
import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';

export default function DummySSOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="px-12 pt-14 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3C2A6B 60%, #635BFF 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 85% 15%, rgba(99,91,255,0.5) 0%, transparent 55%)' }}
        />
        <div className="relative max-w-4xl">
          <Link href="/sso" className="text-sm text-white/60 hover:text-white mb-5 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            SSO 설정으로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight mt-1">Dummy SSO 설정</h1>
          <p className="text-white/70 leading-relaxed">
            SSO를 사용하지 않는 경우, Dummy SSO(Simple IdP)를 연결하여 로그인 환경을 구성합니다.
          </p>
        </div>
      </div>

      <div className="px-12 py-12 max-w-4xl">
        {/* Section 1: 앱 접속 */}
        <Section num={1} title="Simple IdP 앱 접속">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div className="text-gray-700 leading-relaxed pt-0.5">
                  반드시{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-sm font-bold border border-amber-300 mx-0.5 align-middle">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    시크릿 모드
                  </span>
                  {' '}에서 아래 링크에 접속합니다.
                </div>
              </div>
              <div className="ml-9">
                <a
                  href="https://slack-test-idp-for-sandboxes.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#635BFF] bg-[#635BFF]/8 border border-[#635BFF]/20 rounded-lg px-3 py-2 hover:bg-[#635BFF]/12 transition-colors break-all"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  https://slack-test-idp-for-sandboxes.herokuapp.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <p className="text-gray-700 leading-relaxed pt-0.5"><Chip>Add to Slack</Chip> 버튼을 클릭합니다.</p>
              </div>
              <div className="ml-9">
                <InfoCallout>
                  개별 워크스페이스가 아닌 <strong>Enterprise+ 조직(Org)</strong>에 설치해야 합니다.
                </InfoCallout>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              <ZoomableImage src={asset('/dummy-sso/add-to-slack.webp')} alt="Simple IdP - Add to Slack 버튼" width={2000} height={600} className="w-full h-auto" />
            </div>
          </div>
        </Section>

        {/* Section 2: 앱 허용 */}
        <Section num={2} title="앱 액세스 허용">
          <StepRow
            n="1"
            text={
              <>
                <p><strong className="text-gray-900">Enterprise+ Org</strong>를 선택한 후 <Chip>허용</Chip> 버튼을 클릭합니다.</p>
                <Callout className="mt-4">
                  조직이 보이지 않는 경우, 이전 워크스페이스 로그인 캐시가 남아 있을 수 있으니 <strong>캐시를 초기화</strong>해 주세요.
                </Callout>
              </>
            }
            img={{ src: '/dummy-sso/allow-app.webp', alt: 'Simple IdP 앱 액세스 허용 - 조직 대상 선택', width: 2000, height: 1023 }}
          />
        </Section>

        {/* Section 3: SSO 구성 */}
        <Section num={3} title="SSO 구성 (Copy & Paste)">
          <StepRow
            n="1"
            text={
              <>
                <p>
                  조직 관리 화면에서 <Chip>보안</Chip> → <Chip>SSO 설정</Chip> → <Chip>SSO 구성</Chip>을 클릭합니다.
                  Web Page의 값을 참조하여 아래 항목을 입력한 후 <Chip>테스트 구성</Chip> → <Chip>Sign In</Chip> → <Chip>변경 사항 적용</Chip> 버튼을 클릭합니다.
                </p>
                <ul className="mt-4 space-y-2 border-l-2 border-[#635BFF]/30 pl-4">
                  <li className="text-sm text-gray-600"><strong className="text-gray-900">SSO Name</strong> : 자유롭게 입력 가능</li>
                  <li className="text-sm text-gray-600"><strong className="text-gray-900">SAML 2.0 Endpoint URL</strong> : 화면 참조</li>
                  <li className="text-sm text-gray-600"><strong className="text-gray-900">Identity Provider Issuer URL</strong> : 화면 참조</li>
                  <li className="text-sm text-gray-600"><strong className="text-gray-900">Public (X.509) Certificate</strong> : 화면 참조</li>
                  <li className="text-sm text-gray-600"><strong className="text-gray-900">Service Provider Issuer URL</strong> : <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">https://slack.com</code> 입력</li>
                </ul>
              </>
            }
            img={{ src: '/dummy-sso/sso-config.png', alt: 'SSO 구성 Copy & Paste 화면', width: 781, height: 473 }}
          />
          <InfoCallout>
            <strong>SSO 인증 예외처리</strong>는 사용자 로그인 활성화에 필수입니다. 사용자 SSO 인증 예외처리를 해주세요!
            마이그레이션을 진행할 경우, 사용자 데이터 이전 완료 후 예외처리를 진행해주세요.
          </InfoCallout>
          <StepRow
            n="참고"
            text={<>우측과 같은 화면이 나온다면 <Chip>Setup Instructions</Chip> 링크를 클릭해주세요.</>}
            img={{ src: '/dummy-sso/setup-instructions.webp', alt: 'Setup Instructions 링크 위치', width: 2000, height: 813 }}
          />
        </Section>

        {/* Section 4: 미사용 버튼명 변경 */}
        <Section num={4} title="미사용 버튼명 변경" last>
          <p className="text-gray-600 leading-relaxed">
            Dummy SSO는 초록 버튼을 사용하지 않으므로, 혼란 방지를 위해 버튼명 변경을 권장합니다.
          </p>
          <LinkCallout>
            조직 관리 화면 URL — <code className="text-xs bg-white/60 px-1.5 py-0.5 rounded">https://[Ent+조직도메인].enterprise.slack.com/manage</code>
            <br />
            워크스페이스 관리 화면과 헷갈리지 않도록 주의하세요!
          </LinkCallout>
          <StepRow
            n="1"
            text={
              <>
                <p>조직 관리 화면에서 다음 순서로 이동합니다.</p>
                <ul className="mt-3 space-y-1.5 border-l-2 border-[#635BFF]/30 pl-4 text-sm text-gray-600">
                  <li><Chip>보안</Chip></li>
                  <li><Chip>SSO 설정</Chip></li>
                  <li><Chip>SSO 이름 및 로그인 버튼</Chip> 우측 <Chip>편집</Chip> 클릭</li>
                  <li>SSO 이름에 <strong className="text-gray-900">&ldquo;절대 누르지 마시고 아래&rdquo;</strong> 기입 후 저장</li>
                </ul>
              </>
            }
            img={{ src: '/dummy-sso/rename-modal.webp', alt: 'SSO 이름 및 로그인 버튼 편집 모달', width: 2000, height: 1335 }}
          />
          <StepRow
            n="2"
            text={<>로그인 화면에서 버튼명이 변경된 것을 확인할 수 있습니다. SSO를 사용하지 않는 사용자는 <strong className="text-gray-900">이메일 및 비밀번호</strong>로 로그인합니다.</>}
            img={{ src: '/dummy-sso/login-preview.png', alt: '변경된 로그인 버튼 미리보기', width: 1140, height: 528 }}
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
      <div className="space-y-4">{children}</div>
    </section>
  );
}

type Img = { src: string; alt: string; width: number; height: number };

function StepRow({ n, text, img }: { n: string; text: React.ReactNode; img: Img }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="flex items-start gap-3">
        <span className={`rounded-full bg-gray-900 text-white font-bold flex items-center justify-center flex-shrink-0 mt-0.5 ${n.length > 1 ? 'px-2 h-6 text-[11px]' : 'w-6 h-6 text-xs'}`}>
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

function LinkCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
      <span className="text-[#635BFF] flex-shrink-0 mt-0.5">🔗</span>
      <p className="text-sm text-indigo-900 leading-relaxed">{children}</p>
    </div>
  );
}
