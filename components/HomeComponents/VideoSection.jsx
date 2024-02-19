import React from 'react'

const VideoSection = () => {
  return (
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Kiti - Redefining Dining: <br /> <span className='text-primary' >Fast, Fresh, and Futuristic</span></h1>
      <p className="py-6">Its encapsulates the essence of our food delivery robot. Firstly, Fast signifies the unparalleled speed at which Kiti operates, ensuring swift deliveries that match the pace of modern lifestyles. Fresh emphasizes our commitment to delivering meals made from locally sourced ingredients, guaranteeing a farm-to-fork experience. The term Futuristic embodies Kiti s cutting-edge technology, featuring advanced navigation systems and sensors for a seamless, efficient, and secure delivery process.</p>
      <button className="btn btn-primary   ">Learn More About kiti </button>
    </div>
  </div>
</div>
  )
}

export default VideoSection