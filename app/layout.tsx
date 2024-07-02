import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import connectToDatabase from "@/db/mongodb.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const conn = await connectToDatabase();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
