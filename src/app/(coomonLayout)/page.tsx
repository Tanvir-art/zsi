import FAQ from "../components/Faq"
import Hero from "../components/Hero"
import QuickPriceCheck from "../components/QuickPrice"
import SatisfiedClients from "../components/Slider"

const page = () => {
  return (
    <div>
      <Hero />
      <QuickPriceCheck />
      <FAQ />
      <SatisfiedClients />
    </div>
  )
}

export default page
