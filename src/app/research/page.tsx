import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ResearchComingSoon from "./ResearchComingSoon";

export const metadata: Metadata = {
  title: "Research & Publications | CSIS MMMUT",
  description: "Upcoming research papers, technical publications, and academic contributions from the CSIS community.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col">
      <Navbar />
      <div className="flex-1 mt-20">
        <ResearchComingSoon />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
