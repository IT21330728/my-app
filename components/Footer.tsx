import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-pink-100 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-pink-600 hover:text-pink-800">About Us</Link></li>
              <li><Link href="/services" className="text-pink-600 hover:text-pink-800">Our Services</Link></li>
              <li><Link href="/gallery" className="text-pink-600 hover:text-pink-800">Event Gallery</Link></li>
              <li><Link href="/contact" className="text-pink-600 hover:text-pink-800">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">Contact Information</h3>
            <p className="text-pink-600">123 Event Street, Singapore 123456</p>
            <p className="text-pink-600">Phone: +65 1234 5678</p>
            <p className="text-pink-600">Email: info@teamupevents.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-600 hover:text-pink-800"><Facebook /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><Instagram /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-pink-600">&copy; 2024 TeamUp Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

