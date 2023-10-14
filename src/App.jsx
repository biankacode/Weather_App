/* eslint-disable react/jsx-no-undef */

import './App.css'
import BigDay from './components/BigDay/bigDay'
import BarraDerecha from './components/BarraDerecha/BarraDerecha'
import { useCallback, useEffect } from 'react'
import { API_CITY_URL } from './Constants/constants'



function App() {
  useEffect(() => {

      fetch( API_CITY_URL ).then((res) => {
        return res.json();
      }).then((data) => console.log(data) )
    
      
    //fetch( API_CITY_URL, 'get')
  },[])

  return (
    <>
    <div className='contianer-padre'>
      <BigDay/>
      <BarraDerecha/>
    </div>
    
    </>
  )
}

export default App
