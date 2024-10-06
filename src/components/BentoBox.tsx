import BentoCard from "./customUi/BentoCard";
import bento1 from "../images/bento1.svg";
import bento2 from "../images/bento2.svg";
import bento3 from "../images/bento3.svg";
import bento4 from "../images/bento4.svg";
import bento5 from "../images/bento5.svg";
import bento6 from "../images/bento6.svg";
import bento7 from "../images/bento7.svg";
import bento8 from "../images/bento8.svg";
import bento9 from "../images/bento9.svg";

function BentoBox() {
  return (
    <>
    <div className="grid grid-rows-[14] grid-cols-8 gap-2 max-lg:hidden">
        <div className=" row-span-10 col-span-6 grid grid-cols-6 grid-rows-10 gap-2">
            <BentoCard string1="Graphic" string2="Design" courseNumber={12} imageSrc={bento1} className="col-span-2 row-span-6 flex flex-col" classNameImage="mt-auto" />
            <BentoCard string1="UX/UI" string2="Design" courseNumber={7} imageSrc={bento2} className="col-span-2 row-span-6 flex flex-col" classNameImage="mt-auto"/>
            <BentoCard string1="Web" string2="Development" courseNumber={9} imageSrc={bento3} className="col-span-2 row-span-6 flex flex-col" classNameImage="mt-auto"/>
            <BentoCard string1="Project" string2="Management" courseNumber={21} imageSrc={bento5} className="col-span-3 row-span-4" />
            <BentoCard string1="Marketing" string2="" courseNumber={3} imageSrc={bento6} className="col-span-3 row-span-4" />
        </div>
        <BentoCard string1="Game" string2="Development" courseNumber={3} imageSrc={bento4} className="col-span-2 row-span-5" />
        <BentoCard string1="Backend" string2="Development" courseNumber={3} imageSrc={bento7} className="col-span-2 row-span-5" />
        <BentoCard string1="Artificial" string2="Intelligence" courseNumber={3} imageSrc={bento8} className="col-span-4 row-span-6" />
        <BentoCard string1="Data" string2="Science" courseNumber={3} imageSrc={bento9} className="col-span-4 row-span-6" />
    </div>
    <div>
        <div className="grid-cols-1 gap-2 max-lg:grid hidden">
            <BentoCard string1="Graphic" string2="Design" courseNumber={12} imageSrc={bento1} className=""/>
            <BentoCard string1="UX/UI" string2="Design" courseNumber={7} imageSrc={bento2} className=""/>
            <BentoCard string1="Web" string2="Development" courseNumber={9} imageSrc={bento3} className=""/>
            <BentoCard string1="Game" string2="Development" courseNumber={3} imageSrc={bento4} className=""/>
            <BentoCard string1="Project" string2="Management" courseNumber={21} imageSrc={bento5} className=""/>
            <BentoCard string1="Marketing" string2="" courseNumber={3} imageSrc={bento6} className=""/>
            <BentoCard string1="Backend" string2="Development" courseNumber={3} imageSrc={bento7} className=""/>
            <BentoCard string1="Artificial" string2="Intelligence" courseNumber={3} imageSrc={bento8} className=""/>
            <BentoCard string1="Data" string2="Science" courseNumber={3} imageSrc={bento9} className=""/>
        </div>
    </div>
    </>
  );
}

export default BentoBox;