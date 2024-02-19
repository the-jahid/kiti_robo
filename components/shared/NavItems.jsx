'use client'
import { getUserProfile } from "@/utils/object-utils";
import Link from "next/link";
import { useSelector } from "react-redux";

const NavItems = () => {

    
    // Get the user profile from local storage
    const user =  JSON.parse(getUserProfile());
    const {loggedin} = useSelector(state => state.users)
     
    
    return (
        <ul className="flex flex-col md:flex-row   md:space-x-4 items-center  " >
            <li><Link href={'/'} >Home</Link></li>
            <li><Link href={'/about'} >About Us</Link></li>
            <li><Link href={'/food-items'} >Food Items</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            { user !== null  && <li><Link href={'/dashboard'}>Dashboard</Link></li>}
        </ul>
    )
}

export default NavItems;