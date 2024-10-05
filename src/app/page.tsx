import BentoBox from "@/components/BentoBox";
import GraduationCertificate from "@/components/GraduationCertificate";
import Hero from "@/components/Hero";
import MeetYourMentors from "@/components/MeetYourMentors";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import Premium from "@/components/Premium";

export default function Home() {
  return (
    <div className="bg-black">
      <div className=" h-screen hero flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-black flex text-white flex-col gap-32 w-[70%] mx-auto">
        <Mentors />
        <BentoBox />
        <MeetYourMentors />
        <GraduationCertificate />
      </div>
      <Premium />
    </div>
  );
}
