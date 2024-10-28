import React from "react"
import Call from "./Call"
import Sms from "./Sms"

const TopLeft = () => {

    return (
        <div className="top-left">
        
            <div>
                <p class="text-faqs">Any questions?</p>
                <p class="text-faqs">Check out the FAQs</p>
            </div>
            <p class="text-in-touch">Still have unanswered questions and need to get in touch</p>
            <div className="call-text-us">

                <Call />
                <Sms />

            </div>

        </div>

    )

}
export default TopLeft