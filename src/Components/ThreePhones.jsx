import React from "react"
import phone1 from '../images/phone-1.svg'
import phone2 from '../images/phone-2.svg'
import phone3 from '../images/phone-3.svg'

const ThreePhones = () => {

    return (

        <div className="three-phones">
            
            <a><img src={phone1}/></a>
            <a><img src={phone2}/></a>
            <a><img src={phone3}/></a>

        </div> 

    )

}
export default ThreePhones