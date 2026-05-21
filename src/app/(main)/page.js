import HeroBanner from "@/component/home/HeroBanner";
import Stats from "@/component/home/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#eef4ed] font-sans ">
        
        <HeroBanner></HeroBanner>
        <Stats ></Stats>
    </div>
  );
}
