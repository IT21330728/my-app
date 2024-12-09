import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import AddToCartButton from '@/components/AddToCartButton'

export const metadata: Metadata = {
  title: 'Event Planning | TeamUp Events',
  description: 'Let us handle the details of your special day with our event planning services.',
}

const eventPlanningPackages = [
  {
    title: 'Basic Package',
    description: 'Perfect for small events',
    price: '$499',
  },
  {
    title: 'Premium Package',
    description: 'Ideal for medium-sized events',
    price: '$999',
  },
  {
    title: 'Deluxe Package',
    description: 'For large, elaborate events',
    price: '$1999',
  },
]

export default function EventPlanningPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Event Planning</h1>
      <p className="text-lg mb-8">
        Our experienced team can handle all aspects of your event, from concept to execution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventPlanningPackages.map((pkg, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pkg.title}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-pink-600">{pkg.price}</p>
            </CardContent>
            <CardFooter>
              <AddToCartButton item={pkg} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

