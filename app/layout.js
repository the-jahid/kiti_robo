import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ReduxProvider } from "./ReduxProvider";
import { Toaster } from "react-hot-toast";
import { getUserProfile } from "@/utils/object-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  const user = getUserProfile();

  if(user !== null ) {
    window.location.reload();
  }

  return (
    <ReduxProvider>
    <html lang="en">
      <body className={inter.className}  >
        <Navbar />
        <main  >
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
    </ReduxProvider>
 
  );
}