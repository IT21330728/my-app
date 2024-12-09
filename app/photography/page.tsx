import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import AddToCartButton from '@/components/AddToCartButton'

export const metadata: Metadata = {
  title: 'Photography Services | TeamUp Events',
  description: 'Capture your special moments with our professional photography services.',
}

const photographyServices = [
  {
    title: 'Wedding Photography',
    description: 'Capture every moment of your special day',
    price: '$1999',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Event Photography',
    description: 'Professional photos for corporate events and parties',
    price: '$799',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Portrait Session',
    description: 'Individual or family portrait sessions',
    price: '$299',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Product Photography',
    description: 'Showcase your products with high-quality images',
    price: '$499',
    image: '/placeholder.svg?height=300&width=400'
  }
]

export default function PhotographyPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Photography Services</h1>
      <p className="text-lg mb-8 text-gray-600">
        Our professional photographers will capture every special moment of your event. From weddings to corporate events, 
        we offer a range of photography services to meet your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photographyServices.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pink-600">{service.price}</span>
              <AddToCartButton item={service} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

