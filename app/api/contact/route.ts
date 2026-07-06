import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = 'info@etonyayın.com.tr'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const subject = String(body.subject ?? '').trim()
    const message = String(body.message ?? '').trim()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Lütfen ad, e-posta ve mesaj alanlarını doldurun.' },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Lütfen geçerli bir e-posta adresi girin.' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log('[v0] RESEND_API_KEY is not set — cannot send email')
      return NextResponse.json(
        {
          error:
            'E-posta servisi henüz yapılandırılmadı. Lütfen daha sonra tekrar deneyin.',
        },
        { status: 503 },
      )
    }

    const resend = new Resend(apiKey)
    const safeSubject = subject || 'Konu belirtilmedi'

    const { error } = await resend.emails.send({
      // Uses Resend's shared sending domain until a custom domain is verified.
      from: 'ETON Yayıncılık <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `İletişim Formu: ${safeSubject}`,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nKonu: ${safeSubject}\n\nMesaj:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
          <h2 style="color: #0a2540;">Yeni İletişim Formu Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
          <p><strong>Konu:</strong> ${escapeHtml(safeSubject)}</p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return NextResponse.json(
        { error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.log('[v0] Contact API error:', err)
    return NextResponse.json(
      { error: 'Beklenmeyen bir hata oluştu.' },
      { status: 500 },
    )
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
