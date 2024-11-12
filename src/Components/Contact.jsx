import React from "react";

import Navbar from "./Navbar";
import ConsultForm from "./ConsultForm";
import Map from "./Map";
import Details from "./Details";

function Contact () {

    return (

        <>  
            <Navbar />
            <div className="contactPage">

                <div className="pageNavigation">
                    <a href="#" className="home">
                        <i className="fa-solid fa-house"></i>
                        Home
                    </a>
                    <i class="fa-solid fa-angles-right"></i>
                    <a href="#">Contact</a>
                </div>


                <h2 className="Headline">Contact Us</h2>

                <div className="details-container">
                    <Details />
                </div>
                <div className="consult-container">
                    <ConsultForm />
                </div>
                <div className="map-container">
                    <Map />
                </div>

            </div>

        </>

    )

}
export default Contact