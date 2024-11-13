import React, { useState, useEffect } from "react";


const ToggleBtn = () => {

    const [isDarkMode, setIsDarkMode ] = useState(() => {
        return localStorage.getItem('isDarkMode') === 'true';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-theme');
            } 
        else {
            document.documentElement.classList.remove('dark-theme');
        }},  
        [isDarkMode])

    const toggleTheme = () => {

        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('isDarkMode', newMode);

        if (newMode) {
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