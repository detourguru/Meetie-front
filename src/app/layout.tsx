import type { Metadata } from "next";

import localFont from "next/font/local";

import "@/styles/globals.css";

import { ClientProvider } from "@/components/providers/ClientProvider";

const Pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Meetie",
  description: "만날수록 견고해지는 IT 스터디",
  icons: {
    icon: "/favicon.icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="lmTeKHDH5ONA3g5p0wObanS64S-FSq5cmGJ0JIuLfuU"
        />
      </head>
      <body className={`${Pretendard.className} w-screen flex justify-center bg-black`}>
        <ClientProvider>
          <div className="max-w-[375px] w-full h-dvh overflow-y-auto overflow-x-hidden hidden-scrollbar bg-white">
            {children}
          </div>
        </ClientProvider>
        <div id="modal"></div>
      </body>
    </html>
  );
}
