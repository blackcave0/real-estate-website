import Link from 'next/link'
import PropertyCard from './PropertyCard'



const newListings = [
  {
    id: 4,
    projectName: 'Lucky Development Authority',
    propertyType: 'House',
    status: 'Ready to Move',
    facing: 'South',
    length: 40,
    breadth: 14,
    totalArea: 560,
    plusPoint: 'N/A',
    floor: 2,
    pricePerSqft: 8000,
    owner: 'Owner',
    location : 'Lucknow',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369829/IMG-20250109-WA0013_is1suv.jpg',
  },
  {
    id: 5,
    projectName: 'Luccky Development Authority',
    propertyType: 'House',
    status: 'Ready to Move',
    facing: 'East',
    length: 30,
    breadth: 11,
    totalArea: 330,
    plusPoint: 'N/A',
    floor: 3,
    pricePerSqft: 9100,
    // totalAmount: 600000,
    owner: 'Owner',
    location : 'Lucknow',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369841/WhatsApp_Image_2024-12-30_at_20.39.03_a40a3219_fithh8.jpg'
  },
  {
    id: 6,
    projectName: 'Society/Commercial',
    propertyType: 'Plot',
    status: 'available',
    facing: 'East',
    length: 60,
    breadth: 15,
    totalArea: 900,
    plusPoint: '30 ft. Road',
    floor: 'N/A',
    pricePerSqft: 4000,
    // totalAmount: 2100000,
    owner: 'Owner',
    location : 'Lucknow',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369838/WhatsApp_Image_2024-12-30_at_20.39.32_f832af83_zi0cst.jpg'
  },
  {
    id: 7,
    projectName: 'Society',
    propertyType: 'Plot',
    status: 'available',
    facing: 'West',
    length: 48,
    breadth: 25,
    totalArea: 2400,
    plusPoint: '2 Plot 1200 + 1200',
    floor: 'N/A',
    pricePerSqft: 2700,
    // totalAmount: 1080000,
    owner: 'Owner',
    location : 'Lucknow',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369844/WhatsApp_Image_2024-12-30_at_20.39.55_9d092d4b_ug49ka.jpg'
  },
  {
    id: 8,
    projectName: 'Society',
    propertyType: 'Plot',
    status: 'available',
    facing: 'East-South',
    length: 60,
    breadth: 47,
    totalArea: 2820,
    plusPoint: 'N/A',
    floor: 'N/A',
    pricePerSqft: 2800,
    // totalAmount: 1361250,
    owner: 'Owner',
    location : 'Lucknow',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369847/WhatsApp_Image_2024-12-30_at_20.40.18_4208093d_d4nvze.jpg'
  },
  {
    id: 9,
    projectName: 'Society',
    propertyType: 'Plot',
    status: 'available',
    facing: 'South',
    length: 62,
    breadth: 35,
    totalArea: 4304,
    plusPoint: 'Divider Facing',
    floor: 'N/A',
    pricePerSqft: 10000,
    // totalAmount: 1361250,
    owner: 'Owner',
    location : 'Lucknow',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369850/WhatsApp_Image_2024-12-30_at_20.40.52_be3d3376_txyjxy.jpg'
  },

]
export default function NewListings() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">New Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newListings.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/properties/AllProperties"  className="bg-gray-300 pointer-events-none text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          View More
        </Link >
      </div>
    </section>
  )
}
