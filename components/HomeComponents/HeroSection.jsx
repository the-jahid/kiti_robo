import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
      <section className='bg-primary_background w-full'>
        <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
             <Image src={'/assets/Kiti1.png'}  width={700} height={600} className='backdrop-blur' alt='kiti_hero_Image' />
          </div>
          <div className='max-w-2xl' >
            <h1 className="text-5xl font-bold"><span className='text-deep_blue'>Your Favorite</span> <span className='text-secondary' >Food</span> <span className='text-primary' >Delivery Assistant</span></h1>
            <p className="py-6">Introducing Kiti, the smart food delivery assistant in town. Kiti is a state-of-the-art robot that seamlessly connects restaurants with customers. With its cutting-edge technology, Kiti can efficiently receive orders from local eateries and navigate through bustling streets to deliver fresh and hot meals directly to your doorstep.</p>
           <Button className='bg-primary' >Order Now</Button>
          </div>
        </div>
      </div>
      </section>
  )
}

export default HeroSection