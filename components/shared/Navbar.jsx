'use client'

// Import necessary components and utilities
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./NavItems";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AuthPage from "@/app/(auth)/authpage/page";
import { getUserProfile, signOut } from "@/utils/object-utils";
import { FaSignOutAlt } from "react-icons/fa";

// Define the Navbar component
const Navbar = () => {
    // Get the user profile from local storage
    const user =  JSON.parse(getUserProfile());

    

    // Return the Navbar component
    return (
        <nav className="flex justify-between backdrop-blur-md items-center md:px-10 sticky top-0 drop-shadow-md z-10 ">
            <Image src={'/assets/Kiti-Logo.png'} width={200} height={200} alt="logo" />

            <div className="hidden md:block text-lg font-normal">
                <NavItems />
            </div>

            {/* If user is not logged in, show Login/SignUp button. Otherwise, show user's first name and Signout button */}
            { user == null ?   
                <Button className="btn bg-primary " onClick={() => document.getElementById('my_modal_oo').showModal()}>Login/SignUp</Button>
                : 
                <div className="flex space-x-2 items-center" >
                    <p className="font-semibold" >{user.first_name}</p>
                    <button onClick={() => signOut()} className='bg-primary flex space-x-2 items-center justify-center p-2 rounded-md ' >
                        <FaSignOutAlt />
                        <p>Signout</p>
                    </button>
                </div> 
            }

            {/* Dialog for Login/Signup */}
            <dialog id="my_modal_oo" className=" mx-auto rounded-md bg-white p-10 relative ">
                <form method="dialog" className=" absolute  right-2 top-2 " >
                    <button className="btn btn-sm btn-circle btn-ghost absolute  right-2 top-2">✕</button>
                </form>

                <Tabs defaultValue="login" >
                    <TabsList className="grid w-full grid-cols-2 ">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Signup</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <AuthPage login={true} />
                    </TabsContent>
                    <TabsContent value="signup">
                        <AuthPage  />
                    </TabsContent>
                </Tabs>
            </dialog>

            {/* Mobile navigation */}
            <div className="md:hidden" >
                <Sheet>
                    <SheetTrigger>
                        <Image src={'/assets/menu.png'} width={40} height={40} alt="menubar_log" />
                    </SheetTrigger>
                    <SheetContent>
                        <NavItems  />
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default Navbar