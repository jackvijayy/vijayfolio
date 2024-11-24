

import Marquee from "react-fast-marquee"


import Image from "next/image"
import { stacks, tools } from "@/Constants"

const Stacks = () => {
  return (
    <div className='h-[30vh] bg-black p-5 '>
         <div className="w-full ">
        <Marquee pauseOnHover>
          <div className="flex items-center gap-8">
           {stacks.map((item,index)=>(
            <Image  key={index} src={item.img} alt="stacks" width={50} height={50}/>
           ))}
            
          </div>
        </Marquee>
      </div>
      <div className="w-full mt-10">
        <Marquee pauseOnHover direction="right">
          <div className="flex items-center gap-[5rem]">
           {tools.map((item)=>(
            <Image  key={item.id} src={item.img} alt="tools" width={50} height={50}/>
           ))}
            
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Stacks