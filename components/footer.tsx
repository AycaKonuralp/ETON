import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="font-serif text-2xl font-bold tracking-widest text-primary">ETON</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">Yayıncılık</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-sm">
              Kelimelerin gücüne ve okumanın dönüştürücü etkisine inanan ETON Yayıncılık, her okuyucuya kapılarını açıyor.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              <a href="mailto:info@etonyayın.com.tr" className="flex items-center gap-3 text-xs text-muted-foreground hover:text-primary transition-colors font-sans group">
                <Mail size={13} className="text-primary/60 group-hover:text-primary transition-colors" aria-hidden="true" />
                info@etonyayın.com.tr
              </a>
              <a href="tel:+903124478084" className="flex items-center gap-3 text-xs text-muted-foreground hover:text-primary transition-colors font-sans group">
                <Phone size={13} className="text-primary/60 group-hover:text-primary transition-colors" aria-hidden="true" />
                +90 312 447 80 84
              </a>
              <div className="flex items-start gap-3 text-xs text-muted-foreground font-sans">
                <MapPin size={13} className="text-primary/60 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Büyükesat Mah. Uğur Mumcu Cad. Çankaya / Ankara</span>
              </div>
            </div>
          </div>

          {/* Catalog links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary font-sans">Kategoriler</h4>
            <ul className="flex flex-col gap-2.5" role="list">
              {['Roman', 'Biyografi / Tarih', 'Çocuk Kitabı', 'Kişisel Gelişim', 'Öykü', 'Klasik Edebiyat'].map((cat) => (
                <li key={cat}>
                  <a
                    href="#kitaplar"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors font-sans tracking-wide"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary font-sans">Keşfet</h4>
            <ul className="flex flex-col gap-2.5" role="list">
              {[
                { label: 'Tüm Kitaplar', href: '#kitaplar' },
                { label: 'Hakkımızda', href: '#hakkimizda' },
                { label: 'Yazarlar', href: '#yazarlar' },
                { label: 'İletişim', href: '#iletisim' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors font-sans tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-muted-foreground font-sans tracking-wide">
            &copy; {new Date().getFullYear()} ETON Yayıncılık. Tüm hakları saklıdır.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Yasal">
            {[
              { label: 'Gizlilik Politikası', href: '/gizlilik' },
              { label: 'KVKK', href: '/kvkk' },
              { label: 'Çerez Politikası', href: '/cerez-politikasi' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] text-muted-foreground hover:text-primary transition-colors font-sans tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
