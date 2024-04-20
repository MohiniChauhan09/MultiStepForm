import React from 'react'

function Stepper( {isP1Completed} ) {
  const p1=isP1Completed
  return (
    <>
      <div className='mt-14 w-full flex justify-center ' >
        <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64 '></div>
        <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64 '></div>
        <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64 '></div>
        <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64 '></div>
        <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64 '></div>
      </div>
    </>
  )
}

export default Stepper