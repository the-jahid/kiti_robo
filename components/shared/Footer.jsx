import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Footer = () => {
    return (
        <footer className='bg-[#D9D9D9] p-5 px-10 ' >
            <div className='flex justify-between flex-col md:flex-row space-y-5  ' >
                <div className=' mx-auto   md:mx-0 space-y-2 ' >
                    <p className='text-primary text-lg font-semibold' >Developed By</p>
                    <Image src={'/assets/Robotics_Lab_logo.png'} width={200} height={200} alt='footer_logo' />
                    <Image src={'/assets/diu_logo.png'} width={200} height={200} alt='footer_logo' />
                    
                </div>
                <div>
                    <h2 className="font-bold text-deep_blue ">Service</h2>
                    <nav className="text-black font-semibold list-none">
                        <li>
                            <Link href={'/'} >Online Order</Link>
                        </li>
                        <li>
                             <Link href={'/'} >Smart Delivery</Link>
                        </li>
                        <li>
                        <Link href={'/'} >Easy Delivery</Link>
                        </li>
                       
                    </nav>
                </div>
                <div>
                    <h2 className="font-bold text-deep_blue ">Kiti</h2>
                    <nav className="text-black font-semibold list-none">
                        <li>
                            <Link href={'/'} >Home</Link>
                        </li>
                        <li>
                             <Link href={'/'} >Menu</Link>
                        </li>
                        <li>
                        <Link href={'/'} >About Us</Link>
                        </li>
                       
                    </nav>
                </div>
                
                <div className='space-y-3' >
                    <h2 className="font-bold text-deep_blue ">Share Your Thoughts</h2>

                    <div className='space-y-2' >
                        <p>Give Feedback</p>
                        <div className='flex space-x-2 flex-wrap space-y-4 ' >
                            <input type="text" name="feedback" placeholder='Type Here' className='border p-2' />
                            <Button>Submit</Button>
                        </div>
                    </div>  
                </div>

            </div>

            <div>
            </div>
        </footer>
    )
}

export default Footer;
