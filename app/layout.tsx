import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import ChatbotWidget from '@/components/ChatbotWidget';

export const metadata: Metadata = {
  title: 'Slack Enterprise+ Launch Guide',
  description: 'Slack Enterprise+ 론치 가이드',
};

// Cloudflare Web Analytics (쿠키·저장 없음, 개인 식별 안 함).
// 토큰은 Cloudflare 대시보드에서 발급받아 .env.local 또는 배포 환경변수에
//   NEXT_PUBLIC_CF_BEACON_TOKEN=발급받은_토큰
// 으로 넣으세요. 토큰이 없으면 beacon은 렌더되지 않습니다(사이트 정상 동작).
const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

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
