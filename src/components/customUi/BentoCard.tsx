import Image from "next/image";
import { Card, CardContent } from "../ui/card";

function BentoCard({ string1, string2, courseNumber, imageSrc, className }: { string1: string, string2: string, courseNumber: number, imageSrc: string, className: string }) {
  return (
    <Card className={className} >
        <CardContent className="p-6">
            <p className=" font-medium text-xl">{string1}</p>
            <p className=" font-medium text-xl">{string2}</p>
            <p className="text-[#7A7A7A] text-xs">{courseNumber} courses</p>
            <Image src={imageSrc} alt="mentor1" className="ml-auto" />
        </CardContent>
    </Card>
  );
}

export default BentoCard;