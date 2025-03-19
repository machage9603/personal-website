import { Montserrat } from "next/font/google";
import "./ui/globals.css";
import { metadata } from "./metadata";
import ClientLayout from "./client-layout";

// Replace Inter with Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// Export the metadata
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteDescription = "Mike Machage's portfolio containing his projects, blog posts, resume and contact information.";
  const siteUrl = "https://mikemachage.tech";

  return (
    <html lang="en" suppressHydrationWarning>
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
            }),
          }}
        />
      </head>
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}