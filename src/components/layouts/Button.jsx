import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`px-[59px] w-[180px] text-center py-2 rounded-[8px] text-white bg-primary ${className}`}>{children}</button>
  )
}

export default Button