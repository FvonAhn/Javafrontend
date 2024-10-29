import React from 'react'
import silicon from '../images/silicon.svg'

function Navbar() {

    return (

        <header className="top-of-page-1">              
            <div className="toppen">
            
                <div className="silicon-image">
                    <a href="#"><img src={silicon} /></a>
                </div>
                <nav className="feat">
                    <a href="#">Features</a>
                    <a href="#">Contact</a>       
                </nav>         
                <div className="toggle-switch">
                    <span className="Label">Dark Mode</span>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <a href="#" className="btn-gubbe">
                        <i className="fa-regular fa-user"></i>
                        <span>Sign in / up</span>
                    </a>
                </div>    
            </div>
        </header>
    
    )

}
export default Navbar
