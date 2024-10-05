import Image from "next/image";
import whoweare from '../images/whoweare.svg'

function WhoWeAre() {
  return (
    <div className="bg-[#0d0d0d] rounded-2xl p-6 grid grid-cols-2 max-lg:grid-cols-1">
      <Image src={whoweare} alt="Who We Are" />
      <div className="flex flex-col gap-4">
        <div className="bg-[#141414] rounded-2xl p-8"> <p className=" text-lg">Digistar is a center where modern professions such as programming, design and marketing are taught. A place, with the help of modern professions, improving human life and strengthens confidence in the future.</p></div>
        <div className="bg-[#141414] rounded-2xl p-8"><p className=" text-[72px] max-lg:text-5xl font-semibold">№1</p><p className="text-base text-[#FFFFFF99] mt-10">In terms of education quality. According to the rating of Smart Ranking.</p></div>
        <div className="bg-[#141414] rounded-2xl p-8"><p className=" text-[72px] max-lg:text-5xl font-semibold">12 years</p><p className="text-base text-[#FFFFFF99] mt-10">Have been teaching students from 50+ countries across the world.</p></div>
        <div className="bg-[#141414] rounded-2xl p-8"><p className=" text-[72px] max-lg:text-5xl font-semibold">20,000+</p><p className="text-base text-[#FFFFFF99] mt-10">Students have graduated so far.</p></div>
        <div className="bg-[#141414] rounded-2xl p-8"><p className=" text-[72px] max-lg:text-5xl font-semibold">75.8%</p><p className="text-base text-[#FFFFFF99] mt-10">Graduates have found demanding professions and have been building their career.</p></div>
        <div className="bg-[#141414] rounded-2xl p-8"><p className=" text-[72px] max-lg:text-5xl font-semibold">24/7</p><p className="text-base text-[#FFFFFF99] mt-10">Support group is ready to help you if you have questions during the course.</p></div>
      </div>
    </div>
  );
}

export default WhoWeAre;