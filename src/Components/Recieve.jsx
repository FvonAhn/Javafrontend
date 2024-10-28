import React from "react"
import IconCard from "./IconCard"
import IconWallet from "./IconWallet"
import LearnMoreBtn from "./LearnMoreBtn"

const Receive = () => {

    return (

        <div className="receive">

                <div class="payment-text">
                    <p>Receive payment from</p>
                    <p>international bank details</p>
                </div>
                <IconCard />
                <IconWallet />
                <LearnMoreBtn />

        </div>

    )

}
export default Receive