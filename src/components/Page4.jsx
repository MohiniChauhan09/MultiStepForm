import {React,useState} from 'react'
import Card from './Card'

function Page4({ toggle4 }) {
  const[isButtonDark, setIsButtonDark]= useState(false);
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='mt-14 w-full flex justify-center' >
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
          <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64'></div>
        </div>

        <div className='mt-14 flex flex-col items-center  2xl:mt-20 '>
            <h2 className='text-xl font-bold  2xl:text-3xl'>What is your math comfort level?</h2>
            <div className='text-sm   2xl:flex 2xl:text-lg 2xl:mt-1'>
              <p className='mt-4  2xl:text-md'>Choose the highest level you feel confident in </p>
              <p className='2xl:mt-4 2xl:ml-1'> - you can always adjust later.</p>
            </div>
        </div>

        <div className='flex flex-col items-center mt-11  2xl:flex-row 2xl:mt-14'>
            <div className='flex'>
              <Card photo="e1" upperText="Arithmetic" lowerText="Introductory" setIsButtonDark={setIsButtonDark}/>
              <Card photo="e2" upperText="Basic Algebra" lowerText="Foundational" setIsButtonDark={setIsButtonDark}/>
            </div>

            <div className='flex'>
              <Card photo="e3" upperText="Intermediate Algebra" lowerText="Intermediate" setIsButtonDark={setIsButtonDark}/>
              <Card photo="e4" upperText="Calculus" lowerText="Advanced" setIsButtonDark={setIsButtonDark}/>
            </div>
            
            
        </div>
        
        <div>
          <button 
          onClick={toggle4}
          className={`h-12 w-36 rounded-md text-white mt-4  hover:bg-black cursor-pointer   2xl:mt-16 2xl:w-40
            ${ isButtonDark? 'bg-black' : 'bg-gray-200'}`} >Continue</button>
        </div>

      </div>
    </>   
  )
}

export default Page4