import React from "react";
import PaymentsImg from '../images/icon-payments.svg'

const PaymentsIcon = () => {
    return (
        <>
        <div className="iconBox">
            <img src={PaymentsImg} />
            <div className="iconBox-text">
                <p className="iconBox-header">Hope And Survival</p>
                <p className="IconBox-bread">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, similique?</p>
            </div>
        </div>
        </>
    )
}
export default PaymentsIcon