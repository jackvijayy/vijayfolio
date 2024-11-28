import { certification } from '@/Constants'
import { div } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react'

type CertificationType = {
  id: number;        // or number, depending on your data structure
  name: string;
  Organization?: string;
  bgcolor: string;
  img?:string;  // Assuming bgcolor is a string (e.g., color code)
};

const Certification = () => {
  return (
    <div className='h-[80vh] bg-black p-5 lg:p-10 '>
     <h1 className='text-center'>Certification & Participants</h1>

     <div className='flex flex-wrap justify-center items-center gap-3'>
     {certification.map(({ name, id, Organization, bgcolor, img }: CertificationType) => (
      <div
       key={id} 
       className="m-4 p-6 rounded-lg flex flex-col backdrop-blur-md"  // Apply backdrop-blur effect
       style={{ backgroundColor: bgcolor }} > 
       <Image src={img} alt='logo' width={30} height={30}/>  

        <h1>{name}</h1>
        <p>{Organization}</p>

      </div>
      
        ))}
     
      

     </div>

    </div>
  )
}

export default Certification