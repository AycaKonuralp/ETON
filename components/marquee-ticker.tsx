const items = [
  'Roman',
  'Tarih',
  'Biyografi',
  'Çocuk Kitabı',
  'Çeviri',
  'Edebiyat',
  'Kişisel Gelişim',
  'Klasikler',
  'Öykü',
  'ETON Yayıncılık',
]

export default function MarqueeTicker() {
  return (
    <div
      className="overflow-hidden border-y border-border bg-card/20 py-3.5"
      aria-hidden="true"
    >
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: 'marquee 28s linear infinite',
          width: 'max-content',
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans flex items-center gap-12">
            {item}
            <span className="text-primary/40">—</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}
