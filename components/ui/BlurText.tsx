'use client'

import { motion } from 'framer-motion';
import React from 'react'

interface BlurTextProps {
  text: string
  delay?:number
  duration?:number
}

const BlurText = ({text,delay=0.05,duration=0.5}:BlurTextProps) => {

const letters = text.split('');


  return (
    <>
      {
        letters.map((letter,index)=>(
            <motion.span key={index} className='inline-block'
             initial={{opacity:0,filter:'blur(10px)'}}
             animate={{opacity:1,filter:'blur(0px)'}}
             transition={{ delay:index*delay,duration:duration,ease:'easeOut' }}
            >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))
      }      
    </>
  )
}

export default BlurText
