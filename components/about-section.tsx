const values = [
  {
    title: 'Özgünlük',
    description:
      'Sesini bulmak isteyen yazarlara kapılarımızı açıyor, her eserin kendi kimliğiyle var olmasına önem veriyoruz.',
  },
  {
    title: 'Kalite',
    description:
      'Tasarımdan çeviriyi, basımdan dağıtıma her aşamada mükemmeliyeti gözetiyoruz.',
  },
  {
    title: 'Çeşitlilik',
    description:
      'Roman, tarih, biyografi ve çocuk kitaplarıyla her okuyucuya ulaşmayı hedefliyoruz.',
  },
  {
    title: 'Köprü',
    description:
      'Türk okurlarını dünya edebiyatıyla, dünyayı Türk yazarların sesiyle buluşturuyoruz.',
  },
]

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-[0.03]"
        style={{
          background: 'radial-gradient(ellipse at right center, oklch(0.76 0.12 82) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
              <span className="text-xs tracking-[0.35em] uppercase text-primary font-sans">Hakkımızda</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Kitabın Arkasındaki{' '}
              <em className="not-italic text-primary">Güç</em>
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground text-sm md:text-base leading-relaxed font-sans">
              <p>
                ETON Yayıncılık, Türk edebiyatının ve dünya edebiyatının seçkin eserlerini okuyucularla buluşturma misyonuyla kurulmuştur. Yayın hayatımız boyunca roman, tarih, biyografi ve çocuk edebiyatı alanlarında pek çok önemli eser okuyucularla buluştu.
              </p>
              <p>
                Yayımladığımız her kitap, titiz bir editoryal süreçten geçmekte; kaliteli çeviriler ve özgün tasarımlarla okuyucuya ulaşmaktadır. Yazarlarımızın sesi, bizim için en değerli varlıktır.
              </p>
            </div>

            <a
              href="#kitaplar"
              className="self-start inline-flex items-center gap-3 px-6 py-3 border border-primary text-primary text-xs tracking-widest uppercase font-sans hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-2"
            >
              Tüm Kitapları İncele
            </a>
          </div>

          {/* Right column: values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {values.map((val) => (
              <div key={val.title} className="bg-background p-7 flex flex-col gap-3 group hover:bg-card transition-colors duration-300">
                <div className="w-5 h-px bg-primary group-hover:w-8 transition-all duration-300" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-foreground">{val.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
