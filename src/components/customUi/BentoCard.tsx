import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import clsx from "clsx";

function BentoCard({ string1, string2, courseNumber, imageSrc, className, classNameImage }: { string1: string, string2: string, courseNumber: number, imageSrc: string, className: string, classNameImage?: string }) {
  return (
    <Card className={className} >
        <CardContent className="p-6 flex-1 flex flex-col">
            <p className=" font-medium text-xl">{string1}</p>
            <p className=" font-medium text-xl">{string2}</p>
            <p className="text-[#7A7A7A] text-xs">{courseNumber} courses</p>
            <Image src={imageSrc} alt="mentor1" className={clsx("ml-auto", classNameImage)} />
        </CardContent>
    </Card>
  );
}

export default BentoCard;