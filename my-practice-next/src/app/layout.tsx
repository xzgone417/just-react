import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css";
import "@/assets/fonts/ionicons-2.0.1/css/ionicons.min.css";
import "@/styles/common.scss";
import "@/styles/section.scss";
import "@/styles/dialog.scss";
import "@/styles/media-style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOFISH",
  description: "SOFISH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
