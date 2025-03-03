// app/client-layout.tsx (or any page/component)
"use client";

import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <Head>
        <title>Dynamic Page Title</title>
      </Head>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <main className="flex-grow flex flex-col items-center justify-center pt-16 min-h-screen transition-colors duration-300">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}