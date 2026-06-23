import type { Metadata } from "next";
import "./globals.css";
import SplashLoader from "@/components/SplashLoader";

export const metadata: Metadata = {
  title: {
    default: "CSIS — Computer Science & Innovation Society | Prayukti VLab",
    template: "%s | CSIS · Prayukti VLab",
  },
  description:
    "CSIS is the innovation engine of Prayukti VLab — a world-class university research society where students Learn, Build, Collaborate, Research, Innovate, and Incubate.",
  keywords: ["CSIS", "Prayukti-VLab", "Virtual Lab", "Technical Society", "Innovation", "Research", "Computer Science"],
  icons: {
    icon: '/images/csis-logo.png',
  },
  openGraph: {
    siteName: "CSIS — Prayukti VLab",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SplashLoader>
          {children}
        </SplashLoader>
      </body>
    </html>
  );
}
