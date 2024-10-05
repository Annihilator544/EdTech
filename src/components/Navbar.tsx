import Image from 'next/image';
import logo from '../images/logo.svg'
import { ArrowRight } from 'lucide-react';
function Navbar() {
  return (
    <nav className='p-4 flex justify-between'>
      <Image src={logo} alt="logo"  />
      <button className='bg-[#232a31] my-auto font-medium text-[#CFCFCF] px-4 py-2 flex gap-1 rounded-full text-xs'>Explore Courses <ArrowRight height={16} strokeWidth={3}/> </button>
    </nav>
  );
}

export default Navbar;