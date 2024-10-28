import React from "react"
import IconBubble from '../images/icon-bubble.svg'


const Sms = () => {

    return (

        <a href="#" className="sms">
            <img src={IconBubble} />
            <p>Don't like phone calls?</p>
            <div className="contact-us-2">
                <p>Contact us</p>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </a>    

    )

}
export default Sms