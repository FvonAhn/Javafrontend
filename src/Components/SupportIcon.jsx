import React from "react";
import SupportImg from '../images/icon-support.svg'

const SupportIcon = () => {
    return (
        <>
        <div className="iconBox">
            <img src={SupportImg} />
            <div className="iconBox-text">
                <p className="iconBox-header">Support 24/7</p>
                <p className="IconBox-bread">A elemtum. imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
        </div>
        </>
    )
}
export default SupportIcon