
import './degreesCelsiusStyle.css';

// eslint-disable-next-line react/prop-types
function DegreesCelsius({degrees, isActive}) {
    return (
        <div className={`container_degrees ${ isActive ? 'active' : '' }`}>
             <span className='degrees'> {degrees} </span>
        </div>
    

        
    )
}
export default DegreesCelsius