import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.76 0.12 82 / 0.06) 0%, transparent 70%)',
        }}
      />
      {/* Thin horizontal rule top */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-border" />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-primary/60" aria-hidden="true" />
          <span className="text-xs tracking-[0.35em] uppercase text-primary font-sans">
            ETON Yayıncılık
          </span>
          <div className="h-px w-12 bg-primary/60" aria-hidden="true" />
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-balance text-foreground">
          Kelimelerin{' '}
          <em className="not-italic text-primary">Gücü</em>
          {', '}
          <br className="hidden md:block" />
          Sayfaların{' '}
          <em className="not-italic text-primary">Sihri</em>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-sans text-balance">
          Türk ve dünya edebiyatının seçkin eserlerini sizinle buluşturuyoruz. Roman, tarih, biyografi ve çocuk kitaplarıyla okumanın keyfini yeniden keşfedin.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <a
            href="#kitaplar"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-sans hover:bg-primary/90 transition-all duration-300"
          >
            Kitaplara Göz Atın
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </a>
          <a
            href="#hakkimizda"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground text-sm tracking-widest uppercase font-sans hover:border-primary hover:text-primary transition-all duration-300"
          >
            Hakkımızda
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-8 md:gap-16 pt-8 border-t border-border w-full justify-center mt-4">
          {[
            { value: '100+', label: 'Yayınlanan Kitap' },
            { value: '50+', label: 'Yazar' },
            { value: '25+', label: 'Yıllık Deneyim' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground font-sans">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, oklch(0.10 0.012 240))' }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-primary/60 animate-pulse" aria-hidden="true" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-sans">Kaydır</span>
      </div>
    </section>
  )
}
