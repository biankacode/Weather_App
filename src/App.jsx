/* eslint-disable react/jsx-no-undef */


/* import watchImage from './assets/img/shower.png'

import img_day from './assets/img/shower.png'

import CardDays from './components/CardDays/CardDays'
import CardHightlights from './components/CardHightlights/CardHightlights'
import DegreesCelsius from './components/CardDegreesCelsius/degreesCelsius'



/*  import DayOfBigDay from './components/DayOFBigDay/day'
import BackgroundOfBigDay from './components/BackgroundOfBigDay/background'
import LayoutBigDay from './components/LayoutBigDay/layout'
import TodayOfBigDay from './components/TodayBigDay/today'
import ShowerBigDay from './components/ShowerBigDay/shower'
import LocationOfBigday from './components/LocationOfBigDay/location'  */
import './App.css'
import BigDay from './components/BigDay/bigDay'

function App() {
  return (
    <>
     {/* Barra lateral izquierda */}
     {/* <LeftSideBar/> */}
     
    {/*  buscar lugar */}
{/*     <SearchForPlace/> */}

    {/* díasde la semana */}
  {/*   <CardDays
    day= {'Lunes'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Martes'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Miercoles'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Jeves'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Viernes'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Sabado'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Domingo '}
    weather={watchImage}
    max={20}
    min={10}
    />  */}

    {/* lo más destacado de hoy */}
    {/* <CardHightlights
    />
    <DegreesCelsius
    degrees={'C°'} 
    isActive={true}
    />
    <DegreesCelsius
    degrees={'F°'} 
    isActive={false}
    />

    <Location
    
    />

    <SearchForPlace/> */}
   
  
    <BigDay/>

   {/*  <DayOfBigDay
    img={img_day}/>
    
    <BackgroundOfBigDay
    background={img_background}
    />
    <LayoutBigDay/>
 
    <ShowerBigDay/> 

    <TodayOfBigDay/> 

    <LocationOfBigday
    location={img_background} /> */}

    </>
  )
}

export default App
