import React from "react";
import SecurityImg from '../images/icon-security.svg'

const SecurityIcon = () => {
    return (
        <>
        <div className="iconBox">
            <img src={SecurityImg} />
            <div className="iconBox-text">
                <p className="iconBox-header">Data Security</p>
                <p className="IconBox-bread">Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>
        </div>
        </>
    )
}
export default SecurityIcon