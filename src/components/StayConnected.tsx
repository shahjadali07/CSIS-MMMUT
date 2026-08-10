"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const socialCards = [
  {
    platform: "Instagram",
    description: "Daily updates & behind the scenes",
    icon: InstagramIcon,
    href: "https://www.instagram.com/csis_mmmut?igsh=M3EzZG83cW82dzZm",
    color: "text-pink-500",
    bgHover: "hover:bg-pink-500/10",
    borderHover: "hover:border-pink-500/50",
  },
  {
    platform: "LinkedIn",
    description: "Professional networking & achievements",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/csis-mmmut",
    color: "text-blue-500",
    bgHover: "hover:bg-blue-500/10",
    borderHover: "hover:border-blue-500/50",
  },
  {
    platform: "WhatsApp",
    description: "Join the official community channel",
    icon: WhatsappIcon,
    href: "https://whatsapp.com/channel/0029VbCJcvaKLaHo4qbZHG1Y",
    color: "text-green-500",
    bgHover: "hover:bg-green-500/10",
    borderHover: "hover:border-green-500/50",
  },
  {
    platform: "Email",
    description: "Reach out for collaborations",
    icon: Mail,
    href: "mailto:mmmut.csis@gmail.com",
    color: "text-red-400",
    bgHover: "hover:bg-red-400/10",
    borderHover: "hover:border-red-400/50",
  },
];

export default function StayConnected() {
  return (
    <section className="py-24 px-6 bg-[var(--bg-alt)] border-t border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text)] mb-4">
            Stay <span className="text-[var(--accent)]">Connected</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-16 text-lg">
            Follow us across platforms to stay updated on our latest projects, events, and community news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.platform}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col items-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${card.bgHover} ${card.borderHover}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-black/20 mb-4 border border-white/5 ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text)] mb-2">{card.platform}</h3>
                <p className="text-sm text-[var(--text-muted)] text-center">
                  {card.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
