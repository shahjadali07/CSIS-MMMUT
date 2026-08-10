"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    title: "Expert Mentorship",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Ecosystem Connect",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "State of the Art Infrastructure",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Funding Opportunity",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Networking and Visibility",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
  },
];

export default function PillarsOfSupport() {
  return (
    <section className="relative py-24 px-6 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Text Block (Top Left) */}
          <div className="flex flex-col justify-center p-4 lg:pr-8">
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight mb-4">
              Pillars Of <span className="text-[var(--accent)]">Support</span>
            </h2>
            <p className="text-[var(--text-muted)] text-base leading-relaxed">
              At CSIS, we power the innovators and job creators of tomorrow by offering essential pillars of support.
            </p>
          </div>

          {/* Cards */}
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[280px] w-full rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300" />

              {/* Card Content (Text + Arrow) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <h3 className="text-white font-medium text-lg lg:text-xl tracking-wide w-4/5">
                  {pillar.title}
                </h3>
                <div className="text-white transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
