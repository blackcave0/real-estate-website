import PropertyListItem from './PropertyListItem'

async function getProperties(searchParams: { [key: string]: string | string[] | undefined }) {
  // In a real application, you would fetch this data from an API
  // For this example, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
  return [
    {
      id: 1,
      title: 'Modern Apartment in Downtown',
      type: 'Apartment',
      location: 'Downtown, City',
      price: 250000,
      bedrooms: 2,
      bathrooms: 2,
      size: 1000,
      features: ['Balcony', 'Parking'],
      description: 'A beautiful modern apartment in the heart of the city.',
    },
    // ... Add more properties here
  ]
}

export default async function PropertyList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const properties = await getProperties(searchParams)

  return (
    <div className="mt-8">
      {properties.map((property) => (
        <PropertyListItem key={property.id} property={property} />
      ))}
    </div>
  )
}

