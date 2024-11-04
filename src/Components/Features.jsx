import React from "react"
import PaymentsIcon from './PaymentsIcon'
import StatsIcon from "./StatsIcon"
import CashbackIcon from "./CashbackIcon"
import SecurityIcon from "./SecurityIcon"
import SupportIcon from "./SupportIcon"
import StandardsIcon from "./StandardsIcon"

const Features = () => {

    return (

        <div>
            <div>
                <h2 className="app-features">App Features</h2>
                <p className="app-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sapiente illo nemo deleniti totam dolores! Dolores ipsam quis quasi, iure non omnis obcaecati reiciendis voluptates.</p>
            </div>
            <div className="icons-1">
                <PaymentsIcon />
                <SecurityIcon />
                <StatsIcon />
                <SupportIcon />
                <CashbackIcon />
                <StandardsIcon />
            </div>
        </div> 

    )

}
export default Features