import Image from 'next/image'
import { PortableTextComponents } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'

export const CustomPortableText: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="relative w-full h-auto my-8 rounded-xl overflow-hidden border border-[var(--border)] shadow-lg shadow-[var(--accent-glow)]">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || 'Blog Post Image'}
            width={800}
            height={500}
            className="object-cover w-full h-auto"
            loading="lazy"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-12 mb-6 text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mt-10 mb-5 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium mt-8 mb-4 text-white">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-medium mt-6 mb-3 text-white">{children}</h4>,
    normal: ({ children }) => <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-2 my-8 italic text-white bg-[var(--surface)]/30 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-8 mb-6 space-y-2 text-[var(--text-muted)] text-lg">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-8 mb-6 space-y-2 text-[var(--text-muted)] text-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-[var(--surface)] text-[var(--accent-light)] px-1.5 py-0.5 rounded text-sm font-mono border border-[var(--border)]">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-[var(--accent)] hover:text-white transition-colors underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)]">
          {children}
        </a>
      )
    },
  },
}
