import Link from 'next/link'
import React from 'react'

const ExperienceItem = ({item,index}:{item:any,index:number}) => {
  return (
    <div key={index} className="min-h-[200px] ml-16 p-6 pl-0 flex item-center relative">
                        <div className="w-[70%] min-w-[300px] min-h-full bg-background rounded-xl relative p-3 bgSilver2">
                            <div className=''>
                                <div>
                               <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                <p className='text-2xl font-bold'>{item?.position}</p>
                                <p className='text-sm text-textGrey1'>{item?.years}yrs</p>
                                </div>
                                <div>
                                    <p className='text-sm text-textGrey1'>{item?.duration}</p>
                                </div>
                               </div>
                               <Link href={item?.companyUrl} target='_blank' className='text-sm text-textGrey1'>{item?.companyName}</Link>
                                </div>
                                <div className='mt-4'>
                                    <p className='text-sm'>{item?.description}</p>
                                    <div className='flex items-center gap-2 mt-4'>
                                        <p className='text-sm text-textGrey1 whitespace-nowrap'>Tech Stack:</p>
                                        <p className='text-sm text-textGrey1'>{item?.techStack?.join(', ')}</p>
                                    </div>
                                </div>
                            </div>

                         <div className="absolute left-[-75px] top-[50%] translate-y-[-50%] w-[20px] 
                              h-[20px] rounded-full border-2 border-white [box-shadow:0_0_10px_4px_rgba(255,255,255,0.3),_0_0_20px_8px_rgba(255,255,255,0.1)]
                                                              
                         ">
                             <div className='w-full h-full rounded-full p-1 bg-background'>
                                   <div className='w-full h-full rounded-full bg-white'/>
                             </div>
                         </div>

                        </div>
                        
                      
                    </div> 
  )
}

export default ExperienceItem
