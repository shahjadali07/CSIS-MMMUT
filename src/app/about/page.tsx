import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About | CSIS — Computer Science & Innovation Society",
  description: "Learn about the mission, vision, and objectives of the Computer Science & Innovation Society at Prayukti VLab.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="h-20" />
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
