import { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Us | TeamUp Events',
  description: 'Get in touch with TeamUp Events for all your event planning needs.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Contact Us</h1>
      <p className="text-lg mb-8">
        Have questions or ready to start planning your event? We're here to help! Fill out the form below, 
        and one of our team members will get back to you shortly.
      </p>
      <Contact />
    </div>
  )
}

