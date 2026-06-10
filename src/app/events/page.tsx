import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import EventsTimeline from "@/components/EventsTimeline";

export const metadata = {
  title: "Events | CSIS — Computer Science & Innovation Society",
  description: "Join upcoming technical events, code sprints, and hackathons inside the Prayukti VLab ecosystem.",
};

export default function EventsPage() {
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
