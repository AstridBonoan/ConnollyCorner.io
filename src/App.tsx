import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuPreview from './components/MenuPreview'
import Specials from './components/Specials'
import Gallery from './components/Gallery'
import Reservations from './components/Reservations'
import Jobs from './components/Jobs'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-forest-dark"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Specials />
        <Gallery />
        <Reservations />
        <Jobs />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
