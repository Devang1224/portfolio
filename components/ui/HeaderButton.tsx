'use client'

import React from 'react'

const HeaderButton = ({
    children,
    handleClick,
    className,
    url
}:{
    children:React.ReactNode,
    handleClick?:()=>void,
    className?:string,
    url?:string
}) => {
  return (
    <button className={className} onClick={()=>window.open(url,'_black')}>
    {children}      
    </button>
  )
}

export default HeaderButton
