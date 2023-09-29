// eslint-disable-next-line no-unused-vars
import React from "react";
import './CardHightlights.css'
import flecha from '../../assets/img/baseline_navigation_white_36dp.png'

function CardHightlights({wsw=false}) {
    return(
        <div className="container_clasHeight"> 
            <span className="title_CardHight">Wind status</span>
            <div className="num_string">
                <span className="numero"> 7° </span>
                <span className="parrafo"> mph</span>
            </div>
            
                
            { wsw &&
            <div className="wind_container">
                <div className="circle">
                    <img className="flecha_img" src={flecha} alt="" />
                </div>
                <span className="wsw">WSW</span>
                          
            </div>
            }
        
        </div>
    )
}

export default CardHightlights