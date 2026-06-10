import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import EventsTimeline from "@/components/EventsTimeline";

export const metadata = {
  title: "Events Timeline | CSIS — Computer Science & Innovation Society",
  description: "Keep track of upcoming student sprints, hackathons, and guest research lectures at CSIS.",
};

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="h-20" />
      <EventsTimeline />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
