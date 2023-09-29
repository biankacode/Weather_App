//cards
import DegreesCelsius from '../CardDegreesCelsius/degreesCelsius'
import CardDays from '../CardDays/CardDays'
import CardHightlights from '../CardHightlights/CardHightlights'

//styles 
import './BarraDerechaStyle.css'
//imagnees
import img_day from '../../assets/img/shower.png'

function BarraDerecha() {
    return(
        <div className='container_principal'>
           <div className='degrees-buttons'>
            <DegreesCelsius
                    degrees= {'F°'}
                    isActive={false}
                    />
                    <DegreesCelsius
                    degrees= {'C°'}
                    isActive={true}
                />
           </div>
               
            <div className='slider-container'>
                <div className='slider'>
                    <CardDays
                    day= {'Lunes'}
                    weather={img_day}
                    max={'16c°'}
                    min={'8c°'}
                    />
                    <CardDays
                    day= {'Martes'}
                    weather={img_day}
                    max={'16c°'}
                    min={'8c°'}
                    />
                    <CardDays
                    day= {'Miercoles'}
                    weather={img_day}
                    max={'16c°'}
                    min={'8c°'}
                    />
                    <CardDays
                    day= {'Jueves'}
                    weather={img_day}
                    max={'16c°'}
                    min={'8c°'}
                    />
                    <CardDays
                    day= {'Viernes'}
                    weather={img_day}
                    max={'16c°'}
                    min={'8c°'}
                    />
                </div>
            </div>
            <h2>  Today’s Hightlights </h2>
            <div className='container_inferior'>
                <CardHightlights wsw={true}/>
                <CardHightlights wsw={true}/>
            </div>
            <div className='container_inferior2' >
                <CardHightlights/>
                <CardHightlights/>
            </div>  
        </div>
    )
}
export default BarraDerecha