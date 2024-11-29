
import Marquee from "react-fast-marquee"
import Image from "next/image"
import { stacks, tools } from "@/Constants"

const Stacks = () => {
  return (
    <div className='h-[40vh] bg-black p-5 '>
      <h1 className="text-center text-md lg:text-2xl mb-10"> Stack and Tool</h1>
         <div className="w-full ">
        <Marquee pauseOnHover>
          <div className=" w-full flex items-center gap-8">
           {stacks.map((item,index)=>(
            <Image  key={index} src={item.img} alt="stacks" width={40} height={40}/>
           ))}
            
          </div>
        </Marquee>
      </div>
      <div className="w-full mt-10">
        <Marquee pauseOnHover direction="right">
          <div className="flex items-center justify-between">
           {tools.map((item)=>(
            <Image className="mr-10"  key={item.id} src={item.img} alt="tools" width={40} height={40}/>
           ))}
            
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Stacks