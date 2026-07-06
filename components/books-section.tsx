'use client'

import { useState } from 'react'
import { books, categories } from '@/lib/books'
import BookCard from './book-card'

export default function BooksSection() {
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const filtered =
    activeCategory === 'Tümü'
      ? books
      : books.filter((b) => b.category === activeCategory)

  return (
    <section id="kitaplar" className="py-24 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-start gap-6 mb-14">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
          <span className="text-xs tracking-[0.35em] uppercase text-primary font-sans">Katalog</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            Kitaplarımız
          </h2>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed font-sans">
            Her okuyucuya hitap eden geniş katalogumuzdan kendinize en yakın eseri seçin.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Kategori filtresi">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs tracking-widest uppercase font-sans border transition-all duration-300 ${
              activeCategory === cat
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-primary/60 hover:text-foreground'
            }`}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground font-sans text-sm tracking-wider">
          Bu kategoride henüz kitap bulunmuyor.
        </div>
      )}
    </section>
  )
}
