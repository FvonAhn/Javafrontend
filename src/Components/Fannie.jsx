import React from "react"
import FannieImg from '../images/image-fannie.svg'
import QuotesImg from '../images/quotes.svg'
import Rating1img from '../images/rating-1.svg'


const Fannie = () => {

    return (

        <div className="quotes">
            <img src={QuotesImg} className="dubbelsnuttar" />
            <img src={Rating1img} className="rating" />
            <p className="quote-text">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet pusuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turps sit amet.</p>
            <div className="twoclients">
                <img src={FannieImg} />
                <div>
                    <h3>Fannie Summers</h3>
                    <p>Designer</p>
                </div>
            </div>
        </div>

    )

}
export default Fannie