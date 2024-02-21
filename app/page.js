import HeroSection from "@/components/HomeComponents/HeroSection";
import Services from "@/components/HomeComponents/Services";

import TopSell from "@/components/HomeComponents/TopSell";
import VideoSection from "@/components/HomeComponents/VideoSection";
import { getUserProfile } from "@/utils/object-utils";

export default function Home() {
  
 
  return (
      <main className="bg-gradient-to-tl from-indigo-50 to-blue-200  " >
        <HeroSection />
        <TopSell />
        <Services />
        <VideoSection />
      </main>
  );
}
