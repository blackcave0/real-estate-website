'use client'

// import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { notFound, useParams } from 'next/navigation'
import { properties } from '@/app/data/properties'
import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

// In a real application, you would fetch this data from an API

export default function PropertyDetails({ params }: { params: { id: string } }) {

  const id = useParams().id
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // const property = await getProperty(params.id)

  const property = properties.find(p => p.id === id)
 /*  if (!property) {
    return null
  } */

  if (!property) {
    notFound()
  }

  return (
    <div className="container mt-[80px] md:mt-[100px] lg:mt-[80px] mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">{property.projectName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <div>
          <Image
            src={property.images[0]}
            alt={property.projectName}
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
          <div className="grid grid-cols-4 gap-4 mt-4">
            {property.images.slice(1).map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${property.projectName} - Image ${index + 2}`}
                width={200}
                height={150}
                className="rounded-lg shadow-md"
              />
            ))}
          </div> */}
          <div className="container mx-auto px-4">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main large image */}
              <div
                className="relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(property.images[0])}
              >
                <img
                  src={property.images[0]}
                  alt={`${property.projectName} - 1`}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Thumbnail row */}
              <div className="grid grid-cols-4 gap-4">
                {property.images.slice(1).map((image: string, index: number) => (
                  <div
                    key={index}
                    className="relative cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${property.projectName} - ${index + 2}`}
                      className="w-full h-[100px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-2">{property.propertyType} - {property.status}</p>
          {/* <p className="text-3xl font-bold mb-4 text-blue-600">${property.totalAmount.toLocaleString()}</p> */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p><strong>Facing:</strong> {property.facing}</p>
              <p><strong>Dimensions:</strong> {property.length}x{property.breadth}</p>
              <p><strong>Total Area:</strong> {property.totalArea} sqft</p>
              <p><strong>Floor:</strong> {property.floor}</p>
            </div>
            <div>
              <p><strong>Price/sqft:</strong> &#8377;{property.pricePerSqft}</p>
              <p><strong>Plus Point:</strong> {property.plusPoints}</p>
              <p><strong>Listed by:</strong> {property.owner}</p>
              {/* <p><strong>Location:</strong> {property.location.city}, {property.location.neighborhood}</p> */}
              <p><strong>Location:</strong> {property.location}</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Description</h2>
          <p className="text-gray-700 mb-6">{property.description}</p>
          <Button className="w-full">Contact Agent</Button>
        </div>      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0  bg-black bg-opacity-90 z-100 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-20 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Property"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  )
}

