"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteName = "Mike Machage";
  const siteDescription = "Mike Machage's portfolio containing his projects, blog posts, resume and contact information.";
  const siteUrl = "https://mikemachage.tech";

  return (
    <>
      <head>
        {/* Structured Data for improved SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <NextUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main className="flex-grow flex flex-col items-center justify-center pt-16 min-h-screen transition-colors duration-300">
            {children}
            <SpeedInsights />
            <Analytics />
          </main>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}