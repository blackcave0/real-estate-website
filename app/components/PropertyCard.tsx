import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Property {
  id: number
  projectName: string
  propertyType: string
  status: string
  facing: string
  length: number
  breadth: number
  totalArea: number
  plusPoint: string
  floor: string | number
  pricePerSqft: number
  // totalAmount: number
  owner: string
  image: string
  location: string
}

export default function PropertyCard({ property }: { property: Property }) {


  const totalAmount = property.totalArea * property.pricePerSqft

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(2)} L`;
    } else {
      return price.toString();
    }
  }

  return (
    <Card className="overflow-hidden">
      <Image
        src={property.image}
        alt={property.projectName}
        width={400}
        height={300}
        className="w-full h-[300px] md:h-[400px] lg:h-[400px] object-cover transition-transform duration-200 ease-in-out hover:scale-105"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.projectName}</h3>
        <Badge variant="secondary" className="mb-2">{property.propertyType}</Badge>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p><strong>Status:</strong> {property.status}</p>
          <p><strong>Facing:</strong> {property.facing}</p>
          <p><strong>Dimensions:</strong> {property.length}x{property.breadth}</p>
          <p><strong>Total Area:</strong> {property.totalArea} sqft</p>
          <p><strong>Floor:</strong> {property.floor}</p>
          <p><strong>Price/sqft:</strong> &#8377;{property.pricePerSqft}</p>
        </div>
        <p className="mt-2"><strong>Plus Point:</strong> {property.plusPoint}</p>
        {/* <p><strong>Location:</strong> {property.location.city}, {property.location.neighborhood}</p> */}

        <p className="text-blue-600 font-bold text-xl mt-2"> &#8377;{formatPrice(totalAmount)}</p>
        <p className="text-sm text-gray-600">Listed by: {property.owner}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/properties/${property.id}`} className="w-full">
          <Button className="w-full">Explore</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

