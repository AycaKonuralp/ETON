import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { books } from '@/lib/books'

export default function FeaturedBook() {
  const featured = books.find((b) => b.id === 'bana-hic-seni-seviyorum-demedin')!

  return (
    <section className="py-24 md:py-32 border-t border-border px-6 lg:px-10 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
          <span className="text-xs tracking-[0.35em] uppercase text-primary font-sans">Editörün Seçimi</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book cover */}
          <div className="relative group">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Shadow decoration */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 pointer-events-none"
              />
              <img
                src={featured.coverUrl}
                alt={`${featured.title} kitap kapağı`}
                className="w-full object-cover shadow-2xl transition-transform duration-700 group-hover:-translate-y-1"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-sans">{featured.category}</span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              {featured.title}
            </h2>

            <p className="text-sm text-muted-foreground font-sans">
              <span className="text-foreground font-medium">{featured.author}</span>
            </p>

            <div className="h-px bg-border" aria-hidden="true" />

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
              {featured.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href={`/kitaplar/${featured.id}`}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-sans hover:bg-primary/90 transition-all duration-300"
              >
                Kitabı İncele
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Link>
            </div>

            {/* Publisher mark */}
            <div className="flex items-center gap-3 pt-4 opacity-60">
              <div className="h-px w-8 bg-muted-foreground" aria-hidden="true" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">ETON Yayıncılık</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
