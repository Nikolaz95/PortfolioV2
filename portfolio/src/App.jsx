import { Toaster } from 'react-hot-toast'
import { useTheme } from 'styled-components'

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
import Experience from './components/sections/Experience/Experience'
import Projects from './components/sections/Projects/Projects'
import Contact from './components/sections/Contact/Contact'

export default function App() {
  const theme = useTheme()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />

      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: theme.colors.glass,
            color: theme.colors.text,
            border: `1px solid ${theme.colors.border}`,
          },
        }}
      />
    </>
  )
}
