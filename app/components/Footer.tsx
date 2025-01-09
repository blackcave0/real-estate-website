import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Real Estate Co.</h2>
            <p className="text-gray-400">Find your dream property with us.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/properties" className="hover:text-gray-300">Properties</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Real Estate Street</p>
            <p className="text-gray-400">City, State 12345</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@realestate.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; 2023 Real Estate Co. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link> | 
            <Link href="/privacy" className="hover:text-gray-300 ml-2">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

