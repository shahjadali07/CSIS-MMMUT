import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsOfSupport from "@/components/PillarsOfSupport";
import StatsSection from "@/components/StatsSection";
import DomainsSection from "@/components/DomainsSection";
import LearningRoadmaps from "@/components/LearningRoadmaps";
import InnovationPipeline from "@/components/InnovationPipeline";
import ActiveProjects from "@/components/ActiveProjects";
import ResearchRepository from "@/components/ResearchRepository";
import EventsTimeline from "@/components/EventsTimeline";
import MentorNetwork from "@/components/MentorNetwork";
import TeamSection from "@/components/TeamSection";
import HallOfFame from "@/components/HallOfFame";
import CommunityGallery from "@/components/CommunityGallery";
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
      <PillarsOfSupport />
      <StatsSection />
      <DomainsSection />
      <LearningRoadmaps />
      <InnovationPipeline />
      <ActiveProjects />
      <ResearchRepository />
      <EventsTimeline />
      <MentorNetwork />
      <TeamSection />
      <HallOfFame />
      <CommunityGallery />
      <Testimonials />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
