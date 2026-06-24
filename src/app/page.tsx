import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import DomainsSection from "@/components/DomainsSection";
import InnovationPipeline from "@/components/InnovationPipeline";
import ActiveProjects from "@/components/ActiveProjects";

import MentorNetwork from "@/components/MentorNetwork";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MentorNetwork />
      <StatsSection />
      <DomainsSection />
      <InnovationPipeline />
      <ActiveProjects isHomePage={true} />

      <Testimonials />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
