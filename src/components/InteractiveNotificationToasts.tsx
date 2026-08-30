"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, AlertCircle, Send, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";

interface NotificationItem {
  id: string;
  type: "induction" | "contributor" | "reminder";
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  icon: any;
  iconBg: string;
  iconColor: string;
}

const notificationsList: NotificationItem[] = [
  {
    id: "check-form",
    type: "reminder",
    tag: "Just Checking",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    title: "Have you filled the CSIS form yet?",
    description: "Inductions for 2nd & 3rd years and open Contributor roles are currently live. Don't miss out on building with CSIS!",
    ctaText: "Choose Application",
    ctaLink: "/join-us/team",
    icon: AlertCircle,
    iconBg: "bg-amber-500/15 border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    id: "core-urgent",
    type: "induction",
    tag: "Closing Tonight",
    tagColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    title: "Induction Deadline Approaching!",
    description: "Core Team registrations close on 30th August 2026 at 11:59 PM. Take a few minutes to submit your details.",
    ctaText: "Apply for Core Team",
    ctaLink: "/join-us/team",
    icon: Sparkles,
    iconBg: "bg-rose-500/15 border-rose-500/30",
    iconColor: "text-rose-400",
  },
  {
    id: "contributor-live",
    type: "contributor",
    tag: "Open to All",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    title: "Want to contribute to projects?",
    description: "Contributor application forms are now open for all students across any year and branch.",
    ctaText: "Apply as Contributor",
    ctaLink: "/join-us/contributor",
    icon: Send,
    iconBg: "bg-purple-500/15 border-purple-500/30",
    iconColor: "text-purple-400",
  },
];

export default function InteractiveNotificationToasts() {
  const [activeNotification, setActiveNotification] = useState<NotificationItem | null>(null);
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Initial popup after 4 seconds
    const firstTimer = setTimeout(() => {
      setActiveNotification(notificationsList[0]);
    }, 4000);

    return () => clearTimeout(firstTimer);
  }, []);

  useEffect(() => {
    if (!activeNotification) return;

    // Auto dismiss after 8 seconds and queue the next one after 15 seconds
    const autoDismissTimer = setTimeout(() => {
      handleDismiss();
    }, 9000);

    return () => clearTimeout(autoDismissTimer);
  }, [activeNotification]);

  const handleDismiss = () => {
    if (activeNotification) {
      setDismissed((prev) => ({ ...prev, [activeNotification.id]: true }));
      setActiveNotification(null);

      // Trigger next notification after a pause if any remain
      setTimeout(() => {
        setIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % notificationsList.length;
          const nextItem = notificationsList[nextIndex];
          setActiveNotification(nextItem);
          return nextIndex;
        });
      }, 16000);
    }
  };

  const handleManualClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleDismiss();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] pointer-events-none font-sans">
      <AnimatePresence>
        {activeNotification && (
          <motion.div
            key={activeNotification.id}
            initial={{ opacity: 0, y: 40, scale: 0.92, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="pointer-events-auto relative overflow-hidden rounded-2xl bg-[#0D1117]/95 border border-white/15 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(99,102,241,0.15)] backdrop-blur-xl"
          >
            {/* Subtle Gradient Backlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            {/* Header info */}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${activeNotification.iconBg}`}
                >
                  <activeNotification.icon className={`w-4 h-4 ${activeNotification.iconColor}`} />
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${activeNotification.tagColor}`}
                >
                  {activeNotification.tag}
                </span>
              </div>

              <button
                onClick={handleManualClose}
                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <h4 className="text-[15px] font-bold text-white mb-1.5 leading-snug tracking-tight">
              {activeNotification.title}
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {activeNotification.description}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              <Link
                href={activeNotification.ctaLink}
                onClick={handleDismiss}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{activeNotification.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={handleManualClose}
                className="py-2 px-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold transition-all"
              >
                Later
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
