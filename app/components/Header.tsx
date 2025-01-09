import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Real Estate Co.
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/properties" className="text-gray-600 hover:text-gray-800">Properties</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

