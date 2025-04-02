import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/core/Header";
import Sidebar from "./_components/core/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teacher's Center",
  description: "A platform for teachers to manage their classes and students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased`}>
        <Header />
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-83px)]">
          <Sidebar />
          <section className="transition-all h-auto w-[calc(100vw-180px)] translate-x-[180px] bg-gray-100 p-6">
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
