import Image from 'next/image';
import premium from '../images/premium.svg'
function Premium() {
  return (
    <div className=' py-40'>
      <Image src={premium} alt="premium" className='w-full' />
    </div>
  );
}

export default Premium;