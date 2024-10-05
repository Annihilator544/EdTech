import Image from 'next/image';
import graduation from '../images/graduation.svg'
function GraduationCertificate() {
  return (
    <div className=' py-40'>
      <Image src={graduation} alt="graduation" className='mx-auto' />
    </div>
  );
}

export default GraduationCertificate;