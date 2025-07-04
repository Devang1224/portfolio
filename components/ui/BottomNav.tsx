import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from 'next/link';

const BottomNav = () => {
  return ( 
    <div className="h-10 w-50 md:h-[60px] md:w-[300px] border-2 border-white/10 fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full z-50 backdrop-blur-lg 
      
    ">
    <div className="w-full h-full flex items-center justify-center gap-4 md:gap-6 px-4 py-2">
       <Link href="https://x.com/Devang_Mehra24" target="_blank" rel="noopener noreferrer" className="relative p-1 group">
         <FaTwitter className="w-5 h-5 md:w-7 md:h-7"/>
         <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">Twitter</span>
       </Link>
       <Link href="https://www.linkedin.com/in/devang-mehra-9a8b47230/" target="_blank" rel="noopener noreferrer" className="relative p-1 group">
         <FaLinkedin className="w-5 h-5 md:w-7 md:h-7"/>
         <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">LinkedIn</span>
       </Link>
       <Link href="https://github.com/Devang1224" target="_blank" rel="noopener noreferrer" className="relative p-1 group">
         <FaGithub className="w-5 h-5 md:w-7 md:h-7"/>
         <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">GitHub</span>
       </Link>
       <Link href="mailto:devangmehra12@gmail.com" target="_blank" rel="noopener noreferrer" className="relative p-1 group">
         <MdOutlineEmail className="w-5 h-5 md:w-7 md:h-7"/>
         <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">Email</span>
       </Link>
       <Link href="https://leetcode.com/u/Devang24/" target="_blank" rel="noopener noreferrer" className="relative p-1 group">
         <SiLeetcode className="w-5 h-5 md:w-7 md:h-7"/>
         <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">LeetCode</span>
       </Link>
    </div>
    </div>
  )
}

export default BottomNav
