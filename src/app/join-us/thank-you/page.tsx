import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
          Form Submitted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Successfully</span>
        </h1>
        
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl mb-10 relative overflow-hidden">
          {/* Subtle top highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed font-medium">
            Thank you for showing interest in joining the team. We greatly appreciate the time and effort you took to apply!
          </p>
          
          <div className="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-6 mb-8">
            <p className="text-blue-100 leading-relaxed">
              Don't worry - even if you aren't selected for the core team this time, you can still join CSIS as a <strong>Contributor</strong>. We believe in open opportunities for everyone.
            </p>
          </div>

          <div className="py-6 border-y border-white/5 mb-8">
            <p className="text-xl md:text-2xl font-bold text-white tracking-wide italic leading-snug">
              "The focus is not a society, the focus is STEM and its use to make the world a better place."
            </p>
          </div>

          <p className="text-gray-400 text-xs md:text-sm mb-6 uppercase tracking-[0.2em] font-bold">
            In the meantime, follow us on our socials
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linkedin.com/company/csis-mmmut" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all font-semibold text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="https://instagram.com/csis.mmmut" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all font-semibold text-sm"
            >
              Instagram
            </a>
            <a 
              href="https://twitter.com/csis_mmmut" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all font-semibold text-sm"
            >
              Twitter
            </a>
          </div>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
