import React from 'react'
import { useState } from 'react'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import LoadingPage from './components/LoadingPage'
import LastPage from './components/LastPage'

function App() {
  const[page, setPage]=useState(1);
  const NextPage=()=>{
    setPage( (prev) => prev+1)
  }

  const [startLoading,setStartLoading] = useState(false);
  const showLoading=()=>{
    setStartLoading( true )
    setPage(6)
    setTimeout( ()=>{
      setStartLoading(false)
    },1000)
  };

  return (
    <>
      {
        page==1 && <Page1 toggle1={NextPage} />
      }

      {
        page == 2 && <Page2 toggle2={NextPage}/>
      }

      {
        page==3 && <Page3 toggle3={NextPage}/>
      }

      {
        page==4 && <Page4 toggle4={NextPage}/>
      }

      {
        page==5 && <Page5 showLoading={showLoading}/>
      }

      {
        (startLoading==true && page==6) && <LoadingPage/>
      }

      {
        (startLoading==false && page==6) && <LastPage/>
      }
    </>
  )
}

export default App
