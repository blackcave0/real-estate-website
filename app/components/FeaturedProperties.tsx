import PropertyCard from './PropertyCard'

const featuredProperties = [
  {
    id: 1,
    projectName: 'Lucknow Development Authority',
    propertyType: 'Plot',
    status: 'available',
    facing: 'East',
    length: 80,
    breadth: 40,
    totalArea: 3200,
    plusPoint: 'Divider Facing',
    floor: 'N/A',
    pricePerSqft: 7000,
    // totalAmount: 600000,
    owner: 'Owner',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369771/IMG-20241231-WA0002_o2fyz0.jpg',
    location : 'Lucknow'
  },
  {
    id: 2,
    projectName: 'Lucknow Development Authority',
    propertyType: 'Plot',
    status: 'available',
    facing: 'South',
    length: 80,
    breadth: 39,
    totalArea: 3100,
    plusPoint: 'Divider Facing',
    floor: 'N/A',
    pricePerSqft: 7200,
    // totalAmount: 600000,
    owner: 'Owner',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369821/IMG-20241231-WA0010_k7phlk.jpg',
    location : 'Lucknow'
  },
  {
    id: 3,
    projectName: 'Lucknow Development Authority',
    propertyType: 'Plot',
    status: 'available',
    facing: 'South',
    length: 40,
    breadth: 20,
    totalArea: 1600,
    plusPoint: 'Divider Facing ',
    floor: 'N/A',
    pricePerSqft: 10000,
    // totalAmount: 450000,
    owner: 'Owner',
    image: 'https://res.cloudinary.com/do1sonzbq/image/upload/v1736369826/WhatsApp_Image_2024-12-30_at_20.38.12_26e13a86_uoqf7d.jpg',
    location : 'Lucknow'
  },

]

export default function FeaturedProperties() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}

