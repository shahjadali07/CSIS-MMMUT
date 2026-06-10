import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ActiveProjects from "@/components/ActiveProjects";

export const metadata = {
  title: "Projects | CSIS — Computer Science & Innovation Society",
  description: "Browse the active projects, software repositories, and student startups built in the CSIS innovation ecosystem.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="h-20" />
      <ActiveProjects />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
