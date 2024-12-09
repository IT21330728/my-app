import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AddToCartButton from '@/components/AddToCartButton'

export const metadata: Metadata = {
  title: 'Custom Cakes | TeamUp Events',
  description: 'Explore our range of custom cakes for all occasions. From birthdays to weddings, we have the perfect cake for you.',
}

const cakeCategories = [
  { name: 'Birthday', description: 'Celebrate another year with our delicious birthday cakes' },
  { name: 'Wedding', description: 'Make your special day even sweeter with our elegant wedding cakes' },
  { name: 'Custom', description: 'Design your own unique cake for any occasion' },
  { name: 'Cupcakes', description: 'Perfect for parties and events, our cupcakes are a crowd-pleaser' },
]

const featuredCake = {
  name: 'Chocolate Delight',
  description: 'A rich, moist chocolate cake with layers of ganache and fresh berries',
  image: '/placeholder.svg?height=400&width=600',
  price: '$59.99',
}

const cakeGallery = [
  { name: 'Vanilla Dream', image: '/placeholder.svg?height=300&width=300', price: '$49.99' },
  { name: 'Strawberry Bliss', image: '/placeholder.svg?height=300&width=300', price: '$54.99' },
  { name: 'Lemon Zest', image: '/placeholder.svg?height=300&width=300', price: '$52.99' },
  { name: 'Red Velvet', image: '/placeholder.svg?height=300&width=300', price: '$56.99' },
  { name: 'Carrot Cake', image: '/placeholder.svg?height=300&width=300', price: '$53.99' },
  { name: 'Black Forest', image: '/placeholder.svg?height=300&width=300', price: '$57.99' },
]

export default function CakesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Custom Cakes</h1>
      <p className="text-lg mb-8 text-gray-600">
        Discover our delicious range of custom cakes, perfect for birthdays, weddings, and all special occasions. 
        Each cake is handcrafted with love and attention to detail, ensuring a memorable centerpiece for your celebration.
      </p>

      <Tabs defaultValue="Birthday" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          {cakeCategories.map((category) => (
            <TabsTrigger key={category.name} value={category.name}>{category.name}</TabsTrigger>
          ))}
        </TabsList>
        {cakeCategories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <Card>
              <CardHeader>
                <CardTitle>{category.name} Cakes</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Browse our selection of {category.name.toLowerCase()} cakes and find the perfect one for your occasion.</p>
              </CardContent>
              <CardFooter>
                <Button>View {category.name} Cakes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Featured Cake</h2>
        <Card className="flex flex-col md:flex-row">
          <Image
            src={featuredCake.image}
            alt={featuredCake.name}
            width={600}
            height={400}
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none md:w-1/2 object-cover"
          />
          <div className="p-6 md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">{featuredCake.name}</h3>
            <p className="text-gray-600 mb-4">{featuredCake.description}</p>
            <p className="text-xl font-bold text-pink-600 mb-4">{featuredCake.price}</p>
            <AddToCartButton item={featuredCake} />
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Our Cake Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cakeGallery.map((cake, index) => (
            <Card key={index}>
              <Image
                src={cake.image}
                alt={cake.name}
                width={300}
                height={300}
                className="rounded-t-lg w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{cake.name}</h3>
                <p className="text-lg font-bold text-pink-600">{cake.price}</p>
              </CardContent>
              <CardFooter>
                <AddToCartButton item={cake} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

