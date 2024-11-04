import React from "react";
import StatsImg from '../images/icon-stats.svg'

const StatsIcon = () => {
    return (
        <>
        <div className="iconBox">
            <img src={StatsImg} />
            <div className="iconBox-text">
                <p className="iconBox-header">Cost Statistics</p>
                <p className="IconBox-bread">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
        </div>
        </>
    )
}
export default StatsIcon