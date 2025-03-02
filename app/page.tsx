import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import MedicalReportAnalyzer from '@/components/MedicalReportAnalyzer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <div className="mt-16">
          <MedicalReportAnalyzer />
        </div>
      </main>

      <Footer />
    </div>
  )
}
