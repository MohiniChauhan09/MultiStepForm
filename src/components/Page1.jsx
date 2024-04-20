import React from 'react'
import Stepper from './Stepper'
import Row from './Row'
import {useState} from 'react'

function Page1({toggle1}) {
  const[isButtonDark, setIsButtonDark]= useState(false);
  return (
    <>
      <Stepper />
      <div className='flex flex-col items-center'>

        <div className='mt-6 flex flex-col items-center'>
          <h2 className='text-2xl font-bold mt-4 2xl:text-3xl'>Which describes you best?</h2>
          <p className='p-2 text-sm text-slate-500 2xl:mt-4 2xl:md'>This will help us personalize your experience.</p>
        </div>

        <div className='mt-8 flex flex-col items-center justify-center 2xl:mt-4'>
          <Row id="student" boldText="Student" normalText="or soon to be enrolled" picture="student" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Professional" normalText="pursuing a career" picture="professional" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Parent" normalText="of a school-age child" picture="parent" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Lifelong learner" normalText="" picture="learner" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Teacher" normalText="" picture="teacher" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Other" normalText="" picture="other" setIsButtonDark={setIsButtonDark}/>
        </div>


        <div>
          <button 
          onClick={toggle1}
          className={`h-12 w-36 rounded-md text-white mt-6 hover:bg-black cursor-pointer 2xl:mt-4 2xl:w-40
            ${isButtonDark? 'bg-black' : 'bg-gray-200'}`} >Continue</button>
        </div>

      </div>
    </>
  )
}

export default Page1