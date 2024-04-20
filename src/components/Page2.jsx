import {React,useState} from 'react'
import Row from './Row'

function Page2({ toggle2 }) {
  const[isButtonDark, setIsButtonDark]= useState(false);
  return (
   <>
    <div className='flex flex-col items-center'>
      <div className='mt-14 w-full flex justify-center' >
        <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
        <div className='w-16 border-b-4 border-green-600 lg:w-52 2xl:w-64'></div>
        <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64'></div>
        <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64'></div>
        <div className='w-16 border-b-4 border-slate-200 lg:w-52 2xl:w-64'></div>
      </div>

      <div>
        <div className='mt-6 flex flex-col items-center'>
          <h2 className='text-xl font-bold mt-4  2xl:text-3xl'>Which are you most interested in?</h2>
          <div className='2xl:flex 2xl:text-md'>
            <p className='p-2 text-sm text-slate-500 '>Choose just one. This will help us get you started</p>
            <p className=' text-sm text-slate-500 ml-14 2xl:mt-2 2xl:ml-0'>(but won't limit your experience).</p>
          </div>
          
        </div>

        <div className='mt-8 flex flex-col items-center '>
          <Row boldText="Learning specific skills to advance my career" normalText="" picture="1" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Exploring new topics I'm interested in" normalText="" picture="2" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Refreshing my math foundations" normalText="" picture="3" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Exercising my brain to stay sharp" normalText="" picture="4" setIsButtonDark={setIsButtonDark}/>
          <Row boldText="Something else" normalText="" picture="5" setIsButtonDark={setIsButtonDark}/>
        </div>
      </div>

      <div>
        <button 
        onClick={toggle2}
        className={`h-12 w-36 rounded-md text-white mt-6 hover:bg-black cursor-pointer  2xl:mt-4 2xl:w-40
          ${isButtonDark ? 'bg-black' : 'bg-gray-200'}`} >Continue</button>
      </div>
    </div>
  </>
  )
}

export default Page2