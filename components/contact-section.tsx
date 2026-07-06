'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Check, Loader2 } from 'lucide-react'

const ADDRESS = 'Büyükesat Mah. Uğur Mumcu Cad. Çankaya / Ankara'
const PHONE_DISPLAY = '+90 312 447 80 84'
const PHONE_HREF = '+903124478084'
const EMAIL = 'info@etonyayın.com.tr'
const MAP_QUERY = encodeURIComponent('Büyükesat Mahallesi Uğur Mumcu Caddesi Çankaya Ankara')

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactSection() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      subject: String(data.get('subject') ?? ''),
      message: String(data.get('message') ?? ''),
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) {
        setStatus('error')
        setErrorMsg(json?.error ?? 'Mesaj gönderilemedi.')
        return
      }
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMsg('Bağlantı hatası. Lütfen tekrar deneyin.')
    }
  }

  return (
    <section id="iletisim" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-sans">
            İletişim
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
            Bize Ulaşın
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed font-sans">
            Kitaplarımız, iş birlikleri veya sorularınız için bize yazın. Formu
            doldurun, en kısa sürede size dönüş yapalım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: contact details + map */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <span className="shrink-0 w-11 h-11 flex items-center justify-center border border-border text-primary">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                    Adres
                  </p>
                  <p className="mt-1 text-foreground font-sans leading-relaxed">{ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 w-11 h-11 flex items-center justify-center border border-border text-primary">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                    Telefon
                  </p>
                  <a
                    href={`tel:${PHONE_HREF}`}
                    className="mt-1 block text-foreground font-sans hover:text-primary transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 w-11 h-11 flex items-center justify-center border border-border text-primary">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                    E-posta
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block text-foreground font-sans hover:text-primary transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
            </ul>

            {/* Map */}
            <div className="relative w-full aspect-[4/3] border border-border overflow-hidden">
              <iframe
                title="ETON Yayıncılık Konum Haritası"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="absolute inset-0 w-full h-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-sans"
            >
              <MapPin size={14} aria-hidden="true" />
              Yol tarifi al
            </a>
          </div>

          {/* Right: form */}
          <div className="border border-border p-8 md:p-10 bg-card">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-4">
                <span className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check size={28} aria-hidden="true" />
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Mesajınız Gönderildi
                </h3>
                <p className="text-muted-foreground font-sans max-w-sm">
                  Bize ulaştığınız için teşekkürler. En kısa sürede e-posta ile
                  size dönüş yapacağız.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-primary hover:underline font-sans"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                      Ad Soyad *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-background border border-border px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                      E-posta *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-background border border-border px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                    Konu
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full bg-background border border-border px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-background border border-border px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors resize-y"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-destructive font-sans" role="alert">
                    {errorMsg}
                  </p>
                )}

                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  Formu göndererek{' '}
                  <a href="/kvkk" className="text-primary hover:underline">
                    KVKK Aydınlatma Metni
                  </a>{' '}
                  ve{' '}
                  <a href="/gizlilik" className="text-primary hover:underline">
                    Gizlilik Politikası
                  </a>
                  &apos;nı kabul etmiş olursunuz.
                </p>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-sans hover:bg-primary/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={14} className="animate-spin" aria-hidden="true" />
                      Gönderiliyor
                    </>
                  ) : (
                    <>
                      Mesajı Gönder
                      <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
