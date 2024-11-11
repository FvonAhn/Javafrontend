import React, { useState } from "react";

function ConsultForm () {

    return (

        <div className="consultForm">
            <form>
                <h2>Get Online Consultation</h2>
                <input type="full name" className="inputFullName" name="full name" placeholder="Your Full Name Here" />
                <input type="email" className="inputEmail" name="email" placeholder="Your Email Here" />
                <select onChange={handleSelection}></select>
                <button className="">Make an appointment</button>
            </form>
        </div>

    )

}
export default ConsultForm