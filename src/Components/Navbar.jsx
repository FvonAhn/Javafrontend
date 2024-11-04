import React from 'react'
import silicon from '../images/shape.svg'
import ToggleBtn from './ToggleBtn'
import SignInUp from './SignInUp'

function Navbar() {

    return (

        <header className="top-of-page-1">              
            <div className="toppen">
            
                <div className="silicon-image">
                    <a href="#" className="silicon">
                        <img src={silicon} />
                        <p className="silicon-text">Silicon</p>
                    </a>
                </div>
                <nav className="feat">
                    <a href="#">Features</a>
                    <a href="#">Contact</a>       
                </nav>         
                <ToggleBtn />
                <SignInUp />
            </div>
        </header>
    
    )

}
export default Navbar
