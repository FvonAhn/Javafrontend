import React from "react";
import CashbackImg from '../images/icon-cashback.svg'

const CashbackIcon = () => {
    return (
        <>
        <div className="iconBox">
            <img src={CashbackImg} />
            <div className="iconBox-text">
                <p className="iconBox-header">Regular Cashback</p>
                <p className="IconBox-bread">Sit facilisis dolor arcu, fermentum vestibulum arcu elentum imperdiet eleifend.</p>
            </div>
        </div>
        </>
    )
}
export default CashbackIcon