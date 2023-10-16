/* eslint-disable react/jsx-no-undef */

import './App.css'
import BigDay from './components/BigDay/bigDay'
import BarraDerecha from './components/BarraDerecha/BarraDerecha'
import { useEffect, useState } from 'react'
import { API_CITY_URL, CurrentWeather } from './Constants/constants'

/* console.log("ciudades",API_CITY_URL)
console.log("climaActual", api_url);
console.log("Latitud",CurrentWeather); */

function App() {
  const [climaActual , setClimaActual] = useState({})
  const [climaDays , setClimaDays] = useState({})
  

 /*  conso le.log(); */
  useEffect(() => {
      //fetch( API_CITY_URL, 'get')
      fetch( API_CITY_URL ).then((res) => {
        return res.json();
      }).then((data) => setClimaDays(data))
     

      fetch( CurrentWeather ).then((res) => {
        return res.json();
      }).then((data) => setClimaActual(data))
      console.log(CurrentWeather,"Current");
  },[])

  return (
    <>
    <div className='contianer-padre'>
      <BigDay clima={climaActual} /> {/* todos sus componentes pueden entrar por que es padre */}
      <BarraDerecha />
    </div>
    
    </>
  )
}

export default App
