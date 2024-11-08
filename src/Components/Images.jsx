import React from "react"
import Image1 from '../images/image-1.svg'
import Image2 from '../images/image-2.svg'

const Images = () => {

    return (
        <>

            <div className="image-1">
                <img src={Image1} />
            </div>
            <div className="image-2">
                <img src={Image2} />
            </div>
        
        </>

    )

}
export default Images