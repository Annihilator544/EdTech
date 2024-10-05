import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import heroAvatars from '../images/heroAvatars.svg';
import bend from '../images/bend.svg';
function Hero() {
  return (
    <div className="flex-1 mx-auto gap-6 flex flex-col">
      <p className=" text-6xl max-lg:text-4xl font-semibold text-white text-center mt-auto">Unlock Your Full Potential</p>
      <p className=" text-6xl max-lg:text-4xl font-semibold text-white text-center">with Smart Learning</p>
      <p className=" text-xs  text-[#FFFFFF60] font-medium text-center">Premium courses from Premium specialists of Top companies.</p>
      <button className=' bg-gradient-to-b from-[#fdfdfd] to-[#e1e1e1] bg-white mx-auto font-medium text-[#0C0C0C] px-4 py-2 flex gap-1 rounded-full text-xs'>Explore Courses <ArrowRight height={16} strokeWidth={3}/> </button>
      <div className="flex flex-col gap-2">
        <Image src={heroAvatars} alt="hero-avatars" className="mx-auto" />
        <p className=" text-xs  text-[#FFFFFF60] text-center">Over 1500+ students</p>
      </div>
      <Image src={bend} alt="bend" className="mx-auto" />
    </div>
  );
}   
export default Hero;