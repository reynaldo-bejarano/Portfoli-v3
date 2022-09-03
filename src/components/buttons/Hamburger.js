import React from 'react'

const Hamburger = ({onClick}) => {
  return (
    <button className='md:hidden' onClick={onClick}>
      <div className='w-8 h-8 flex-col flex justify-center items-center'>
        <div className='h-1 w-7 bg-slate-800 mb-1'></div>
        <div className='h-1 w-7 bg-slate-800 mb-1'></div>
        <div className='h-1 w-7 bg-slate-800 mb-1'></div>
      </div>
    </button>
  )
}

export default Hamburger