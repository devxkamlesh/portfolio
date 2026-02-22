import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { content } from "@/lib/portfolio-data";
import "@/app/globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.meta_description,
  openGraph: {
    title: content.seo.title,
    description: content.seo.meta_description,
    url: "https://kiro-powers.vercel.app",
    siteName: "Kamlesh Choudhary Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.short_bio
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
