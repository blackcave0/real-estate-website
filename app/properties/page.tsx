import { Suspense } from 'react'
import SearchForm from '../components/SearchForm'
import PropertyList from '../components/PropertyList'
import { Skeleton } from '@/components/ui/skeleton'

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Property Listings</h1>
      <SearchForm />
      <Suspense fallback={<PropertyListSkeleton />}>
        <PropertyList searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

function PropertyListSkeleton() {
  return (
    <div className="mt-8 space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  )
}

