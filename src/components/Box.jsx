import React from 'react'

function Box({ heading }) {
  return (
    <>
      <div className='flex items-center h-28 w-72 border-2 border-gray-100 rounded-md hover:shadow-md px-3 mx-16 mb-4
        2xl:h-40 2xl:w-96 2xl:mx-2 2xl:px-5 2xl:py-[85px] '>
        <div className='basis-2/3 text-xs  2xl:text-lg'>
            <p className='2xl:leading-6'><span className='font-bold '>{heading} </span>
            Build your foundational skills in algebra, geometry, and probability.</p>
        </div>

        <div className='basis-1/3'><img className='h-20 w-28  2xl:h-32 2xl:w-40' src="/images/last.png" alt="" /></div>
      </div>
    </>
  )
}

export default Box