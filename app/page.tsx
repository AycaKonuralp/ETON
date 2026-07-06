import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import MarqueeTicker from '@/components/marquee-ticker'
import BooksSection from '@/components/books-section'
import FeaturedBook from '@/components/featured-book'
import AboutSection from '@/components/about-section'
import AuthorsSection from '@/components/authors-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <BooksSection />
        <FeaturedBook />
        <AboutSection />
        <AuthorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
