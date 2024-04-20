import React, { useState, useRef, useEffect } from 'react'

const boldText=""
const normalText=""
const picture=""
function Row({boldText, normalText, picture, setIsButtonDark}) {

  const[isRowSelected, setIsRowSelected] = useState(false)
  const select=()=>{
    setIsRowSelected((prev)=> !prev)
    setIsButtonDark((prev)=>!prev)
  }

  return (
    <>
      <div id="row" >
        <div
        onClick={select} 
        className={`my-2 flex items-center h-12 w-80 border-2 rounded-md 2xl:w-[550px] 2xl:h-16
          ${ isRowSelected ? "border-yellow-500 shadow-lg shadow-slate-300" : "border-slate-200"} `}> 

            <img src={`/images/${picture}.png`} alt="" className='h-10 w-10 '/>
            <p className='text-slate-500 text-xs 2xl:text-lg'>
                <span className='text-black'>{boldText}  </span>
                {normalText}</p>
        </div>
      </div>
    </>
  )
}

export default Row

