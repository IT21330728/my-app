'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/cakes", label: "Cakes" },
    { href: "/party-food", label: "Party Food" },
    { href: "/event-planning", label: "Event Planning" },
    { href: "/decorations", label: "Decorations" },
    { href: "/photography", label: "Photography" },
  ]

  return (
    <header className="bg-pink-100 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600">TeamUp Events</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-pink-600 hover:text-pink-800">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex bg-pink-500 text-white hover:bg-pink-600">
          <Link href="/contact">Contact Us</Link>
        </Button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-pink-600" /> : <Menu className="h-6 w-6 text-pink-600" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block px-4 py-2 text-pink-600 hover:bg-pink-200">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button variant="outline" className="w-full bg-pink-500 text-white hover:bg-pink-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
