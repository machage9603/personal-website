"use client";

import { Inter } from "next/font/google";
import "./ui/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteName = "Mike Machage";
  const siteDescription =
    "Mike Machage's portfolio containing his projects, blog posts, resume and contact information.";
  const siteUrl = "https://mikemachage.tech";

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Essential Meta Tags */}
        <title>{siteName} | Software Engineer</title>
        <meta name="description" content={siteDescription} />
        <meta name="author" content="Mike Machage" />
        <meta
          name="keywords"
          content="Mike Machage, Software Engineer, Web Developer, UI/UX Designer, Full Stack developer, Javascript, Next.js, TypeScript, Portfolio, Kenya Developer, Kenya Software Engineer"
        />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SerMachage" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />

        {/* Canonical and Favicon */}
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />

        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mike Machage",
            url: siteUrl,
            image: `${siteUrl}/profile.jpg`,
            description: siteDescription,
            sameAs: [
              "https://www.linkedin.com/in/mikemachage",
              "https://x.com/SerMachage",
              "https://github.com/machage9603",
            ],
            jobTitle: "Software Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Darasani Hub",
            },
            knowsAbout: [
              "Web Development",
              "Web Design",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "React",
              "Node.js",
              "MySQL",
              "MongoDB",
              "Express.js",
              "Full Stack Development",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Holberton School",
            },
          })}
        </script>
      </Head>
      <body
        className={`${inter.className} min-h-screen flex flex-col transition-colors duration-300`}
      >
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
