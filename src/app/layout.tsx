import type { Metadata } from "next";
import Pretendard from "@/styles/local.font";
import "@/styles/globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Protimal | 맞춤형 프로틴 제공 서비스",
  description: "맞춤형 단백질, 한 잔으로 완성되는 건강한 선택",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${Pretendard.className} min-h-screen antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
