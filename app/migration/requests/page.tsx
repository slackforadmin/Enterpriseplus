'use client';

import Link from 'next/link';
import { useState } from 'react';
import { asset } from '@/lib/asset';
import ZoomableImage from '@/components/ZoomableImage';
import HeroBadge from '@/components/HeroBadge';

export default function MigrationRequestsPage() {
  const [selected, setSelected] = useState<'dummy' | 'sso'>('dummy');
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
          <HeroBadge>런치 3단계</HeroBadge>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">마이그레이션 전 / 후 진행 요청 사항</h1>
          <p className="text-white/70 leading-relaxed">
            마이그레이션을 진행하는 경우, 전·후로 관리자와 사용자가 확인·진행해야 할 요청 사항입니다.<br />
            마이그레이션 전에 사내 공지를 통해 안내해주세요.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-4xl">
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-3">사용하는 로그인 방식을 먼저 선택하세요. 선택한 경우의 요청 사항만 표시됩니다.</p>
          <div className="grid grid-cols-2 gap-1 max-w-md rounded-xl border border-gray-200 bg-white p-1">
            <ToggleBtn active={selected === 'dummy'} onClick={() => setSelected('dummy')} color="#635BFF">Dummy SSO를 설정한 경우</ToggleBtn>
            <ToggleBtn active={selected === 'sso'} onClick={() => setSelected('sso')} color="#0EA5E9">SSO를 설정한 경우</ToggleBtn>
          </div>
        </div>

        {selected === 'dummy' && (
          <>
        {/* ===== 분기 A: Dummy SSO ===== */}
        <BranchHeader badge="Dummy SSO" title="Dummy SSO를 설정한 경우" />

        <RoleBlock role="user" title="사용자 마이그레이션 전 / 후 확인 사항">
          <NoticeBanner>아래 사용자 진행사항은 <strong>마이그레이션 전에 사내 공지를 통해</strong> 사용자에게 전달해주세요.</NoticeBanner>
          <PhaseTag label="마이그레이션 전" />
          <StepGroup title="마이그레이션 전 패스워드 추가">
            <Step n="1">데스크톱에서 프로필 사진을 클릭합니다.</Step>
            <Step n="2"><Chip>프로필</Chip>을 선택합니다.</Step>
            <Step n="3"><Chip>···</Chip> 세 점 아이콘을 클릭한 후 <Chip>계정 설정</Chip>을 선택합니다.</Step>
            <Step n="4"><Chip>비밀번호</Chip> 옆의 <Chip>확장</Chip>을 클릭합니다.</Step>
            <Step n="5"><Chip>이메일로 비밀번호 재설정</Chip>을 클릭한 뒤, 이메일에서 비밀번호 추가 링크를 확인합니다.</Step>
          </StepGroup>

          <PhaseTag label="마이그레이션 후" className="mt-6" />
          <Checklist>
            <Check n="1" title="캐시 초기화" required>
              <strong className="text-rose-700">마이그레이션 후 반드시 진행해야 합니다.</strong> 초기화 방법은 좌측 사이드바의 <strong className="text-gray-900">캐시 초기화 방법</strong>을 참고하세요.
            </Check>
            <Check n="2" title="비밀번호 리셋">
              마이그레이션 전에 비밀번호를 추가하지 않은 경우, 새 Ent+ URL(<code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">XXXX.enterprise.slack.com</code>)로 접속한 뒤 아래 순서로 진행합니다.
              <ul className="mt-2 space-y-1.5 border-l-2 border-[#635BFF]/30 pl-3 text-[13px]">
                <li><Chip>이메일 및 비밀번호 입력</Chip> 버튼 클릭 (상단 녹색 버튼은 누르지 않습니다)</li>
                <li><Chip>비밀번호를 잊어버림</Chip> 링크 클릭 후 재설정</li>
              </ul>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                <Figure src="/migration-requests/pw-reset-login.webp" alt="이메일 및 비밀번호 입력 선택" width={2000} height={1063} />
                <Figure src="/migration-requests/pw-reset-form.webp" alt="비밀번호를 잊어버림 링크" width={2000} height={1067} />
              </div>
            </Check>
            <Check n="3" title="로그인 가능 여부 확인" />
            <Check n="4" title="앱 재인증">
              기존에 Slack에서 사용하던 앱(예: 구글 캘린더, 아웃룩 등 개인 계정이 설정된 앱)이 있는 경우 재인증이 필요합니다.
            </Check>
          </Checklist>
        </RoleBlock>

        <RoleBlock role="admin" title="관리자 마이그레이션 후 확인 사항">
          <PhaseTag label="마이그레이션 후" />
          <AdminChecklist />
        </RoleBlock>

          </>
        )}

        {selected === 'sso' && (
          <>
        {/* ===== 분기 B: 실제 SSO ===== */}
        <BranchHeader badge="SSO" title="SSO를 설정한 경우" color="#0EA5E9" />

        <RoleBlock role="user" title="사용자 마이그레이션 후 확인 사항">
          <NoticeBanner>아래 사용자 진행사항은 <strong>마이그레이션 전에 사내 공지를 통해</strong> 사용자에게 전달해주세요.</NoticeBanner>
          <PhaseTag label="마이그레이션 후" color="#0EA5E9" />
          <Checklist>
            <Check n="1" title="캐시 초기화" color="#0EA5E9" required>
              <strong className="text-rose-700">마이그레이션 후 반드시 진행해야 합니다.</strong> 초기화 방법은 좌측 사이드바의 <strong className="text-gray-900">캐시 초기화 방법</strong>을 참고하세요.
            </Check>
            <Check n="2" title="로그인 가능 여부 확인" color="#0EA5E9" />
            <Check n="3" title="앱 재인증" color="#0EA5E9">
              기존에 Slack에서 사용하던 앱(예: 구글 캘린더, 아웃룩 등 개인 계정이 설정된 앱)이 있는 경우 재인증이 필요합니다.
            </Check>
          </Checklist>
        </RoleBlock>

        <RoleBlock role="admin" title="관리자 마이그레이션 후 확인 사항">
          <PhaseTag label="마이그레이션 후" />
          <AdminChecklist />
        </RoleBlock>
          </>
        )}

        {/* Next */}
        <div className="mt-12">
          <Link
            href="/org-setup"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#635BFF] text-white rounded-lg text-sm font-medium hover:bg-[#4F46E5] transition-colors"
          >
            다음: 조직 관리자 설정 →
          </Link>
        </div>
      </div>
    </div>
  );
}

function BranchHeader({ badge, title }: { badge: string; title: string; color?: string }) {
  return (
    <div className="mt-14 mb-6 first:mt-10 pb-3 border-b-2 border-gray-200">
      <div className="flex items-center gap-2.5">
        <span className="text-[11px] font-bold text-white bg-[#0A2540] px-2.5 py-1 rounded-full">{badge}</span>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
    </div>
  );
}

const ROLE = {
  user: { color: '#0EA5E9', label: '사용자', tint: 'bg-[#0EA5E9]/[0.06]' },
  admin: { color: '#635BFF', label: '관리자', tint: 'bg-[#635BFF]/[0.06]' },
};

function RoleBlock({ role, title, children }: { role: 'user' | 'admin'; title: string; children: React.ReactNode }) {
  const isAdmin = role === 'admin';
  const r = ROLE[role];
  return (
    <div className="mt-5 rounded-2xl border overflow-hidden" style={{ borderColor: `${r.color}40` }}>
      <div className={`flex items-center gap-2.5 px-5 py-3.5 border-b ${r.tint}`} style={{ borderColor: `${r.color}26` }}>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: r.color }}>
          {isAdmin ? (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 00-3-3.87" />
            </svg>
          )}
          {r.label}
        </span>
        <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
      </div>
      <div className="px-5 py-5 bg-white">{children}</div>
    </div>
  );
}

function PhaseTag({ label, color = '#635BFF', className = '' }: { label: string; color?: string; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 mb-3 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      <span className="text-xs font-bold" style={{ color }}>{label}</span>
    </div>
  );
}

function StepGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
      <h4 className="text-sm font-semibold text-gray-800 mb-3">{title}</h4>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
      <div className="text-[13px] text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function NoticeBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 mb-4">
      <svg className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
      <p className="text-[13px] text-sky-800 leading-relaxed">{children}</p>
    </div>
  );
}

function AdminChecklist() {
  return (
    <Checklist>
      <Check n="1" title="사용자 SSO 인증 예외처리">
        <strong className="text-gray-900">멤버 전원을 예외처리해야 로그인할 수 있습니다.</strong> 설정 방법은 좌측 사이드바의 <strong className="text-gray-900">사용자 SSO 예외처리</strong>를 참고하세요.
      </Check>
      <Check n="2" title="기본 상태 점검">
        아래 3가지 중 <strong className="text-gray-900">하나라도 해당되면 피드백팀에 접수</strong>해주세요.
        <ul className="mt-2 space-y-1.5 border-l-2 border-[#635BFF]/30 pl-3 text-[13px]">
          <li>마이그레이션 이전에 작성된 채널 내용 검색이 되지 않음</li>
          <li>비공개 채널의 채널 매니저임에도 사용자 초대 버튼이 나타나지 않음</li>
          <li>자신의 메시지 삭제가 되지 않는 현상 발생</li>
        </ul>
      </Check>
      <Check n="3" title="앱 & 웹훅 상태 점검">
        기본적으로는 연동되어 넘어오지만 간혹 연동이 끊길 수 있으니, 주요 앱·웹훅의 연동 상태를 확인해주세요.
      </Check>
      <Check n="4" title="사용자 로그인 확인">
        사용자가 로그인되면 큰 이슈는 없는 것으로 판단하셔도 됩니다.
      </Check>
      <Check n="5" title="워크플로 커넥터 사전 승인">
        마이그레이션 후 워크플로에 연결된 써드파티를 바로 사용할 수 있도록, <strong className="text-gray-900">마이그레이션 전에</strong> 조직 환경에서 커넥터를 사전 승인해 두 환경의 승인 상태를 동일하게 맞춰주세요.
        <ul className="mt-2 space-y-1.5 border-l-2 border-[#635BFF]/30 pl-3 text-[13px]">
          <li><strong className="text-gray-900">Ent+</strong> : 조직 관리 화면 <Chip>통합</Chip> → <Chip>워크플로 단계, 트리거, 통합</Chip></li>
          <li><strong className="text-gray-900">Biz+</strong> : 워크스페이스 관리 화면 <Chip>통합</Chip> → <Chip>워크플로 단계, 트리거, 통합</Chip></li>
        </ul>
        <div className="mt-3">
          <Figure src="/migration-requests/workflow-connector-approval.png" alt="워크플로 커넥터 사전 승인 - Ent+ 조직 관리 화면(승인됨)과 Biz+ 워크스페이스 관리 화면(승인 필요)의 상태 비교" width={1719} height={881} />
        </div>
      </Check>
    </Checklist>
  );
}

function Checklist({ children }: { children: React.ReactNode; color?: string }) {
  return <div className="space-y-3">{children}</div>;
}

function Check({ n, title, color = '#635BFF', required = false, children }: { n: string; title: string; color?: string; required?: boolean; children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: required ? '#E11D48' : color }}>{n}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 flex items-center gap-2 flex-wrap">
          {title}
          {required && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-rose-600 px-1.5 py-0.5 rounded">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              필수
            </span>
          )}
        </p>
        {children && <div className="mt-1 text-[13px] text-gray-600 leading-relaxed">{children}</div>}
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#635BFF]/10 text-[#635BFF] text-xs font-semibold mx-0.5">{children}</span>
  );
}

function Figure({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <ZoomableImage src={asset(src)} alt={alt} width={width} height={height} className="block w-full h-auto" />
    </div>
  );
}

function ToggleBtn({ active, onClick, color, children }: { active: boolean; onClick: () => void; color: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-center px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${active ? 'text-white' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
      style={active ? { background: color } : undefined}
    >
      {children}
    </button>
  );
}
