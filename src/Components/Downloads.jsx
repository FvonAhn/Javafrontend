import React from "react"
import gplaylogo from '../images/gplaylogo.svg'
import applelogo from '../images/applelogo.svg'

function Downloads() {

    return (

        <div className="downloads">
            <div className="btn-apple">
                <a href="/underconstruction"><img src={applelogo} /></a>
            </div>
            <div className="btn-google">
                <a href="/underconstruction"><img src={gplaylogo} /></a>
            </div>         
        </div>

    )

}
export default Downloads