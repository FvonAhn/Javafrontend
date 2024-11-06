import React from "react"
import Fannie from "./Fannie"
import Albert from "./Albert"
import TestimonialsList from "./TestimonialsList"

const Testimonials = () => {

    return (

        <>
            <div class="testimonials">
                <p class="clients">Clients are loving our app</p>
                <div class="quote-container">
                    <Fannie />
                    <Albert />
                </div>
            </div>
        </>

    )

}
export default Testimonials
