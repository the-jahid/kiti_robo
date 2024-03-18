import React from 'react'

const VideoSection = () => {
  return (
    <div className="hero min-h-screen ">
 <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
  <iframe className="w-full lg:w-1/2 h-80" src="https://www.youtube.com/embed/-F44gs0AAzA?si=akncTMXLRuiiG-0T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div className="text-center lg:text-left lg:w-1/2 px-4">
    <h1 className="text-5xl font-bold">Kiti - the Future of Dining! </h1>
    <p className="py-6">We&apos;re here to shake up the food delivery scene, offering speed, freshness, and a touch of futuristic flair. With Kiti, you&apos;ll experience a whole new level of service. We&apos;ve got all the tech bells and whistles, from easy tracking to seamless delivery. Safety is our top priority too, thanks to advanced sensors and top-notch navigation. Our contactless delivery option provides a solution for those prioritizing germ-free transactions, ensuring a seamless and hygienic experience for all customers. Fast, fresh, and oh-so-futuristic, Kiti is all about bringing innovation to your doorstep, guaranteeing speedy, top-quality meals every time</p>
    <button className="btn btn-primary">Learn More About kiti </button>
  </div>
</div>
</div>
  )
}

export default VideoSection