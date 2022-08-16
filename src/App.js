import React,{useState} from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Login from './components/Login/Login'
import Main from './Main'
import Signup from './components/Login/Signup'
import Career from './components/Career/Career'
export default function App() {
 const [loading, setloading] = useState(true)
 const Spring = document.querySelector('#spinner');
 if(Spring){
  setTimeout(() => {
    Spring.style.display = "none"
    setloading(false)
  }, 2000);
 }
  return (
    
 !loading &&(
  <>
  
  <Router>
   <Navbar/> 
   <Routes>
   <Route path='/' element={<Main/>}  />

    <Route path='/login' element={<Login/>}  />
    <Route path='/signup' element={<Signup/>}  />
    <Route path='/career' element={<Career/>}  />
   </Routes>
  </Router>

</>
 )
     
  )
}
