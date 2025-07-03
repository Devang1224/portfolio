import React from 'react'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '@/constants'


const Projects = () => {
  return (
    <div className="min-h-screen flex items-center">
       <div>
          <p className='sectionHeading'>My Projects</p>
          <div className="mt-20 flex flex-wrap gap-10">
            {projects?.map((item,index)=>(
              <ProjectCard key={index} item={item}/>
            ))}
          </div>
       </div>
    </div>
  )
}

export default Projects
