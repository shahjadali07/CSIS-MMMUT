import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SplashLoader from "@/components/SplashLoader";
import ScrollToTop from "@/components/ScrollToTop";
import InteractiveNotificationToasts from "@/components/InteractiveNotificationToasts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CSIS - Computer Science & Innovation Society | Prayukti VLab",
    template: "%s | CSIS · Prayukti VLab",
  },
  description:
    "CSIS is the innovation engine of Prayukti VLab - a world-class university research society where students Learn, Build, Collaborate, Research, Innovate, and Incubate.",
  keywords: ["CSIS", "Prayukti-VLab", "Virtual Lab", "Technical Society", "Innovation", "Research", "Computer Science"],
  icons: {
    icon: '/images/csis-logo.png',
  },
  openGraph: {
    siteName: "CSIS - Prayukti VLab",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <SplashLoader>
          {children}
        </SplashLoader>
        <InteractiveNotificationToasts />
        <ScrollToTop />
      </body>
    </html>
  );
}
