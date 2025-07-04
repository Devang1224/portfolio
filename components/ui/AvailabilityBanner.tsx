'use client'

import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const AvailabilityBanner = () => {
  return (
    <div className="text-center text-[8px] font-bold rounded-[20px] px-4 py-1 w-fit bgRainbow 
    relative bg-background group flex items-center gap-2 cursor-pointer md:text-[12px]"
    onClick={()=>{
        document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
    }}
    >
    <p> Available for Freelancing Projects</p>
    <span className="group-hover:translate-x-1 transition-all duration-300">
      <MdKeyboardArrowRight />
    </span>
  </div>
  )
}

export default AvailabilityBanner
