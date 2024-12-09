import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import AddToCartButton from '@/components/AddToCartButton'

export const metadata: Metadata = {
  title: 'Decorations | TeamUp Events',
  description: 'Transform your venue with our decoration services.',
}

const decorationPackages = [
  {
    title: 'Rustic Charm',
    description: 'Perfect for outdoor and barn weddings',
    price: '$599',
  },
  {
    title: 'Elegant Affair',
    description: 'Ideal for formal events and galas',
    price: '$899',
  },
  {
    title: 'Whimsical Wonder',
    description: 'Great for children\'s parties and fun celebrations',
    price: '$499',
  },
]

export default function DecorationsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Decorations</h1>
      <p className="text-lg mb-8">
        Create the perfect atmosphere for your event with our wide range of decoration options.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {decorationPackages.map((pkg, index) => (
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

