import React from "react"
import MoneyInfo from "./MoneyInfo"
import LearnMoreBtn from "./LearnMoreBtn"

const Money = () => {

    return (

        <div className="money">
            <div className="transfer-text">
                <p>Make your money</p> 
                <p>transfer simple and clear</p>
            </div>        
            <MoneyInfo />
            <LearnMoreBtn />
        </div>  

    )

}
export default Money