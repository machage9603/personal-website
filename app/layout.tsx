import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
