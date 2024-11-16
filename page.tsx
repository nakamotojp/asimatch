import { Navbar } from './components/Navbar'
import { CoverImage } from './components/CoverImage'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { CompanyInfo } from './components/CompanyInfo'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <CoverImage />
        <Services />
        <Pricing />
        <CompanyInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
