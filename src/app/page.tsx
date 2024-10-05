import BentoBox from "@/components/BentoBox";
import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className=" h-screen hero flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-black">
        <Mentors />
        <BentoBox />
      </div>
    </div>
  );
}
