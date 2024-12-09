import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import AddToCartButton from '@/components/AddToCartButton'

export const metadata: Metadata = {
  title: 'Party Food | TeamUp Events',
  description: 'Explore our delicious party food options for your next event.',
}

const partyFoodOptions = [
  {
    title: 'Finger Food Platter',
    description: 'A variety of bite-sized snacks perfect for mingling',
    price: '$149',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Gourmet Buffet',
    description: 'A selection of hot and cold dishes for a full meal',
    price: '$299',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Dessert Bar',
    description: 'An assortment of sweet treats to delight your guests',
    price: '$199',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'BBQ Package',
    description: 'Grilled favorites for outdoor events',
    price: '$249',
    image: '/placeholder.svg?height=300&width=400'
  }
]

export default function PartyFoodPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Party Food</h1>
      <p className="text-lg mb-8 text-gray-600">
        From finger foods to full meals, we offer a wide range of catering options for all types of events. 
        Our expert chefs use only the freshest ingredients to create delicious dishes your guests will love.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partyFoodOptions.map((option, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{option.title}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={option.image}
                alt={option.title}
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pink-600">{option.price}</span>
              <AddToCartButton item={option} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

