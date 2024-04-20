import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import Page3 from './components/Page3.jsx'
import './index.css'

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element= { <App/> }>
//       <Route path="page3" element ={ <Page3/> } />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
  
)
