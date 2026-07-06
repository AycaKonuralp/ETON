const authors = [
  { name: 'Larisa N. Vasileva', works: 'Kremlin Kadınları, Kayısı Renkli Buluttan İnen Kadın', origin: 'Rusya' },
  { name: 'Evrim Milaslı', works: 'Bana Hiç Seni Seviyorum Demedin', origin: 'Türkiye' },
  { name: 'Taşkın Konuralp', works: 'Kuğuların Dönüşü', origin: 'Türkiye' },
  { name: 'Ayşe Bade', works: 'Küçük Hanımın Şarkısı', origin: 'Türkiye' },
  { name: 'Emina Temel', works: 'Garo Nerdesin', origin: 'Türkiye' },
  { name: 'Gülen Görgülü Güler', works: 'Geri Dönüşmek İstemeyen Ayı', origin: 'Türkiye' },
  { name: 'August Bebel', works: 'İslam Kültürü Dönemi ve Rönesans', origin: 'Almanya' },
  { name: 'Lev Tolstoy', works: 'İhtiyar Adam ve Torunu', origin: 'Rusya' },
  { name: 'Anton Çehov', works: 'Öykü Demeti', origin: 'Rusya' },
  { name: 'Maksim Gorki', works: 'Öykü Demeti', origin: 'Rusya' },
  { name: 'İvo Andriç', works: 'Öykü Demeti', origin: 'Bosna-Hersek' },
  { name: 'Ayşe Durul Aslan', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Ayşenur Parlak', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Bilgen Denktaş', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Elif Bozkurt', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Filiz Uzunoğlu', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Leyla Bahtiyar', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Pınar Akçe', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Rabia Özcan', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Rukiye Işık Doğdu', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
  { name: 'Funda Değirmenci', works: '10 Amazon: Yüksek Doz Yaşam', origin: 'Türkiye' },
]

export default function AuthorsSection() {
  return (
    <section id="yazarlar" className="py-24 md:py-32 border-t border-border px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start gap-6 mb-14">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.35em] uppercase text-primary font-sans">Yazarlar</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            Kalemlerimiz
          </h2>
        </div>

        {/* Authors list — editorial table style */}
        <div className="flex flex-col divide-y divide-border">
          {authors.map((author, i) => (
            <div
              key={author.name}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 hover:bg-card/50 transition-colors duration-300 px-1"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs text-muted-foreground font-sans w-5 text-right tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {author.name}
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 pl-10 sm:pl-0">
                <span className="text-xs text-muted-foreground font-sans line-clamp-1 sm:max-w-xs">
                  {author.works}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-primary/70 font-sans min-w-fit">
                  {author.origin}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
