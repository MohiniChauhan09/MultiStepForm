import React from 'react'
import '../App.css'

function LoadingPage() {
  return (
    <div className='flex flex-col items-center my-64'>
      <i className="fa-regular fa-circle fa-4x"></i>
      <p className='font-bold text-sm mt-4 ml-2  2xl:text-2xl 2xl:w-[830px]'>Finding learning path recommendations for you based on your responses</p>
    </div>
  )
}

export default LoadingPage

