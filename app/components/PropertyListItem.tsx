import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Property {
  id: number
  title: string
  type: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  size: number
  features: string[]
  description: string
}

export default function PropertyListItem({ property }: { property: Property }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-2">{property.title}</h2>
      <p className="text-gray-600 mb-2">{property.type} in {property.location}</p>
      <p className="text-gray-800 font-bold mb-4">${property.price.toLocaleString()}</p>
      <div className="flex justify-between mb-4">
        <span>{property.bedrooms} Bedrooms</span>
        <span>{property.bathrooms} Bathrooms</span>
        <span>{property.size} sqft</span>
      </div>
      <p className="text-gray-700 mb-4">{property.description}</p>
      <div className="mb-4">
        <strong>Features:</strong> {property.features.join(', ')}
      </div>
      <Link href={`/properties/${property.id}`}>
        <Button>View Details</Button>
      </Link>
    </div>
  )
}

