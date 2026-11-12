import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import ChatbotWidget from '@/components/ChatbotWidget';

export const metadata: Metadata = {
  title: 'Slack Enterprise+ Launch Guide',
  description: 'Slack Enterprise+ 론치 가이드',
};

// Cloudflare Web Analytics (쿠키·저장 없음, 개인 식별 안 함).
// 공개 beacon 토큰이라 코드에 직접 넣어도 보안 문제 없음(페이지 HTML에 어차피 노출됨).
// 토큰을 바꾸려면 아래 값을 교체하거나 NEXT_PUBLIC_CF_BEACON_TOKEN 환경변수로 덮어쓰면 됩니다.
const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN || '2727e91b40d84c4b8e581a93ec3bd2b0';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {CF_BEACON_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
          />
        )}
      </head>
      <body>
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
        <ChatbotWidget />
      </body>
    </html>
  );
}
