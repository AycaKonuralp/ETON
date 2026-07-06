import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface LegalPageProps {
  title: string
  updatedAt: string
  children: React.ReactNode
}

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
        >
          <ArrowLeft size={13} aria-hidden="true" />
          Ana Sayfa
        </Link>

        <header className="mt-8 mb-10 border-b border-border pb-8">
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-sans">
            Yasal Bilgilendirme
          </span>
          <h1 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-balance">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground font-sans">
            Son güncelleme: {updatedAt}
          </p>
        </header>

        <div className="legal-content flex flex-col gap-6 font-sans text-foreground/90 leading-relaxed">
          {children}
        </div>
      </div>
    </main>
  )
}

export function LegalHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-4">
      {children}
    </h2>
  )
}
