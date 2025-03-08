'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent  z-[100]">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-rose-700 text-white p-3 rounded-md hover:bg-orange-900	">
            LuxeHomes
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent z-50`}>
            <NavigationMenu className="w-full md:w-auto">
              <NavigationMenuList className="flex-col md:flex-row w-full md:w-auto">
                <NavigationMenuItem className="w-full md:w-auto">
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full md:w-auto">
                  <NavigationMenuTrigger >Properties</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 no-underline outline-none focus:shadow-md"
                            href="/properties/AllProperties"
                          
                          >
                            <div className="mt-4 text-lg font-medium text-white">
                              Explore Properties
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Discover your perfect home from our wide selection.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className=" block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 pointer-events-none focus:bg-slate-100"
                            href="/properties?type=apartment"
                          
                          >
                            <div className="text-sm font-medium leading-none">Apartments</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              Modern living spaces in the heart of the city.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 pointer-events-none focus:bg-slate-100"
                            href="/properties?type=house"
                          >
                            <div className="text-sm font-medium leading-none">Houses</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              Spacious family homes with private gardens.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 pointer-events-none focus:bg-slate-100"
                            href="/properties?type=villa"
                          >
                            <div className="text-sm font-medium leading-none">Villas</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              Luxurious retreats for the discerning buyer.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full md:w-auto">
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full md:w-auto">
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Mobile Buttons */}
            <div className="flex flex-col md:hidden space-y-2 p-4">
              <Button variant="outline" className="w-full">Login</Button>
              <Button className="w-full">Add Listing</Button>
            </div>
          </div>

            {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login"  >
              <Button variant='outline'>
                Login
              </Button>
            </Link>

            <Link href='/register'>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )}
