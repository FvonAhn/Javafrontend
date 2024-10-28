import React from "react"
import Envelope from '../images/envelope.svg'

const SubForm = () => {

    return (

        <form action="/submit" method="post" className="sub-form">

            <img className="sub-img" src={Envelope} />
            <input type="email" className="input-email" name="email" placeholder="Your Email" required />
            <button type="submit" className="btn-sub">Subscribe</button>
            
        </form> 

    )

}
export default SubForm