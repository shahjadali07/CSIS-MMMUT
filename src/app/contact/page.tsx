"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const CustomLinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const contactCards = [
  {
    title: "Email",
    subtitle: "mmmut.csis@gmail.com",
    buttonText: "Copy",
    href: "mailto:mmmut.csis@gmail.com",
    icon: Mail,
    color: "text-red-300",
    glow: "hover:shadow-[0_0_20px_rgba(248,113,113,0.2)] hover:border-red-400/50",
    btnColor: "bg-red-400/10 text-red-400 group-hover:bg-red-400 group-hover:text-red-950",
  },
  {
    title: "WhatsApp",
    subtitle: "CSIS Community",
    buttonText: "Join",
    href: "https://whatsapp.com/channel/0029VbCJcvaKLaHo4qbZHG1Y",
    icon: WhatsappIcon,
    color: "text-green-400",
    glow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:border-green-400/50",
    btnColor: "bg-green-400/10 text-green-400 group-hover:bg-green-400 group-hover:text-green-950",
  },
  {
    title: "Instagram",
    subtitle: "@csis_mmmut",
    buttonText: "Follow",
    href: "https://www.instagram.com/csis_mmmut?igsh=M3EzZG83cW82dzZm",
    icon: InstagramIcon,
    color: "text-pink-500",
    glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:border-pink-500/50",
    btnColor: "bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white",
  },
  {
    title: "LinkedIn",
    subtitle: "CSIS (MMMUT)",
    buttonText: "Visit",
    href: "https://www.linkedin.com/company/csis-mmmut",
    icon: CustomLinkedinIcon,
    color: "text-blue-500",
    glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/50",
    btnColor: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    title: "GitHub",
    subtitle: "csis-mmmut",
    buttonText: "Code",
    href: "#",
    icon: GithubIcon,
    color: "text-gray-300",
    glow: "hover:shadow-[0_0_20px_rgba(209,213,219,0.2)] hover:border-gray-300/50",
    btnColor: "bg-gray-300/10 text-gray-300 group-hover:bg-gray-300 group-hover:text-gray-900",
  },
  {
    title: "X (Twitter)",
    subtitle: "@csis_mmmut",
    buttonText: "Follow",
    href: "#",
    icon: XIcon,
    color: "text-gray-400",
    glow: "hover:shadow-[0_0_20px_rgba(156,163,175,0.2)] hover:border-gray-400/50",
    btnColor: "bg-gray-400/10 text-gray-400 group-hover:bg-gray-400 group-hover:text-gray-900",
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>, card: any) => {
    if (card.title === "Email") {
      e.preventDefault();
      navigator.clipboard.writeText("mmmut.csis@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[var(--text)] tracking-tight mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
            </h1>
            <p className="text-[var(--text-muted)] text-lg mb-12 leading-relaxed">
              Have a question about our research, want to collaborate on a project, or interested in joining CSIS? We'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleCopy(e, card)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`group relative flex items-center justify-between p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 ${card.glow}`}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${card.color}`}>
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-[var(--text)] leading-tight truncate">{card.title}</h3>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5 truncate">{card.subtitle}</p>
                      </div>
                    </div>
                    <div className={`ml-3 px-3 py-1.5 shrink-0 rounded-md text-xs font-bold transition-colors duration-300 ${card.btnColor}`}>
                      {card.title === "Email" && copied ? "Copied!" : card.buttonText}
                    </div>
                  </motion.a>
                );
              })}
            </div>


          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--surface)]/50 backdrop-blur-xl border border-[var(--border)] p-8 lg:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600" />

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[var(--text)]">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[var(--text)]">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--text)]">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--text)]">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--text)]">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us a little about your project or inquiry..."
                  className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                ></textarea>
              </div>

              <button
                className="mt-2 w-full bg-[var(--text)] text-[var(--bg)] font-semibold rounded-xl px-4 py-4 flex items-center justify-center gap-2 hover:bg-[var(--accent)] hover:text-white transition-all group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Location Section */}
        <div className="max-w-4xl mx-auto relative z-10 mt-32 mb-10 text-center flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold text-[#34d399] mb-4">Location</h2>
            <p className="text-[var(--text)] text-lg mb-6">
              Madan Mohan Malviya University of Technology, Gorakhpur, U.P.
            </p>
            <a
              href="https://maps.app.goo.gl/qatd42PVKeWn9yih7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-md border border-[#34d399]/50 text-[#34d399] hover:bg-[#34d399]/10 transition-colors"
            >
              View on Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-3xl bg-[var(--surface)]/30 backdrop-blur-xl border border-[#34d399]/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(52,211,153,0.05)] hover:shadow-[0_0_60px_rgba(52,211,153,0.1)] hover:border-[#34d399]/40 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#34d399]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-2xl md:text-3xl font-bold text-[#34d399] mb-6 relative z-10">
              Code - Create - Conquer.
            </h3>
            <div className="text-[var(--text-muted)] text-xl leading-relaxed relative z-10 space-y-3 font-[cursive]">
              <p>Ideas are temporary, innovation makes them eternal.</p>
              <p>Every line of code is a step toward the future.</p>
              <p>Build today what others will admire tomorrow.</p>
              <p><span className="text-[#34d399] font-bold font-sans">CSIS</span> -- Building the next generation of problem-solvers.</p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
