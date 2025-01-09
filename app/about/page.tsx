import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Users, Award, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">About LuxeHomes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2003, LuxeHomes has been at the forefront of luxury real estate for nearly two decades. Our journey began with a simple yet powerful vision: to redefine the real estate experience for discerning clients seeking exceptional properties.
          </p>
          <p className="text-gray-600">
            Today, we're proud to be recognized as a leader in the luxury real estate market, known for our unparalleled expertise, exclusive listings, and commitment to client satisfaction.
          </p>
        </div>
        <div className="relative h-96">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="LuxeHomes Office"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Building, title: "Excellence", description: "We strive for excellence in every aspect of our service." },
            { icon: Users, title: "Client-Centric", description: "Our clients' needs and satisfaction are at the heart of everything we do." },
            { icon: Award, title: "Integrity", description: "We operate with the highest standards of professionalism and ethics." },
            { icon: Zap, title: "Innovation", description: "We continuously innovate to provide cutting-edge solutions." },
          ].map((value, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center">
                <value.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Skyline Residences", location: "New York City", image: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80" },
            { name: "Oceanfront Villas", location: "Miami Beach", image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
            { name: "Mountain View Chalets", location: "Aspen", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
          ].map((project, index) => (
            <Card key={index} className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <Badge variant="secondary">{project.location}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

