import React from "react"
import QuotesImg from '../images/quotes.svg'
import AlbertImg from '../images/image-albert.svg'
import Rating2Img from '../images/rating-2.svg'


const Albert = () => {

    return (

        <div className="quotes">
            <img src={QuotesImg} className="dubbelsnuttar" />
            <img src={Rating2Img} className="rating" />
            <p className="quote-text">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enum ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc</p>
            <div className="twoclients">
                <img src={AlbertImg} />
                <div>
                    <h3>Albert Flores</h3>
                    <p>Developer</p>
                </div>
            </div>
        </div>

    )

}
export default Albert