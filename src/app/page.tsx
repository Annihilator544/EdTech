import BentoBox from "@/components/BentoBox";
import Footer from "@/components/Footer";
import GraduationCertificate from "@/components/GraduationCertificate";
import Hero from "@/components/Hero";
import MeetYourMentors from "@/components/MeetYourMentors";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import Premium from "@/components/Premium";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <div className="bg-black  text-white">
      <div className="  hero flex flex-col gap-10">
        <Navbar />
        <Hero />
      </div>
      <div className="flex flex-col gap-32 w-[70%] mx-auto">
        <Mentors />
        <BentoBox />
        <MeetYourMentors />
        <GraduationCertificate />
      </div>
      <Premium />
      <WhoWeAre />
      <Footer />
    </div>
  );
}
