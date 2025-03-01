// metadata.ts
import { Metadata } from "next";

const siteName = "Mike Machage";
const siteDescription = "Mike Machage's portfolio containing his projects, blog posts, resume and contact information.";
const siteUrl = "https://mikemachage.tech";

export const metadata: Metadata = {
    title: `${siteName} | Software Engineer`,
    description: siteDescription,
    authors: [{ name: "Mike Machage" }],
    keywords: ["Mike Machage", "Software Engineer", "Web Developer", "UI/UX Designer", "Full Stack developer", "Javascript", "Next.js", "TypeScript", "Portfolio", "Kenya Developer", "Kenya Software Engineer"],
    openGraph: {
        title: siteName,
        description: siteDescription,
        type: "website",
        url: siteUrl,
        siteName: siteName,
        images: [
            {
                url: `${siteUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Mike Machage | Software Engineer"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        site: "@SerMachage",
        title: siteName,
        description: siteDescription,
        images: [`${siteUrl}/twitter-image.jpg`]
    },
    alternates: {
        canonical: siteUrl,
    },
    metadataBase: new URL(siteUrl),
    robots: {
        index: true,
        follow: true
    },
    manifest: "/site.webmanifest",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
        ],
        apple: [
            { url: "/apple-touch-icon.png" }
        ]
    },
    other: {
        "msapplication-TileColor": "#2b5797",
        "theme-color": "#ffffff"
    }
};