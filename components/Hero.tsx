
import React from "react";
import WordRotate from "./ui/word-rotate";
import { ConfettiButton } from "./ui/confetti";
const Hero = () => {
 
  return (
    <div className="h-screen w-full overflow-hidden p-5 md:p-10 lg:p-20 flex justify-between items-center" id="home">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-white text-2xl lg:5xl font-semibold">
          Hii There <span>👋</span><br />
         <WordRotate
            className="text-5xl  font-custom text-cyan-500 lg:text-6xl  mt-5 tracking-widest"
            words={["NEXT DEVELOPER", "WEB DEVELOPER",]}
          />
          
        </h1>
        <p className="text-xs lg:text-base font-medium text-gray-400">Frontend architect focused on interactive,responsive,user-centered design.</p>
        <div>
       <ConfettiButton >Resume </ConfettiButton>
        </div>
        
      </div>
      {/* image */}
      <div className="hidden lg:flex flex-1 ">
     
     

      </div>
    </div>
  );
};

export default Hero;
