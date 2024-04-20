import React from 'react'
import '../App.css'

function Page5({ showLoading}) {
  return (
    <>
      <div className='flex flex-col items-center h-screen'>
        <div className='mt-14 w-full flex justify-center  mb-20' >
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
        </div>
        

        <div className=''>

            <div className='flex flex-col items-center 2xl:flex-row-reverse 2xl:mt-10'>

              <div className='flex flex-col items-start mx-24  2xl:w-[600px] 2xl:h-[600] 2xl:ml-40'>
                <p className='text-2xl font-bold mb-8  2xl:text-3xl'>You're on your way!</p>
                <div className='mb-4  2xl:mt-4'>
                  <i className="fa-solid fa-star  fa-xl"></i>
                  <i className="fa-solid fa-star  fa-xl"></i>
                  <i className="fa-solid fa-star  fa-xl"></i>
                  <i className="fa-solid fa-star  fa-xl"></i>
                  <i className="fa-solid fa-star  fa-xl"></i>
                </div>
                <p className='text-sm text-gray-900 italic mb-7  2xl:text-lg'>"Through it's engaging and well-structured courses, Brilliant has taught me mathematical 
                    concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and 
                    real world problem solving situations."</p>
                <p className='text-sm italic  2xl:text-lg'>-Jacob S.</p>
              </div>


              <div className='flex  '>
                <img className="w-24 h-24 mx-36 mt-8  2xl:w-72 2xl:h-72 2xl:mt-2 2xl:mr-12" src="/images/page5.png" alt="" />
              </div>

            </div>
        </div>

        <div>
         <button 
         onClick={showLoading}
         className='h-12 w-36 rounded-md text-white mt-6 bg-black cursor-pointer  2xl:mt-24 2xl:w-40' >Continue</button>
        </div>
        
      </div>
    </>
    
  )
}

export default Page5