import React from 'react'
import About from './components/About/About'
import Clients from './components/Clients/Clients'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Work from './components/Work/Work'

export default function Main() {
  return (
    <>
    <Home/>
    <About/>
    <Services/>
    <Work/>
    <Clients/>
    <Footer/>
    </>
  )
}
