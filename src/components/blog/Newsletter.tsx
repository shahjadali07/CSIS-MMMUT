'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setSuccess(true)
    setEmail('')
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-16 border border-[var(--border)] bg-[var(--surface)] text-center my-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-purple-500/10" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
          Subscribe to our Newsletter
        </h2>
        <p className="text-[var(--text-muted)] text-lg mb-8">
          Get the latest articles, tech news, and updates delivered straight to your inbox.
        </p>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 max-w-md mx-auto flex items-center justify-center gap-3"
            >
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <div className="text-left">
                <span className="font-bold block text-white text-sm">Subscription Confirmed!</span>
                <span className="text-xs text-gray-300">You have successfully subscribed to the CSIS newsletter.</span>
              </div>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" 
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError(null)
                  }}
                  placeholder="Enter your email address"
                  className={`w-full bg-black/50 border rounded-full px-6 py-3.5 text-white placeholder-[var(--text-muted)] focus:outline-none transition-colors ${
                    error ? "border-red-500/50 focus:border-red-500" : "border-[var(--border)] focus:border-[var(--accent)]"
                  }`}
                />
                {error && (
                  <div className="absolute top-[calc(100%+8px)] left-6 flex items-center gap-1.5 text-red-400 text-xs font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{error}</span>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        
        <p className="text-xs text-[var(--text-muted)] mt-10">
          We care about your data in our <a href="#" className="underline hover:text-white">privacy policy</a>.
        </p>
      </div>
    </motion.div>
  )
}
