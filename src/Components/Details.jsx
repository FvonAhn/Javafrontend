import React from "react";

const Details = () => {
    return (
        <>
            <div className="details">
                <div className="details-icon">
                    <i className="fa-regular fa-envelope"></i>
                </div>
                <h3>Email Us</h3>
                <p>Please feel free to drop us a line. We will <br/>
                respond a soon as possible.</p>
                <nav href="#" className="contact-btn">
                    <p>Leave a message</p>
                    <i id="contact-icon" className="fa-solid fa-arrow-right"></i>
                </nav>
            </div>

            <div className="details">
                <div className="details-icon">
                    <i className="fa-solid fa-user-plus"></i>
                </div>
                <h3>Careers</h3>
                <p>Interested in working with us? Drop us<br/>
                an application and we will get back to you if needed.</p>
                <nav href="#" className="contact-btn">
                    <p>Send an application</p>
                    <i id="contact-icon" className="fa-solid fa-arrow-right"></i>
                </nav>
            </div>
        </>
    )
}
export default Details