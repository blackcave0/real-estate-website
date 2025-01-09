import { Check, Award, Home, Users, Star, Building, DollarSign } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function TrustAndInfo() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Why Choose LuxeHomes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="w-10 h-10 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">Trusted Expertise</h3>
              </div>
              <p className="text-gray-600">With over 20 years of experience in the luxury real estate market, our expert agents ensure you find the perfect property.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Home className="w-10 h-10 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">Exclusive Listings</h3>
              </div>
              <p className="text-gray-600">Gain access to a curated selection of high-end properties, including off-market listings and exclusive developments.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="w-10 h-10 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">Personalized Service</h3>
              </div>
              <p className="text-gray-600">Experience white-glove service tailored to your individual needs, from property search to closing and beyond.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-blue-600">Our Commitment to Excellence</h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            At LuxeHomes, we're committed to providing an unparalleled real estate experience. Our platform combines cutting-edge technology with personalized service to make your property journey seamless and enjoyable.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-blue-600">What Sets Us Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Building className="w-16 h-16 text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Premium Properties</h4>
              <p className="text-gray-600">Access to the most luxurious and exclusive properties in prime locations.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="w-16 h-16 text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">5-Star Service</h4>
              <p className="text-gray-600">Dedicated support and personalized attention throughout your entire journey.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <DollarSign className="w-16 h-16 text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Investment Opportunities</h4>
              <p className="text-gray-600">Expert advice on high-yield investment properties and market trends.</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-blue-600">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">"LuxeHomes provided an exceptional service in helping us find our dream home. Their attention to detail and personalized approach made all the difference."</p>
                <p className="font-semibold">- Sarah & John Thompson</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">"As an investor, I've worked with many real estate companies, but LuxeHomes stands out for their market knowledge and exclusive opportunities."</p>
                <p className="font-semibold">- Michael Chen, Real Estate Investor</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
            {['Forbes', 'Wall Street Journal', 'Bloomberg', 'Financial Times'].map((publication) => (
              <div key={publication} className="text-gray-400 font-semibold text-lg">
                {publication}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

