// Aqui importamos los componentes
import SearchForPlace from '../SearchPlace/searchPlace' 
import Location from '../SearchLocation/location' 
import DayOfBigDay from '../DayOFBigDay/day'
import LayoutBigDay from '../LayoutBigDay/layout'
import ShowerBigDay from '../ShowerBigDay/shower'
import TodayOfBigDay from '../TodayBigDay/today'
import LocationOfBigday from '../LocationOfBigDay/location'



//Aqui importamos las imagenes 
import img_location from '../../assets/img/outline_my_location_white_36dp.png'
import img_day from '../../assets/img/shower.png'
import nubes_background from '../../assets/img/Cloud-background.png'

//Aqui importamos los estilos
import './bigDayStyle.css'
import location from '../LocationOfBigDay/location'

function BigDay({clima}){
      console.log('Clima actual', clima)
   return(
         <div className='container_bigDay'>
            <div className='container_buttons'>
                  <SearchForPlace/>
                  <Location img={img_location}/>  
            </div>  
            <img className='nubes_background' src={nubes_background} alt="" />
            <DayOfBigDay img={img_day}/>
            <LayoutBigDay temperatura={clima?.main?.temp}/>
            <ShowerBigDay esatdo_clima={clima?.weather?.[0]?.main} />
            <TodayOfBigDay/>
            <LocationOfBigday lugar={clima?.name} location={location}/>
            {/* lugar(descripcion de lo que quiero)={clima(padre el cual contiene los datos.name(direccion exacta de lo que busco))} */}
         </div>    
        
   )
}
export default BigDay