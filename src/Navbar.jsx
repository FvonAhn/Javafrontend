import { useState } from 'react'
import './css/Navbar.css'
import './images'

function Navbar() {

        return (
            <>
            
                <header className="top-of-page-1">              
                    <div className="toppen">
                    
                        <div className="silicon-image">
                            <a href="index.html"><img src="/images/silicon.svg"/></a>
                        </div>
                        <nav className="feat">
                            <a href="#second-page">Features</a>       
                        </nav>            
                        <div className="toggle-switch">
                            <span className="Label">Dark Mode</span>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                            <a href="#" onclick="openPopup()" className="btn-gubbe">
                                <i className="fa-regular fa-user"></i>
                                <span>Sign in / up</span>
                        </a>
                    </div>

                    </div>    
                </header>
            
            </>
        )

}
export default Navbar
