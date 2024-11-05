import React, { useState } from "react";


const ToggleBtn = () => {

    const [isDarkMode, setIsDarkMode ] = useState(false);

    const toggleTheme = () => {

        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            document.documentElement.classList.add('dark-theme');
        }
        else {
            document.documentElement.classList.remove('dark-theme');
        }

    };


    return (

        <div className="toggle-switch">
            <span className="Label">Dark Mode</span>
            <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
        </div>    

    )

}
export default ToggleBtn