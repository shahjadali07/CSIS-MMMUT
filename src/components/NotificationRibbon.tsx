"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, Clock, ArrowRight, ChevronRight } from "lucide-react";

export default function NotificationRibbon() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    // Target deadline: 30th August 2026 23:59:59 IST (UTC+05:30)
    const targetDate = new Date("2026-08-30T23:59:59+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isExpired: false,
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerText = timeLeft.isExpired
    ? "Applications Closed"
    : `${timeLeft.days > 0 ? `${timeLeft.days}d ` : ""}${String(timeLeft.hours).padStart(2, "0")}h ${String(timeLeft.minutes).padStart(2, "0")}m ${String(timeLeft.seconds).padStart(2, "0")}s`;

  // Standard item block
  const MarqueeItemBlock = () => (
    <div className="flex items-center gap-8 shrink-0">
      {/* Item 1: Core Team Induction Form Deadline */}
      <Link
        href="/join-us/team"
        className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-blue-500/10 hover:bg-blue-500/25 border border-blue-500/30 text-blue-100 hover:text-white transition-all shadow-[0_0_12px_rgba(59,130,246,0.15)] shrink-0"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">Hurry!</span>
        <span className="text-xs sm:text-sm">CSIS Core Team Induction forms close on 30th August 2026 at 11:59 PM</span>
        <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-black/50 px-2 py-0.5 rounded text-amber-200 border border-amber-500/30">
          <Clock className="w-3 h-3 text-amber-400" />
          {timerText}
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
      </Link>

      {/* Subtle separator */}
      <span className="text-white/20 select-none">•</span>

      {/* Item 2: Contributor Application Live */}
      <Link
        href="/join-us/contributor"
        className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-purple-500/10 hover:bg-purple-500/25 border border-purple-500/30 text-purple-100 hover:text-white transition-all shadow-[0_0_12px_rgba(168,85,247,0.15)] shrink-0"
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        <span className="font-bold text-purple-300 uppercase tracking-wider text-[11px]">New</span>
        <span className="text-xs sm:text-sm">CSIS Contributor Application Forms are now LIVE — Open to all batches!</span>
        <span className="font-semibold text-xs text-white underline underline-offset-2 flex items-center gap-0.5">
          Apply as Contributor <ChevronRight className="w-3 h-3" />
        </span>
      </Link>

      {/* Subtle separator */}
      <span className="text-white/20 select-none">•</span>
    </div>
  );

  return (
    <div className="relative z-50 w-full overflow-hidden border-b border-indigo-500/20 bg-[#070A12] text-white select-none backdrop-blur-md">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/15 to-purple-600/10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      {/* Smooth Marquee Track */}
      <div className="flex items-center h-10 overflow-hidden relative">
        <div className="animate-marquee-continuous flex items-center gap-8 whitespace-nowrap">
          {/* Repeat sequence 1 */}
          <MarqueeItemBlock />
          <MarqueeItemBlock />

          {/* Repeat sequence 2 for 100% seamless wrap */}
          <MarqueeItemBlock />
          <MarqueeItemBlock />
        </div>
      </div>
    </div>
  );
}
