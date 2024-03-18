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
            <p className="py-6">Introducing KITI Autonomous Delivery Robot! We&apos;re here to transform the delivery system, making it easier and more convenient for our customers. KITI&apos;s delivery service provides a smart, handy, and eco-friendly solution by using self-driving robots to deliver both food and packages. Our smart robot autonomously navigates busy streets to deliver packages directly to your door. With KITI, you receive quick, safe delivery hassle-free. Plus, we&apos;re committed to saving money and the planet by reducing delivery costs and emissions. Say hello to the future of delivery with KITI — where smart ideas and innovation come together to make your life easier.</p>
           <Button className='bg-primary' >Order Now</Button>
          </div>
        </div>
      </div>
      </section>
  )
}

export default HeroSection