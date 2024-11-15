import React from "react"
import IconTele from '../images/icon-telephone.svg'

const Call = () => {

    return (

        <a href="/underconstruction" className="call">
            <img src={IconTele} />
            <p>still have questions?</p>
            <div className="contact-us-1">
                <p>Contact us</p>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </a>

    )

}
export default Call