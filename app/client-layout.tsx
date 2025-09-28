// app/client-layout.tsx
"use client";

import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./components/theme-provider";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Dynamic Page Title</title>
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="flex-grow flex flex-col items-center justify-center pt-16 min-h-screen transition-colors duration-300">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </ThemeProvider>
    </>
  );
}