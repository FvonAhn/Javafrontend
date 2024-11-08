import React, { useState, useEffect} from "react"
import QuotesImg from '../images/quotes.svg'
import Rating1img from '../images/rating-2.svg'
import Rating2Img from '../images/rating-1.svg'



const Clients = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {

        const fetchTestimonials = async () => {

            try {

                const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials');
                
                const data = await res.json();
                console.log(data)
                setTestimonials(data);

            } catch (error) {

                console.error('Oops, Something went wrong here. ', error);

            }
        }

        fetchTestimonials ()
    }, [])

    return (

            <div className="testimonials">
                <p className="clients">Clients are loving our app</p>
                <div className="quote-container">
                    <>{testimonials.map((testimonial, index) => 
                    (
                        <div className="quotes" key={index}>
                            <img src={QuotesImg} className="dubbelsnuttar" />
                            <img src={testimonial.starRating >= 5? Rating1img : Rating2Img} alt='Rating' className="rating" />
                            <p className="quote-text">{testimonial.comment}</p>
                            <div className="twoclients">
                                <img src={testimonial.avatarUrl} alt={`${testimonial.author}'s profile`} />
                                <div>
                                    <h3>{testimonial.author}</h3>
                                    <p>{testimonial.jobRole}</p>
                                </div>
                            </div>
                        </div>
                    ))}</>
                </div>
            </div>
    )
    

}
export default Clients

/* Jag fick fragments av Johan */