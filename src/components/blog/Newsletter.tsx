'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Newsletter() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-3xl overflow-hidden p-10 lg:p-16 border border-[var(--border)] bg-[var(--surface)] text-center my-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-purple-500/10" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
          Subscribe to our Newsletter
        </h2>
        <p className="text-[var(--text-muted)] text-lg mb-8">
          Get the latest articles, tech news, and society updates delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-grow">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full bg-black/50 border border-[var(--border)] rounded-full px-6 py-3.5 text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Subscribe
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-xs text-[var(--text-muted)] mt-4">
          We care about your data in our <a href="#" className="underline hover:text-white">privacy policy</a>.
        </p>
      </div>
    </motion.div>
  )
}
