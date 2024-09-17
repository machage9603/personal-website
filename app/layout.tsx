"use client";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-P78HP4L4W7";
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-P78HP4L4W7');
    `;
    document.body.appendChild(script2);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#F4EDE4] dark:bg-[#2D3748] text-[#2B2B2B] dark:text-white transition-colors duration-300`}
      >
        <main className="flex-grow flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
