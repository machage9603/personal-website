// server component layout
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { metadata } from "./metadata";
import ClientLayout from "./client-layout";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

// Export the metadata
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}