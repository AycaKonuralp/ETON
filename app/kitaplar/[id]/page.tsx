import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Globe, Users } from 'lucide-react'
import { books } from '@/lib/books'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return books.map((book) => ({ id: book.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const book = books.find((b) => b.id === id)
  if (!book) return {}
  return {
    title: `${book.title} — ETON Yayıncılık`,
    description: book.description,
  }
}

export default async function BookDetailPage({ params }: Props) {
  const { id } = await params
  const book = books.find((b) => b.id === id)
  if (!book) notFound()

  // Related books: same category, excluding current
  const related = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-0">
        <Link
          href="/#kitaplar"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
        >
          <ArrowLeft size={13} aria-hidden="true" />
          Tüm Kitaplar
        </Link>
      </div>

      {/* Hero detail section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          {/* Cover */}
          <div className="relative group max-w-sm mx-auto lg:mx-0 w-full">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 pointer-events-none"
            />
            <img
              src={book.coverUrl}
              alt={`${book.title} kitap kapağı`}
              className="w-full object-cover shadow-2xl transition-transform duration-700 group-hover:-translate-y-1"
              crossOrigin="anonymous"
            />
            {book.badge && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-3 py-1.5 font-sans">
                {book.badge}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Category label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
              <span className="text-xs tracking-[0.35em] uppercase text-primary font-sans">{book.category}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              {book.title}
            </h1>

            {/* Author */}
            <div className="flex items-start gap-3">
              <Users size={14} className="text-primary/60 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans mb-1">Yazar</p>
                <p className="text-sm text-foreground font-sans leading-relaxed">{book.author}</p>
              </div>
            </div>

            {/* Translators */}
            {book.translators && (
              <div className="flex items-start gap-3">
                <Globe size={14} className="text-primary/60 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans mb-1">Çeviren / Çizen</p>
                  <p className="text-sm text-foreground font-sans">{book.translators}</p>
                </div>
              </div>
            )}

            {/* Language */}
            {book.language && (
              <div className="flex items-start gap-3">
                <BookOpen size={14} className="text-primary/60 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans mb-1">Dil</p>
                  <p className="text-sm text-foreground font-sans">{book.language}</p>
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="h-px bg-border" aria-hidden="true" />

            {/* Description */}
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans mb-3">Kitap Hakkında</p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
                {book.description}
              </p>
            </div>

            {/* Publisher mark */}
            <div className="flex items-center gap-3 pt-2 opacity-60">
              <div className="h-px w-8 bg-muted-foreground" aria-hidden="true" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">ETON Yayıncılık</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related books */}
      {related.length > 0 && (
        <section className="border-t border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
              <span className="text-xs tracking-[0.35em] uppercase text-primary font-sans">Benzer Kitaplar</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/kitaplar/${rel.id}`}
                  className="group flex flex-col bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-[2/3] bg-secondary">
                    <img
                      src={rel.coverUrl}
                      alt={`${rel.title} kitap kapağı`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-1.5">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-primary font-sans">{rel.category}</span>
                    <h3 className="font-serif text-sm font-semibold text-foreground leading-snug line-clamp-2">{rel.title}</h3>
                    <p className="text-xs text-muted-foreground font-sans line-clamp-1">{rel.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer nav */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex justify-between items-center">
          <Link
            href="/#kitaplar"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            Tüm Kitaplar
          </Link>
          <Link
            href="/"
            className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
          >
            Ana Sayfa
          </Link>
        </div>
      </div>
    </main>
  )
}
