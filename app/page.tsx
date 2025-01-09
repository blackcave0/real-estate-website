import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SearchForm from './components/SearchForm'
import FeaturedProperties from './components/FeaturedProperties'
import NewListings from './components/NewListings'
import TrustAndInfo from './components/TrustandInfo'

export default function Home() {
  return (
    <div>
      <section className="relative h-[100vh] max-sm:h-[70vh] flex items-center justify-center">
        <Image
          // src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          src="https://res.cloudinary.com/do1sonzbq/image/upload/v1736283832/house-project/asset-background.svg"
          alt="Luxury Home"
          fill
          style={{objectFit: "cover"}}
          priority
        />
        {/* removing the bg-black bg-opacity-50 from the div below */}
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-center text-gray-950 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-4 max-sm:mx-10 md:mx-30 lg:mx-35 xl:mx-40">Get the ideal home for your family</h1>
          <p className="text-xl md:text-2xl mb-8 mx-4">Luxury Living Redefined: Where Comfort Meets Elegance</p>          <Button size="lg" className="text-lg px-8 py-6">Explore Properties</Button>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <SearchForm />
        <FeaturedProperties />
        <TrustAndInfo />
        <NewListings />
      </div>
    </div>
  )
}

