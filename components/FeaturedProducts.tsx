import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const products = [
  { name: 'Custom Birthday Cake', price: '$49.99', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Party Food Platter', price: '$79.99', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Decoration Package', price: '$149.99', image: '/placeholder.svg?height=200&width=300' },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image src={product.image} alt={product.name} width={300} height={200} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.price}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

