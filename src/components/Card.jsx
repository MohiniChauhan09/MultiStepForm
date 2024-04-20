import {React, useState} from 'react'

function Card({ photo, upperText, lowerText, setIsButtonDark}) {
  const[isCardSelected, setIsCardSelected]= useState(false);
  const selectCard=()=>{
    setIsCardSelected((prev)=>!prev)
    setIsButtonDark((prev)=>!prev)
  }
  return (
    <>
      <div onClick={selectCard}
      className={`h-36 w-36 border-2 flex flex-col items-center rounded-md my-2 mx-2 hover:shadow-md   2xl:h-44 2xl:w-52
        ${isCardSelected ? 'border-yellow-500' : 'border-gray-200'}`}>
        <div><img src={`/images/${photo}.png`} className="w-32 h-14 mt-4  2xl:mt-8" alt="" /></div>
        <p className='text-xs mt-4  2xl:text-sm'>{upperText}</p>
        <p className='text-sm text-gray-500  2xl:text-lg'>{lowerText}</p>
      </div>
    </>
  )
}

export default Card