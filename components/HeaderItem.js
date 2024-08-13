import React from 'react'

export default function HeaderItem({title , Icon}) {
  return (
    <div className='group flex flex-col items-center cursor-pointer sm:w-20 hover:text-white  w-12 '>
      <Icon className="h-8 w-8  mb-1 text-gray-500 group-hover:animate-bounce" />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest '>{title} </p>
    </div>
  )
}
