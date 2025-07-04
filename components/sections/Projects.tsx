import React from 'react'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '@/constants'


const Projects = () => {
  return (
    <div className="mt-20 flex items-center">
       <div className='w-full '>
          <p className='sectionHeading'>My Projects</p>
          <div className="mt-20 flex flex-wrap gap-10 flex-row justify-center px-4 sm:px-2">
            {projects?.map((item,index)=>(
              <ProjectCard key={index} item={item}/>
            ))}
          </div>
       </div>
    </div>
  )
}

export default Projects
