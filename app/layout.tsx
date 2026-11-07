import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import ChatbotWidget from '@/components/ChatbotWidget';

export const metadata: Metadata = {
  title: 'Slack Enterprise+ Launch Guide',
  description: 'Slack Enterprise+ 런치 가이드',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
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
