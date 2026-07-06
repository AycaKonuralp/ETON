'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'eton-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function decide(value: 'accepted' | 'rejected') {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore storage errors
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-live="polite"
      aria-label="Çerez bildirimi"
    >
      <div className="max-w-4xl mx-auto bg-card border border-border shadow-lg p-6 flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex items-start gap-3 flex-1">
          <span className="shrink-0 w-10 h-10 flex items-center justify-center border border-border text-primary">
            <Cookie size={18} aria-hidden="true" />
          </span>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.
            Detaylar için{' '}
            <Link href="/cerez-politikasi" className="text-primary hover:underline">
              Çerez Politikamızı
            </Link>{' '}
            inceleyebilirsiniz.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => decide('rejected')}
            className="px-5 py-3 text-xs tracking-widest uppercase font-sans border border-border text-foreground hover:bg-muted transition-colors"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="px-5 py-3 text-xs tracking-widest uppercase font-sans bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  )
}
