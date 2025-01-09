'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Home, DollarSign, IndianRupee, MapPin } from 'lucide-react'

export default function SearchForm() {
  const router = useRouter()
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const searchParams = new URLSearchParams({
      location,
      propertyType,
      priceRange,
    })
    router.push(`/properties?${searchParams.toString()}`)
  }

  return (
    <Card className="bg-white shadow-lg mt-[-50px] relative z-20">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Location (city, neighborhood)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="pl-10 w-full">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="pl-10 w-full">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500000">&#8377;0 - &#8377;500,000</SelectItem>
                  <SelectItem value="500000-1000000">&#8377;500,000 - &#8377;1,000,000</SelectItem>
                  <SelectItem value="1000000-2000000">&#8377;1,000,000 - &#8377;2,000,000</SelectItem>
                  <SelectItem value="2000000+">&#8377;2,000,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button type="submit" className="w-full">
                <Search className="mr-2 h-4 w-4" /> Search Properties
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

