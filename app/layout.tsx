"use client";

import { Inter } from "next/font/google";
import "./ui/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Mike Machage | Software Engineer</title>
        <meta name="description" content="UI/UX Designer, Full Stack developer." />
        <meta name="keywords" content="software engineer, web development, web design, UI/UX, Javascript, Next.js, TypeScript" />
        <link rel="canonical" href="https://mikemachage.tech/" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mike Machage",
            "url": "https://mikemachage.tech/",
            "sameAs": [
              "https://www.linkedin.com/in/mike-machage",
              "https://x.com/SerMachage"
            ],
            "jobTitle": "Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "Darasani Hub"
            }
          })}
        </script>
      </Head>
      <body className={`${inter.className} min-h-screen flex flex-col transition-colors duration-300`}>
        <NextUIProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <main className="flex-grow flex flex-col items-center justify-center pt-16">
              {children}
              <SpeedInsights />
              <Analytics />
            </main>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}