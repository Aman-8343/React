import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
function App() {
  

  return (
    <>
      <h1 className='bg-green-500 text-black mt-1.5 rounded-xl mb-4'> aman hero</h1>

      
      <Cards channel="aman don" btnText="100" price="1rs"/>
      <Cards channel="rajat" btnText="101" price="2rs"/>
  
    </>
  )
}

export default App
