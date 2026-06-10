"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
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

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactPage() {
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

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-[var(--text)] font-semibold mb-1">Email Us</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:hello@csis.edu" className="text-[var(--accent)] hover:underline text-sm font-medium">hello@csis.edu</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-[var(--text)] font-semibold mb-1">Visit Us</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-1">Come say hello at our lab.</p>
                  <p className="text-[var(--text-muted)] text-sm">Computer Science Dept.<br />Block B, Room 402</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-[var(--border)]">
              <p className="text-[var(--text)] font-medium mb-4">Follow our journey</p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[var(--accent)] transition-all">
                  <GithubIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[#0077b5] transition-all">
                  <LinkedinIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white transition-all">
                  <XIcon />
                </a>
              </div>
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
      </main>

      <Footer />
    </div>
  );
}
