import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "Team | CSIS — Computer Science & Innovation Society",
  description: "Meet the brilliant minds and visionary leaders behind the Computer Science & Innovation Society.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="h-20" />
      <TeamSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
