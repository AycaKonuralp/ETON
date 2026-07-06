'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Kitaplar', href: '#kitaplar' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Yazarlar', href: '#yazarlar' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="ETON Yayıncılık Ana Sayfa">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eton_logo-dhCZDUMYcDv1vq15hooMSXDIUkuzX9.png"
            alt="ETON Yayıncılık"
            className="h-10 md:h-12 w-auto object-contain"
            style={{ background: 'transparent' }}
          />
          <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-sans sr-only">
            Yayıncılık
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#kitaplar"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-primary/60 text-primary text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-sans"
        >
          Kataloğu Gör
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-6 py-6">
          <ul className="flex flex-col gap-5" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors font-sans"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}


