// "use client"

import React from 'react'
import { motion } from 'framer-motion'

const Sunbeam = () => {
  return (
    // <motion.div 
    // className="absolute min-w-[50px] w-[10vw] max-w-[150px] min-h-[400px] 
    // top-[80px] left-[-100px] lg:left-[-40px] lg:top-[0] h-[50vw] pointer-events-none z-99 sunlight-rays
    //  md:blur-[40px] blur-[20px]
    // "  />

    <div
      className="absolute min-w-[50px] w-[10vw] max-w-[150px] min-h-[400px] 
        top-[80px] left-[-100px] lg:left-[-40px] lg:top-[0] h-[50vw] pointer-events-none z-99 sunlight-rays
        md:blur-[40px] blur-[20px] will-change-[opacity,transform]"
      style={{ opacity: 0.6 }}
    />
  )
}

export default Sunbeam
