export interface Book {
  id: string
  title: string
  author: string
  category: string
  coverUrl: string
  description: string
  badge?: string
  translators?: string
  edition?: string
  pages?: number
  language?: string
}

export const books: Book[] = [
  {
    id: '10-amazon',
    title: '10 Amazon: Yüksek Doz Yaşam',
    author: 'Ayşe Durul Aslan, Ayşenur Parlak, Bilgen Denktaş, Elif Bozkurt, Filiz Uzunoğlu, Leyla Bahtiyar, Pınar Akçe, Rabia Özcan, Rukiye Işık Doğdu, Funda Değirmenci',
    category: 'Kişisel Gelişim',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10Amazon.jfif-fF4SP5RhIzuZ5Oz406R1anrxyWJs0r.jpeg',
    description:
      'On güçlü kadının kaleminden hayata dair ilham verici deneyimler ve "yüksek doz yaşam" felsefesi. Meme kanserine karşı verilen mücadeleleri, başarıların arkasındaki zorlu yolculukları ve kadın dayanışmasının gücünü anlatan çarpıcı bir derleme. Her bölümde farklı bir yazarın sesi duyulur; birbirinden farklı hayat hikâyeleri ortak bir dayanışma ruhu etrafında buluşur.',
    badge: 'III. Baskı',
    language: 'Türkçe',
  },
  {
    id: 'kucuk-hanimin-sarkisi',
    title: 'Küçük Hanımın Şarkısı',
    author: 'Ayşe Bade',
    category: 'Roman',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wh_2c762dc0e.jfif-dSQfIxLfxrVZaJY3Yv6KjDGw34Nslg.jpeg',
    description:
      'Hayatın karanlık köşelerinde kaybolmuş bir ruhun kendini bulma hikâyesi. Ayşe Bade\'nin yoğun atmosferi ve lirik anlatımıyla şekillenen bu roman, okuyucuyu içten içe sürüklediği duygusal bir yolculuğa davet ediyor. Sessizliğin derinliklerinden yükselen bir sese dönüşen bu anlatı, hem kaybı hem de yeniden doğuşu ustaca işliyor.',
    language: 'Türkçe',
  },
  {
    id: 'kremlin-kadinlari',
    title: 'Kremlin Kadınları',
    author: 'Larisa N. Vasileva',
    category: 'Biyografi / Tarih',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wh_db17e172f.jfif-Mhjz99hoaZAk0Gyk3v4I6F3b90sGox.jpeg',
    description:
      'Sovyetler Birliği\'nin kaderini şekillendiren güçlü erkeklerin gölgesinde kalan eşlerin, annelerin ve kız kardeşlerin gerçek hikâyeleri. Rusya\'nın demir perde gerisindeki en özel anlarını aydınlatan bu eser, iktidarın, aşkın ve fedakârlığın kesiştiği noktaları gözler önüne seriyor. Belgelere ve tanıklıklara dayanan bu kapsamlı biyografik çalışma, tarihin gizli kalmış bir yüzünü açığa çıkarıyor.',
    translators: 'Fatma Arıkan, Serdar Arıkan',
    language: 'Rusçadan çeviri',
  },
  {
    id: 'kayisi-renkli-buluttan-inen-kadin',
    title: 'Kayısı Renkli Buluttan İnen Kadın',
    author: 'Larisa N. Vasileva',
    category: 'Biyografi / Tarih',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-02%20at%209.26.23%20AM%20%282%29-0tGzbJiBN8daSfPRUyR1An0QGuaEjN.jpeg',
    description:
      '"Kremlin Kadınları" serisinin ikinci kitabında Vasileva, Sovyet iktidarının zirvesindeki kadınların portresini çizmeye devam ediyor. Bu cilt, dönemin en güçlü figürleriyle bağlantılı kadınların trajik ve çarpıcı hikâyelerine odaklanıyor. Prof. Dr. İlber Ortaylı\'nın takdiriyle: "Bu geniş insan coğrafyasında yaşananları gözlemlemek mümkün oluyor."',
    badge: 'Kremlin Kadınları II',
    translators: 'Fatma Arıkan, Serdar Arıkan',
    language: 'Rusçadan çeviri',
  },
  {
    id: 'islam-kulturu-donemi-ve-ronesans',
    title: 'İslam Kültürü Dönemi ve Rönesans',
    author: 'August Bebel',
    category: 'Tarih / Felsefe',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wh_9f2b57b47.jfif-3Czrl3YgphUb2GuG029Yjn4Lw3wER6.jpeg',
    description:
      'Sosyalist düşüncenin öncüsü August Bebel\'in kaleminden İslam uygarlığının Avrupa\'yı nasıl dönüştürdüğü ve Rönesans\'ın gerçek kökenleri. Bilim, sanat ve felsefe açısından iki dünyanın buluşmasını inceleyen bu yapıt, günümüzde de değerini korumaktadır. Medeniyet tarihi meraklıları için vazgeçilmez bir başvuru kaynağı niteliği taşıyan bu eser, önyargıları aşan bir bakış açısı sunuyor.',
    language: 'Türkçe',
  },
  {
    id: 'geri-donusmek-istemeyen-ayi',
    title: 'Geri Dönüşmek İstemeyen Ayı',
    author: 'Gülen Görgülü Güler',
    category: 'Çocuk Kitabı',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wh_7616e49b5.jfif-vX3shBqm9IYQ8io0QwZUWjPh2Kgn27.jpeg',
    description:
      'Geri dönüşüm ve doğa bilincini eğlenceli bir anlatımla çocuklara aktaran sevimli resimli kitap. Gülen Görgülü Güler\'in kaleme aldığı, Hakan Neher\'in resimlediği bu eser, küçük okuyucuların çevreye karşı sorumluluk geliştirmesine katkı sağlıyor. Renkli çizimleri ve akıcı anlatımıyla 5-10 yaş arası çocuklar için ideal bir hediye kitabı.',
    translators: 'Çizen: Hakan Neher',
    language: 'Türkçe',
  },
  {
    id: 'kugularin-donusu',
    title: 'Kuğuların Dönüşü',
    author: 'Taşkın Konuralp',
    category: 'Roman',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wh_6254fa077.jfif-OD4sHbrJl09J6Ncsi1jQBWG31sF33L.jpeg',
    description:
      '"Belaya Berioza" serisinin ikinci kitabı olan Kuğuların Dönüşü, Karadeniz kıyılarında geçen duygusal ve sürükleyici bir hikâye. Taşkın Konuralp, özgürlük ve tutku temalarını ustaca işleyerek okuyucuyu sayfadan sayfaya taşıyor. Serinin ilk kitabının heyecanını katlayan bu roman, beklenmedik bir sonla okuyucuyu derinden etkiliyor.',
    badge: 'Belaya Berioza II',
    language: 'Türkçe',
  },
  {
    id: 'bana-hic-seni-seviyorum-demedin',
    title: 'Bana Hiç Seni Seviyorum Demedin',
    author: 'Evrim Milaslı',
    category: 'Roman',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wh_2306a54da.jfif-zLYuk7AlRBPz5kou3eyzdTkHQ7mG3E.jpeg',
    description:
      'Evrim Milaslı\'nın içten ve çarpıcı kalemiyle yazılmış bu roman, söylenemeyen kelimelerin yarattığı derin yaraları anlatıyor. Sessizliğin en yüksek sesle konuştuğu bu hikâye, aşk, kayıp ve kendini bulma üzerine kurulu derin bir sorgulamayı okuyucuyla paylaşıyor. Her satırda hissedilen gerçeklik duygusu ve karakterlerin iç dünyaları bu romanı unutulmaz kılıyor.',
    language: 'Türkçe',
  },
  {
    id: 'garo-nerdesin',
    title: 'Garo Nerdesin',
    author: 'Emina Temel',
    category: 'Roman',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wh_84d2c5bd7.jfif-nst5Y6MST19fdaMUEfEDfa67y7nOPr.jpeg',
    description:
      'Emina Temel\'in bu romanı, kaybolan bir sevgilinin peşinde başlayan ve bizi Türkiye\'nin unutulmuş tarihi köşelerine götüren derin bir aşk ve hafıza yolculuğudur. 2. Baskısıyla okurların gönlünde taht kuran bu yapıt, sizi kendi geçmişinizle yüzleşmeye davet ediyor. Tarihin izlerini aşkın kırılganlığıyla harmanlayan bu roman, okuyanı uzun süre içinde bırakmıyor.',
    badge: '2. Baskı',
    language: 'Türkçe',
  },
  {
    id: 'cehov-gorki-andric',
    title: 'Çehov Gorki Andriç — Öykü Demeti',
    author: 'Anton Çehov, Maksim Gorki, İvo Andriç',
    category: 'Öykü',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-02%20at%209.27.03%20AM%20%281%29-6Dd7fEtPi5oyPKYs5E6MJFjlKzq3pm.jpeg',
    description:
      'Dünya edebiyatının üç ustasından seçilmiş öykülerle hazırlanmış bu antoloji, genç okuyuculara Çehov\'un nüktesi, Gorki\'nin gücü ve Andriç\'in lirizmiyle tanışma fırsatı sunuyor. Her öykü kendi içinde tam ve bağımsız bir evren oluştururken, bir arada okunduklarında zengin bir edebiyat deneyimi sunuyorlar. Natalia Vinokurova\'nın ustalıklı çevirisiyle Türkçeye kazandırılmıştır.',
    translators: 'Natalia Vinokurova',
    language: 'Rusçadan ve Sırpçadan çeviri',
  },
  {
    id: 'ihtiyar-adam-ve-torunu',
    title: 'İhtiyar Adam ve Torunu',
    author: 'Lev Tolstoy',
    category: 'Klasik Edebiyat',
    coverUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wh_0af585111.jfif-FQNYG1k52d1bt357H7sU9xXbFFS2V1.jpeg',
    description:
      'Tolstoy\'un kalemiyle kuşaklar arası sevginin ve bilgeliğin anlatıldığı bu eser, sade ve derin bir dille okuyucuya hayatın en temel gerçeklerini aktarıyor. İki neslin kesiştiği bu hikâye, torunun masumiyeti ile ihtiyarın bilgeliğini birbirine bağlayarak evrensel bir tablo çiziyor. Natalia Vinokurova\'nın Rusçadan yaptığı çeviriyle Türk okurlarıyla buluşan bir klasik.',
    translators: 'Natalia Vinokurova',
    language: 'Rusçadan çeviri',
  },
]

export const categories = ['Tümü', 'Roman', 'Biyografi / Tarih', 'Tarih / Felsefe', 'Çocuk Kitabı', 'Kişisel Gelişim', 'Öykü', 'Klasik Edebiyat']
