import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "MĂNG ĐEN LALA TRAIL",
  description: "Giải chạy MĂNG ĐEN LALA TRAIL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
