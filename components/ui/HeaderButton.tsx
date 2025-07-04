'use client'

import React from 'react'

const HeaderButton = ({
    children,
    handleClick,
    className,
    url,
    type='openUrl'
}:{
    children:React.ReactNode,
    handleClick?:()=>void,
    className?:string,
    url?:string,
    type?:'scrollToSection' | 'openUrl'
}) => {
  return (
    <button className={className} onClick={()=>{
        if(type==='scrollToSection'){
            document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
        }else if(type==='openUrl'){
            window.open(url,'_blank')
        }}}>
    {children}      
    </button>
  )
}

export default HeaderButton
