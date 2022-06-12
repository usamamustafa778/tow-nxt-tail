import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-slate-400 text-white font-[Poppins] py-0 px-3 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button