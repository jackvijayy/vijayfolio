
import { projects } from "@/Constants"
import { ArrowUpRight } from "lucide-react"

import Image from "next/image"
import { PinContainer } from "./ui/3d-pin"
import Link from "next/link"
import Button from "./ui/button"

const Project = () => {
  return (
    <div className='h-[80vh] bg-black '>
     <div className='flex justify-between items-center'>
      <h1 className='text-center text-md lg:text-2xl'>Certification & Participants</h1>
      <Link href='/certification'><Button className='w-20 text-sm'>Show more</Button></Link>
      </div>
      <div className="flex justify-center items-center lg:flex-row flex-col p-4 gap-6  ">
            {projects.map(({ id,title,des,img,iconLists,link })=>(
                <div key={id} className="lg:min-h-[32.5rem] h-[25rem]
                 flex items-center justify-center sm:w-50 w-[50vw]"
                >
                    <PinContainer title={title} href={link}>
                    <div className="flex basis-full flex-col p-2  gap-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <div className=" p-1 w-full h-full overflow-hidden ">
                        <Image src={img} alt="thumbnail" className=" w-full h-full" priority quality={100} width='100' height='100'  />

                    </div>
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                           {title}
                         </h3>
                    <div className="text-sm font-normal">
                        <span className="text-slate-500 ">
                         {des}
                        </span>
                    </div>
                    <div className="flex items-center justify-between px-2 mt-2">
                    <div className="flex items-center justify-center">
                        {iconLists.map((icon,index)=>(
                            <div key={index} className="flex items-center rounded-full  border border-gray-800 -translate-x-6">
                                <Image src={icon}  width={24} height={24} alt="tech" className="rounded-full " />
                            </div>
                        ))}
                    </div>
                    <div>
                        <a href={link} className="text-sm flex gap-1">
                            <p>check the live site</p>
                            <ArrowUpRight size={20} color="blue"/>
                            
                        </a>
                    </div>
                    </div>
                  </div>
                    </PinContainer>
                </div>
            ))}
       

        </div>

    </div>
  )
}

export default Project