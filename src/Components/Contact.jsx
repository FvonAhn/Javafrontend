import React from "react";

import Navbar from "./Navbar";
import ConsultForm from "./ConsultForm";
import Map from "./Map";
import Details from "./Details";
import MedicalCenter from "./MedicalCenter";
import SocialMedia from "./SocialMedia";

function Contact () {

    return (

        <>  
            <Navbar />
            <div className="contactPage">
                <div className="navTopLeft">
                    <div className="pageNavigation">
                        <a href="#" className="home">
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
                    <Map />
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

        </>

    )

}
export default Contact