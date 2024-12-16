import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CryptoTracker from './components/CryptoTracker'
import Projects from './components/Projects'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Hero />
        <section id="crypto" className="py-16">
          <CryptoTracker />
        </section>
        <Projects />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App