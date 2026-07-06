import LegalPage, { LegalHeading } from '@/components/legal-page'

export const metadata = {
  title: 'Çerez Politikası — ETON Yayıncılık',
  description:
    'ETON Yayıncılık web sitesinde kullanılan çerezler ve çerez tercihlerinizi yönetme hakkında bilgilendirme.',
}

export default function CerezPage() {
  return (
    <LegalPage title="Çerez Politikası" updatedAt="Ocak 2025">
      <p>
        Bu Çerez Politikası, ETON Yayıncılık web sitesinde çerezlerin (cookie)
        nasıl kullanıldığını açıklamaktadır. Web sitemizi kullanarak bu politikada
        açıklanan çerez kullanımını kabul etmiş olursunuz.
      </p>

      <LegalHeading>Çerez Nedir?</LegalHeading>
      <p>
        Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız
        aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler,
        web sitesinin daha verimli çalışmasını ve size daha iyi bir deneyim
        sunulmasını sağlar.
      </p>

      <LegalHeading>Kullandığımız Çerez Türleri</LegalHeading>
      <p>
        <strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevlerinin
        çalışması için gereklidir ve devre dışı bırakılamaz.
      </p>
      <p>
        <strong>Performans ve Analiz Çerezleri:</strong> Ziyaretçilerin siteyi
        nasıl kullandığını anlamamıza yardımcı olur; bu sayede içeriğimizi ve
        deneyimi iyileştiririz.
      </p>
      <p>
        <strong>İşlevsellik Çerezleri:</strong> Tercihlerinizi (örneğin çerez
        onayınız) hatırlayarak size kişiselleştirilmiş bir deneyim sunar.
      </p>

      <LegalHeading>Üçüncü Taraf Çerezleri</LegalHeading>
      <p>
        Sitemizde harita gösterimi gibi hizmetler için üçüncü taraf sağlayıcılar
        (örneğin Google Haritalar) kullanılmaktadır. Bu sağlayıcılar kendi
        çerezlerini yerleştirebilir ve kendi gizlilik politikalarına tabidir.
      </p>

      <LegalHeading>Çerezleri Yönetme</LegalHeading>
      <p>
        Tarayıcınızın ayarlarını değiştirerek çerezleri kabul edebilir,
        reddedebilir veya silebilirsiniz. Ancak zorunlu çerezleri engellemeniz
        halinde web sitesinin bazı bölümleri düzgün çalışmayabilir. Çoğu tarayıcı,
        çerez ayarlarını &quot;Ayarlar&quot; veya &quot;Gizlilik&quot; menüsünden
        yönetmenize olanak tanır.
      </p>

      <LegalHeading>İletişim</LegalHeading>
      <p>
        Çerez kullanımımızla ilgili sorularınız için{' '}
        <a href="mailto:info@etonyayın.com.tr" className="text-primary hover:underline">
          info@etonyayın.com.tr
        </a>{' '}
        adresinden bize ulaşabilirsiniz.
      </p>
    </LegalPage>
  )
}
