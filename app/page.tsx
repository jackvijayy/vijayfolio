import Certification from "@/components/Certification";


import Hero from "@/components/Hero";
import { FloatingDock } from "@/components/ui/floating-dock";

import { Spotlight } from "@/components/ui/spotlight";

import {
  IconBrandGithub,
  IconBrandX,
  IconCertificate,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { HomeIcon } from "lucide-react";
import Image from "next/image";


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
    <div className="h-screen w-full rounded-md text-white bg-black antialiased bg-grid-white/[0.02] relative ">
     <FloatingDock
       mobileClassName="translate-20" // only for demo, remove for production
       items={links}/>


       <Spotlight
        className="-top-40 left-0 "
        fill="blue"
      />
        <Spotlight
        className="-top-40 left-0 lg:-top-30  "
        fill="white"
      />
     
      <Hero />
      <Certification/>
    
    
    </div>
  
 
   
  );
}
