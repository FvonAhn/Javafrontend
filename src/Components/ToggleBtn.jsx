import React from "react";

const ToggleBtn = () => {

    return (

        <div className="toggle-switch">
            <span className="Label">Dark Mode</span>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>    

    )

}
export default ToggleBtn