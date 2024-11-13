import React from "react";

import Navbar from "./Navbar";
import ConsultForm from "./ConsultForm";
import Details from "./Details";
import MedicalCenter from "./MedicalCenter";
import SocialMedia from "./SocialMedia";
import Coordinates from "./Coordinates";


function Contact () {

    return (

        <>  
            <Navbar />
            <div className="contactPage">
                <div className="navTopLeft">
                    <div className="pageNavigation">
                        <a href="/" className="home">
                            <i className="fa-solid fa-house"></i>
                            Home
                        </a>
                        <i className="fa-solid fa-angles-right"></i>
                        <a href="#">Contact</a>
                    </div>
                    <h2 className="navHeadline">Contact Us</h2>
                    <div className="details-container">
                        <Details />
                    </div>
                </div>
                <div className="consult-container">
                    <ConsultForm />
                </div>
                <div className="map-container">
                    <Coordinates />
                </div>
                <div className="navBottomRight">
                    <div className="medical-container">
                        <MedicalCenter />
                    </div>
                    <div className="social-container">
                        <SocialMedia />
                    </div>
                </div>

            </div>
            <p className="contactMark">© 2024 Silicon. All Rights Reserved. Made by FvA. Credit to Madras.</p>

        </>

    )

}
export default Contact