import type { Metadata } from "next";
import Pretendard from "@/styles/local.font";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Protimal",
  description: "맞춤형 프로틴 제공 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${Pretendard.className} antialiased`}>{children}</body>
    </html>
  );
}
