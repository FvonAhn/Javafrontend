import React from "react";

const Details = () => {
    return (
        <>
                <div className="details">
                    <div className="details-envelope">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="details-text">
                        <h3>Email Us</h3>
                        <p>Please feel free to drop us a line. We will <br/>
                        respond a soon as possible.</p>
                        <a href="#" className="contact-btn">
                            <p className="contact-btn">Leave a message</p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="details">
                    <div className="details-icon">
                        <i className="fa-solid fa-user-plus"></i>
                    </div>
                    <div className="details-text">
                    <h3>Careers</h3>
                    <p>Interested in working with us? Drop us<br/>
                    an application and we will get back to you if needed.</p>
                    <a href="#" className="contact-btn">
                        <p className="contact-btn">Send an application</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    </div>
                </div>
        </>
    )
}
export default Details