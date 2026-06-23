import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import DomainsSection from "@/components/DomainsSection";
import LearningRoadmaps from "@/components/LearningRoadmaps";
import InnovationPipeline from "@/components/InnovationPipeline";
import ActiveProjects from "@/components/ActiveProjects";

import MentorNetwork from "@/components/MentorNetwork";
import HallOfFame from "@/components/HallOfFame";
import Testimonials from "@/components/Testimonials";
import StayConnected from "@/components/StayConnected";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <DomainsSection />
      <LearningRoadmaps />
      <InnovationPipeline />
      <ActiveProjects />

      <MentorNetwork />
      <HallOfFame />
      <Testimonials />
      <StayConnected />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
