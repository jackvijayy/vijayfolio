import { certification } from '@/Constants'
import { p } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react'
import Button from './ui/button';
import Link from 'next/link';

type CertificationType = {
  id: number;        
  name: string;
  type?: string;
  img?:string;
  learn:string;
};

const Certification = () => {
  return (
    <div className=' bg-black p-5 lg:p-10 '>
      <div className='flex justify-between items-center'>
      <h1 className='text-center text-md lg:text-2xl'>Certification & Participants</h1>
      <Link href='/certification'><Button className='w-20'>Show more</Button></Link>
        
      </div>
     

     <div className='grid grid-cols-1 md:grid-cols-2  gap-3  mt-10'>
     {certification.map(({ name, id,type,learn, img }: CertificationType) => (
      <div
       key={id} 
       className={`p-4  flex flex-col gap-3 card `}  
      > 
      <h1 className='text-xl font-bold gradient-text'>{name}</h1>
      {img &&<Image src={img} alt='logo' width={60} height={60}/>}
      {type && <p className='text-sm uppercase text-gray-300'>{type}</p>}
      <p className='text-sm text-gray-400  flex-wrap'>{learn}</p>
      
      </div>
      
        ))}
     
      

     </div>

    </div>
  )
}

export default Certification