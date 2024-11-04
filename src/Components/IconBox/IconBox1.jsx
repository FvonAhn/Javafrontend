import React from "react";
import iconBoxImg1 from "./images/iconBoxImg1"

const IconBox1 = () => {
    return (
        <div className="iconBox">
            <div className="iconBox-image">
                <img src={iconBoxImg1} />
            </div>
            <div className="iconBox-text">
                <p className="iconBox-header">Hope And Survival</p>
                <p className="IconBox-bread">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, similique?</p>
            </div>  
        </div>
    )
}
export default IconBox1