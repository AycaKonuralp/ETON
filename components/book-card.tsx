import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Book } from '@/lib/books'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <article className="group relative flex flex-col bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden">
      {/* Cover image container */}
      <div className="relative overflow-hidden bg-secondary aspect-[2/3]">
        <img
          src={book.coverUrl}
          alt={`${book.title} kitap kapağı`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          crossOrigin="anonymous"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
          <Link
            href={`/kitaplar/${book.id}`}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary border border-primary px-4 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-sans w-full justify-center"
            aria-label={`${book.title} - Detayları incele`}
          >
            Detaylar
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>
        {/* Badge */}
        {book.badge && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[9px] tracking-widest uppercase px-2 py-1 font-sans">
            {book.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Category */}
        <span className="text-[9px] tracking-[0.3em] uppercase text-primary font-sans">
          {book.category}
        </span>

        {/* Title */}
        <h3 className="font-serif text-base md:text-lg font-semibold leading-snug text-foreground text-balance line-clamp-2">
          {book.title}
        </h3>

        {/* Author */}
        <p className="text-xs text-muted-foreground font-sans line-clamp-1">
          {book.author}
        </p>

        {/* Divider */}
        <div className="h-px bg-border" aria-hidden="true" />

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed font-sans line-clamp-3 flex-1">
          {book.description}
        </p>

        {/* Internal link */}
        <Link
          href={`/kitaplar/${book.id}`}
          className="mt-auto inline-flex items-center gap-1.5 text-xs text-primary hover:text-foreground transition-colors duration-300 font-sans tracking-wider uppercase"
          aria-label={`${book.title} - Detayları incele`}
        >
          Detayları İncele
          <ArrowRight size={10} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
