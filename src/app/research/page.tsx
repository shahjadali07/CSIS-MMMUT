import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ResearchRepository from "@/components/ResearchRepository";

export const metadata = {
  title: "Research | CSIS — Computer Science & Innovation Society",
  description: "View peer-reviewed scientific publications, LaTeX manuscripts, and research benchmarking reports authored by CSIS members.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="h-20" />
      <ResearchRepository />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
