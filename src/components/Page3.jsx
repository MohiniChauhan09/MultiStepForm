import React from 'react'

function Page3({toggle3}) {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='mt-14 w-full flex justify-center' >
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64'></div>
        </div>

        <div className='flex flex-col items-center mt-20 mb-4  2xl:flex-row-reverse  2xl:mt-16'>
            <div className='w-72  2xl:w-96'>
                <h2 className='text-2xl font-bold mb-4  2xl:text-3xl 2xl:mb-6'>You're in the right place</h2>
                <p className='text-sm 2xl:text-md'>Brilliant gets you hands-on to help improve your professional skills and knowledge.
                    You'll interact with concepts and solve fun problems in math, science, and computer science. 
                </p>
            </div>

            <div className='mt-8'>
                <img className='w-40 h-52  2xl:w-64 2xl:h-[430px]  2xl:mr-40'
                src="/images/page3.png" alt="" />
            </div>
        </div>

        <div>
         <button 
         onClick={toggle3}
         className='h-12 w-36 rounded-md text-white mt-6 bg-black cursor-pointer  2xl:w-40 2xl:mt-1' >Continue</button>
        </div>
      </div>
    </>
  )
}

export default Page3