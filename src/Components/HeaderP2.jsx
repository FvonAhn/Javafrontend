import React from "react"
import logo1 from '../images/logo-1.svg'
import logo2 from '../images/logo-2.svg'
import logo3 from '../images/logo-3.svg'
import logo4 from '../images/logo-4.svg'
import logo5 from '../images/logo-5.svg'
import logo6 from '../images/logo-6.svg'

function HeaderP2 () {

    return (

        <container className="logos">
            <a href="#"><img src={logo1} /></a>
            <a href="#"><img src={logo2} /></a>
            <a href="#"><img src={logo3} /></a>
            <a href="#"><img src={logo4} /></a>
            <a href="#"><img src={logo5} /></a>
            <a href="#"><img src={logo6} /></a>
        </container>

    )

}
export default HeaderP2