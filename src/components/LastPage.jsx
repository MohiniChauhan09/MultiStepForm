import React from 'react'
import Box from './Box'

function LastPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center my-44   2xl:mt-52'>
        <div className='flex flex-col items-center'>
            <h2 className='text-lg font-bold  2xl:text-3xl'>Learning paths based on your answers</h2>
            <p className='text-xs text-gray-600 my-4  2xl:text-lg 2xl:mt-7'>Choose one to get started. You can switch anytime.</p>
        </div>

        <div className='mt-11  2xl:flex '>
            <div className='relative'>
                <div className='text-xs absolute left-36 -top-3 h-7 w-32 bg-orange-400 rounded-2xl text-center flex items-center 
                  justify-center font-bold p-4'>MOST POPULAR</div>
                 <Box heading="Foundational Math" />
            </div>
            <Box heading="Mathematical Thinking" />
        </div>
      </div>
    </>
  )
}

export default LastPage