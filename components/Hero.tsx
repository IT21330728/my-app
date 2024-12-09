import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-pink-200 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">Your One-Stop Event Solution</h1>
          <p className="text-xl md:text-2xl mb-8 text-pink-800">From cakes to decorations, we've got your event covered!</p>
          <Button className="bg-pink-500 text-white hover:bg-pink-600 text-lg px-8 py-3">Start Planning</Button>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/placeholder.svg?height=400&width=600" 
            alt="Event celebration" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

