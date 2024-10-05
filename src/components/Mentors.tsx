import Image from 'next/image';
import mentor1 from '../images/mentor1.svg';
import mentor2 from '../images/mentor2.svg';
import mentor3 from '../images/mentor3.svg';
import mentor4 from '../images/mentor4.svg';
import mentor5 from '../images/mentor5.svg';
import mentor6 from '../images/mentor6.svg';
import mentor7 from '../images/mentor7.svg';
import mentor8 from '../images/mentor8.svg';
import mentor9 from '../images/mentor9.svg';

function Mentors() {
  return (
    <div className='flex flex-col'>
      <p className="text-base text-[#B8B8B8] text-center">Mentors from industry leaders:</p>
      <div className="flex mx-auto gap-10 mt-4 flex-wrap">
        <Image src={mentor1} alt="mentor1" />
        <Image src={mentor2} alt="mentor2" />
        <Image src={mentor3} alt="mentor3" />
        <Image src={mentor4} alt="mentor4" />
        <Image src={mentor5} alt="mentor5" />
        <Image src={mentor6} alt="mentor6" />
        <Image src={mentor7} alt="mentor7" />
        <Image src={mentor8} alt="mentor8" />
        <Image src={mentor9} alt="mentor9" />
      </div>
    </div>
  );
}

export default Mentors;