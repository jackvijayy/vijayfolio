import Certification from "@/components/Certification";


import Hero from "@/components/Hero";
import About from "@/components/About";

import { FloatingDock } from "@/components/ui/floating-dock";

import { Spotlight } from "@/components/ui/spotlight";

import {
  IconBrandGithub,
  IconBrandX,
  IconCertificate,
  IconExchange,
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";
import Project from "@/components/Project";
import Stacks from "@/components/Stacks";

export default function Home() {
  
  const links = [
  {
    title: "Home",
    icon: (
      <IconHome className=" text-violet-400 dark:text-neutral-300" />
    ),
    href: "#home",
  },

  {
    title: "Products",
    icon: (
     
      <IconCertificate className=" text-yellow-500 dark:text-neutral-300"/>
    ),
    href: "#certificate",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className=" text-pink-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },

  {
    title: "Changelog",
    icon: (
      <IconExchange className=" text-cyan-400 dark:text-neutral-300" />
    ),
    href: "#project",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className=" text-green-300 dark:text-neutral-300"  />
    ),
    href: "#about",
  },
  {
    title: "GitHub",
    icon: (
      // 
      <IconBrandGithub className=" text-white dark:text-neutral-300" />
      
    ),
    href: "#",
  },
];

  return (
    <div className="h-screen w-full  text-white bg-black antialiased  relative overflow-x-hidden ">
     <FloatingDock
       items={links}/>
       <Spotlight
        className="-top-40 left-0 "
        fill="blue"
      />
        <Spotlight
        className="-top-10 left-0 lg:-top-30 lg:right-14  "
        fill="aqua"
      />
       
      <Hero />
      <Stacks/>
      <Certification/>
      <About/>
      <Project/>
    
    
    </div>
  
 
   
  );
}
