import { experience } from '@/constants'
import Link from 'next/link'
import React from 'react'
import ExperienceItem from '../ui/ExperienceItem'

const Experience = () => {
  return (
    <div className="flex items-center mt-0 md:mt-20">
        <div className='w-full py-20'>
          <p className='sectionHeading'>Experience</p>
          <div className='mt-20 w-full'>
             <div className=" ml-[30px] sm:ml-[100px] lg:ml-[20%] min-h-[200px] flex flex-col gap-10 border border-l-white/40 border-l-[3px] border-y-0 border-r-0 pr-5 lg:pr-0">
                 {experience?.map((item,index)=>(
                   <ExperienceItem key={index} item={item} index={index}/> 
                 ))}
             </div>
          </div>
        </div>
    </div>
  )
}

export default Experience
