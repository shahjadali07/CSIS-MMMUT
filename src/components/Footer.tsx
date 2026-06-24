"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    group: "Society",
    links: [
      { label: "About CSIS", href: "#about" },
      { label: "Team", href: "/team" },
      { label: "Projects", href: "/projects" },
      { label: "Insights", href: "/blogs" },
      { label: "Events", href: "/events" },
      { label: "Contact", href: "/contact" },

    ],
  },
  {
    group: "Platform",
    links: [
      { label: "Prayukti-VLab", href: "#vlab" },
      { label: "Malaviya Connect", href: "#" },
      { label: "Malaviya Tech Blog", href: "#" },
      { label: "Mmmut Support", href: "#" },
      { label: "Ved", href: "#" },


    ],
  },
  {
    group: "Connect",
    links: [
      { label: "Contact Us", href: "mailto:mmmut.csis@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/csis-mmmut" },
      { label: "Instagram", href: "https://www.instagram.com/csis_mmmut?igsh=M3EzZG83cW82dzZm" },
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbCJcvaKLaHo4qbZHG1Y" },
      { label: "GitHub", href: "#" },
      { label: "Join CSIS", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-500 opacity-50" />
      <div className="absolute inset-0 bg-[var(--bg-alt)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-12 lg:col-span-4 xl:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-20 h-20">
                <Image
                  src="/images/csis-logo.png"
                  alt="CSIS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-[var(--text)] text-lg font-space">CSIS</span>
                <span className="block text-[10px] text-[var(--text-muted)]/60 tracking-widest uppercase font-space">
                  Innovation Society
                </span>
              </div>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs mb-6">
              Computer Science &amp; Innovation Society — building the next generation of
              tech leaders through innovation, research, and practical learning.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] hover:scale-110 transition-transform duration-200">
                <a
                  href="https://www.instagram.com/csis_mmmut?igsh=M3EzZG83cW82dzZm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full rounded-lg glass bg-[#0f111a] flex items-center justify-center text-white hover:text-pink-500 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] hover:scale-110 transition-transform duration-200">
                <a
                  href="https://www.linkedin.com/company/csis-mmmut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full rounded-lg glass bg-[#0f111a] flex items-center justify-center text-white hover:text-blue-500 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] hover:scale-110 transition-transform duration-200">
                <a
                  href="mailto:mmmut.csis@gmail.com"
                  className="w-full h-full rounded-lg glass bg-[#0f111a] flex items-center justify-center text-white hover:text-red-400 transition-all duration-200"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] hover:scale-110 transition-transform duration-200">
                <a
                  href="#"
                  className="w-full h-full rounded-lg glass bg-[#0f111a] flex items-center justify-center text-white hover:text-gray-400 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] hover:scale-110 transition-transform duration-200">
                <a
                  href="https://whatsapp.com/channel/0029VbCJcvaKLaHo4qbZHG1Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full rounded-lg glass bg-[#0f111a] flex items-center justify-center text-white hover:text-green-400 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-12 lg:col-span-4 xl:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.group}>
                <h4 className="text-xs tracking-widest uppercase text-[var(--text-muted)]/50 font-semibold mb-5">
                  {group.group}
                </h4>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Block */}
          <div className="md:col-span-12 lg:col-span-4 xl:col-span-4 space-y-4">

            {/* Location Card */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] transition-all hover:scale-[1.02]">
              <div className="p-4 rounded-2xl bg-[#0f111a]/90 flex gap-4 h-full">
                <div className="mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--text-muted)]/80 text-sm leading-relaxed">
                    Madan Mohan Malaviya University of Technology , Gorakhpur <br />
                  </p>
                  <p className="text-[var(--text-muted)]/80 text-sm leading-relaxed">
                    Uttar Pradesh, India - 273010<br />
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] transition-all hover:scale-[1.02]">
              <div className="p-4 rounded-2xl bg-[#0f111a]/90 flex items-center gap-4 h-full">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <a href="mailto:mmmut.csis@gmail.com" className="text-white/90 font-medium text-sm hover:text-emerald-400 transition-colors">
                  mmmut.csis@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] transition-all hover:scale-[1.02]">
              <div className="p-4 rounded-2xl bg-[#0f111a]/90 flex items-start gap-4 h-full">
                <div className="mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+918382864910" className="text-white/90 font-medium text-sm hover:text-emerald-400 transition-colors">
                    +91 8382864910
                  </a>
                  <a href="tel:+916386554887" className="text-white/90 font-medium text-sm hover:text-emerald-400 transition-colors">
                    +91 6386554887
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-500 opacity-50" />
          <p className="text-[var(--text-muted)]/50 text-xs">
            © {new Date().getFullYear()} Computer Science &amp; Innovation Society. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]/50">
            <span>Powered by</span>
            <span className="text-[var(--accent)]">CSIS Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
