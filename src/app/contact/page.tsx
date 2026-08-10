"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageSquare, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ContactPurpose = {
  id: string;
  title: string;
  desc: string;
  primaryContact: string;
  phone: string;
  email: string;
};

const purposes: ContactPurpose[] = [
  {
    id: "general",
    title: "General Question",
    desc: "Have a general query about the society, upcoming inductions, or activities?",
    primaryContact: "Riya Rani",
    phone: "+919336161226",
    email: "contact@mmmut.tech",
  },
  {
    id: "projects",
    title: "Projects & Collaboration",
    desc: "Interested in co-developing simulation modules or collaborating on active projects?",
    primaryContact: "Shahjad Ali",
    phone: "+916386554887",
    email: "contact@mmmut.tech",
  },
  {
    id: "events",
    title: "Events & Opportunities",
    desc: "Want to run technical events, workshops, hackathons, or share opportunities?",
    primaryContact: "Riya Rani",
    phone: "+919336161226",
    email: "contact@mmmut.tech",
  },
  {
    id: "vlab",
    title: "Virtual Lab / Technical Help",
    desc: "Encountered an issue or need technical assistance with Prayukti VLab tools?",
    primaryContact: "Shahjad Ali",
    phone: "+916386554887",
    email: "contact@mmmut.tech",
  },
  {
    id: "contribute",
    title: "Want to Contribute",
    desc: "Are you a student developer or designer looking to contribute and take ownership?",
    primaryContact: "Shahjad Ali & Riya Rani",
    phone: "+916386554887",
    email: "contact@mmmut.tech",
  },
];

export default function ContactPage() {
  const [selectedPurpose, setSelectedPurpose] = useState<string>("general");

  const currentPurpose = purposes.find((p) => p.id === selectedPurpose) || purposes[0];

  return (
    <div className="bg-[var(--bg)] min-h-screen flex flex-col font-sans text-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full relative z-10">
        {/* Background glow effects */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest block mb-4">
            Connect With CSIS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
          </h1>
          <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl leading-relaxed">
            We are here to support your ideas and address questions about computer science activities, research opportunities, and Virtual Lab developments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Purpose Selector */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-white mb-6">
              What would you like to talk about?
            </h2>

            <div className="space-y-4">
              {purposes.map((p) => {
                const isSelected = selectedPurpose === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPurpose(p.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? "bg-white/[0.04] border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.15)] scale-[1.01]"
                        : "bg-[var(--surface)] border-white/5 hover:border-white/15"
                    }`}
                  >
                    <div className="flex-1 pr-4">
                      <h3 className={`text-base font-bold transition-colors ${isSelected ? "text-blue-400" : "text-white group-hover:text-blue-300"}`}>
                        {p.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                      isSelected ? "border-blue-400 text-blue-400 bg-blue-400/5" : "border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white"
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Contact Detail (Claymorphism/Premium Gradient look) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPurpose.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 backdrop-blur-2xl p-8 shadow-2xl flex flex-col justify-between min-h-[420px]"
              >
                {/* Claymorphic highlight circle overlay */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      Destination Details
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    {currentPurpose.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8">
                    Based on your selection, here are the direct contact channels for obtaining help, collaborating, or requesting support.
                  </p>

                  <div className="space-y-6">
                    {/* Primary Contact Person */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase block tracking-wider mb-0.5">
                          Primary Representative
                        </span>
                        <span className="text-base font-bold text-white block">
                          {currentPurpose.primaryContact}
                        </span>
                        {currentPurpose.phone && (
                          <a
                            href={`tel:${currentPurpose.phone}`}
                            className="text-sm text-blue-400 hover:underline inline-flex items-center gap-1 mt-1 font-semibold"
                          >
                            {currentPurpose.phone.replace("+91", "+91 ")}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Email Channel */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase block tracking-wider mb-0.5">
                          Official Email Address
                        </span>
                        <a
                          href={`mailto:${currentPurpose.email}`}
                          className="text-sm text-white hover:text-blue-400 hover:underline transition-colors block font-semibold"
                        >
                          {currentPurpose.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stay Connected (WhatsApp Channel, no fake socials) */}
                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-[var(--accent-light)]" />
                    <span className="text-xs font-semibold text-gray-300">Stay Connected</span>
                  </div>
                  <a
                    href="https://whatsapp.com/channel/0029VbCJcvaKLaHo4qbZHG1Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-green-500/10 border border-green-500/20 hover:border-green-500/40 text-green-400 text-sm font-bold transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      Join CSIS WhatsApp Community
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
