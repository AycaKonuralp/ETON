import LegalPage, { LegalHeading } from '@/components/legal-page'

export const metadata = {
  title: 'Gizlilik Politikası — ETON Yayıncılık',
  description:
    'ETON Yayıncılık gizlilik politikası: kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgilendirme.',
}

export default function GizlilikPage() {
  return (
    <LegalPage title="Gizlilik Politikası" updatedAt="Ocak 2025">
      <p>
        ETON Yayıncılık olarak kişisel verilerinizin gizliliğine önem veriyoruz.
        Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya iletişim
        formumuzu kullandığınızda hangi bilgilerin toplandığını, bu bilgilerin
        nasıl kullanıldığını ve korunduğunu açıklar.
      </p>

      <LegalHeading>Toplanan Bilgiler</LegalHeading>
      <p>
        İletişim formumuz aracılığıyla bize ilettiğinizde ad soyad, e-posta
        adresi, konu ve mesaj içeriği gibi bilgileri toplarız. Ayrıca web
        sitemizi kullanımınıza ilişkin bazı teknik veriler (IP adresi, tarayıcı
        türü, ziyaret zamanı) otomatik olarak kaydedilebilir.
      </p>

      <LegalHeading>Bilgilerin Kullanımı</LegalHeading>
      <p>
        Topladığımız bilgileri yalnızca sorularınıza yanıt vermek, taleplerinizi
        değerlendirmek, hizmetlerimizi geliştirmek ve yasal yükümlülüklerimizi
        yerine getirmek amacıyla kullanırız. Bilgileriniz, açık rızanız olmadan
        pazarlama amacıyla üçüncü taraflarla paylaşılmaz.
      </p>

      <LegalHeading>Bilgilerin Paylaşımı</LegalHeading>
      <p>
        Kişisel verileriniz; hizmet sağlayıcılarımız (örneğin e-posta iletim
        altyapısı) ile yalnızca hizmetin gerektirdiği ölçüde ve gizlilik
        yükümlülükleri çerçevesinde paylaşılabilir. Yasal bir zorunluluk halinde
        yetkili kamu kurumlarıyla paylaşım yapılabilir.
      </p>

      <LegalHeading>Veri Güvenliği</LegalHeading>
      <p>
        Kişisel verilerinizi yetkisiz erişime, kayba ve kötüye kullanıma karşı
        korumak için makul teknik ve idari tedbirler alıyoruz. Ancak internet
        üzerinden yapılan hiçbir aktarımın %100 güvenli olmadığını hatırlatmak
        isteriz.
      </p>

      <LegalHeading>Çerezler</LegalHeading>
      <p>
        Web sitemiz, deneyiminizi iyileştirmek için çerezler kullanabilir.
        Çerezler hakkında ayrıntılı bilgi için{' '}
        <a href="/cerez-politikasi" className="text-primary hover:underline">
          Çerez Politikamızı
        </a>{' '}
        inceleyebilirsiniz.
      </p>

      <LegalHeading>Haklarınız</LegalHeading>
      <p>
        Kişisel verilerinize ilişkin erişim, düzeltme, silme ve işlemeye itiraz
        gibi haklarınız hakkında ayrıntılı bilgiyi{' '}
        <a href="/kvkk" className="text-primary hover:underline">
          KVKK Aydınlatma Metni
        </a>{' '}
        sayfamızda bulabilirsiniz.
      </p>

      <LegalHeading>İletişim</LegalHeading>
      <p>
        Gizlilik uygulamalarımızla ilgili sorularınız için bizimle{' '}
        <a href="mailto:info@etonyayın.com.tr" className="text-primary hover:underline">
          info@etonyayın.com.tr
        </a>{' '}
        adresinden iletişime geçebilirsiniz.
      </p>
    </LegalPage>
  )
}
