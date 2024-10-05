import Image from "next/image";
import logo from '../images/logo.svg'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function Footer() {
  return (
    <footer className=" pt-32 pb-10 px-5 flex gap-2">
        <Card className="bg-[#0e1217] max-w-[30%]">
            <CardHeader>
                <Image src={logo} alt="logo"  />
            </CardHeader>
            <CardContent>
                <p className="text-[10px] text-[#7A7A7A]">Being fully bootstrapped, we&apos;re not driven by money or interested in 
                becoming a mystical unicorn. We happily cut through the noise and teach 
                designers and devs personally, taking a 100% learn-by-doing approach with a 
                zero Powerpoint policy.</p>
                <p className="text-[10px] text-[#7A7A7A]">Address: Apt. 713 252 Eura Crossroad, Port Joselyn, NY 57700</p>
            </CardContent>
        </Card>
        <Card className="bg-[#0e1217] flex-1">
            <CardHeader>
                <CardTitle className=" text-[15px] font-semibold">Top fields</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <p className="text-xs">Graphic Design</p>
                <p className="text-xs">UX/UI Design</p>
                <p className="text-xs">Web Development</p>
                <p className="text-xs">Project Management</p>
                <p className="text-xs">Marketing</p>
            </CardContent>
        </Card>
        <Card className="bg-[#0e1217] flex-1">
            <CardHeader>
                <CardTitle className=" text-[15px] font-semibold">Socials</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <p className="text-xs">Instagram</p>
                <p className="text-xs">X (formerly Twitter)</p>
                <p className="text-xs">Linkedin</p>
            </CardContent>
        </Card>
        <Card className="bg-[#0e1217] flex-1">
            <CardHeader>
                <CardTitle className=" text-[15px] font-semibold">General</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <p className="text-xs">Privacy Policy</p>
                <p className="text-xs">Yerms of use</p>
            </CardContent>
        </Card>
    </footer>
  );
}

export default Footer;