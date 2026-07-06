import LegalPage, { LegalHeading } from '@/components/legal-page'

export const metadata = {
  title: 'KVKK Aydınlatma Metni — ETON Yayıncılık',
  description:
    '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında ETON Yayıncılık aydınlatma metni.',
}

export default function KvkkPage() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni" updatedAt="Ocak 2025">
      <p>
        İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla ETON Yayıncılık
        tarafından kişisel verilerinizin işlenmesine ilişkin olarak sizleri
        bilgilendirmek amacıyla hazırlanmıştır.
      </p>

      <LegalHeading>Veri Sorumlusu</LegalHeading>
      <p>
        ETON Yayıncılık
        <br />
        Adres: Büyükesat Mah. Uğur Mumcu Cad. Çankaya / Ankara
        <br />
        Telefon: +90 312 447 80 84
        <br />
        E-posta:{' '}
        <a href="mailto:info@etonyayın.com.tr" className="text-primary hover:underline">
          info@etonyayın.com.tr
        </a>
      </p>

      <LegalHeading>İşlenen Kişisel Veriler</LegalHeading>
      <p>
        İletişim formu aracılığıyla ilettiğiniz ad soyad, e-posta adresi, konu ve
        mesaj içeriği ile web sitesi kullanımınıza ilişkin teknik veriler
        işlenmektedir.
      </p>

      <LegalHeading>Kişisel Verilerin İşlenme Amaçları</LegalHeading>
      <p>
        Kişisel verileriniz; talep ve sorularınızın yanıtlanması, iletişim
        faaliyetlerinin yürütülmesi, hizmet kalitesinin artırılması ve yasal
        yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.
      </p>

      <LegalHeading>İşlemenin Hukuki Sebebi</LegalHeading>
      <p>
        Verileriniz; KVKK m.5 kapsamında açık rızanıza dayanarak veya bir hakkın
        tesisi, kullanılması ya da korunması için veri işlemenin zorunlu olması
        ile ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla
        veri sorumlusunun meşru menfaati hukuki sebeplerine dayanılarak işlenir.
      </p>

      <LegalHeading>Kişisel Verilerin Aktarılması</LegalHeading>
      <p>
        Kişisel verileriniz; yalnızca yukarıda belirtilen amaçlarla sınırlı
        olmak üzere, hizmet aldığımız tedarikçilere (örneğin e-posta iletim
        hizmeti) ve yasal olarak yetkili kamu kurum ve kuruluşlarına
        aktarılabilir.
      </p>

      <LegalHeading>İlgili Kişinin Hakları (KVKK m.11)</LegalHeading>
      <p>
        Kanunun 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini
        öğrenme, işlenmişse bilgi talep etme, işlenme amacını öğrenme, eksik veya
        yanlış işlenmiş verilerin düzeltilmesini isteme, silinmesini veya yok
        edilmesini talep etme, işlemeye itiraz etme ve zarara uğramanız halinde
        zararın giderilmesini talep etme haklarına sahipsiniz.
      </p>

      <LegalHeading>Başvuru Yöntemi</LegalHeading>
      <p>
        Haklarınıza ilişkin taleplerinizi{' '}
        <a href="mailto:info@etonyayın.com.tr" className="text-primary hover:underline">
          info@etonyayın.com.tr
        </a>{' '}
        adresine e-posta göndererek veya yukarıdaki posta adresimize yazılı
        olarak iletebilirsiniz. Talebiniz en geç 30 gün içinde
        sonuçlandırılacaktır.
      </p>
    </LegalPage>
  )
}
