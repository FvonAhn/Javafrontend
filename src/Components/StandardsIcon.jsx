import React from "react";
import StandardsImg from '../images/icon-standards.svg'

const StandardsIcon = () => {
    return (
        <>
        <div className="iconBox">
            <img src={StandardsImg} />
            <div className="iconBox-text">
                <p className="iconBox-header">Top Standards</p>
                <p className="IconBox-bread">Faucibus cursus maecaenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
        </div>
        </>
    )
}
export default StandardsIcon