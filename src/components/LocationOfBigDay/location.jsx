import './locationStyle.css'
import location from '../../assets/img/round_location_on_white_36dp.png'

// eslint-disable-next-line react/prop-types
function LocationOfBigday() {
   
    return(
        <div className='container_location'>
            <img className='img_location' src={location} alt="" />
            <span className='text_location'>Helsinki</span>
        </div>
        
    )
}
export default LocationOfBigday