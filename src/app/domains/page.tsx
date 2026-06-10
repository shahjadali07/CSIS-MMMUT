import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import DomainsSection from "@/components/DomainsSection";

export const metadata = {
  title: "Domains | CSIS — Computer Science & Innovation Society",
  description: "Explore the core focus areas and domain ecosystem of CSIS, from AI/ML to Web Development.",
};

export default function DomainsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="h-20" />
      <DomainsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
