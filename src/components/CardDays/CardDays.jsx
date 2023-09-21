
import './CardDays.css'

function CardDays ({day, weather, max, min}) {
    return(
        <section className='cardDay_container'>
            <span className='day'>{day}</span>
            <img className='weather_image' src={weather} alt="sol" />
            <span className='temp max'>{max}</span>
            <span className='temp min'>{min}</span>
        </section>
    )
}
export default CardDays