import React, { useState } from "react"


function Q2 () {

    const [isOpen, setIsOpen] = useState(false)

    const toggleQ2 = () => {

        setIsOpen(!isOpen)
    
    };

    return (
        
        <div className="faqs">
            <div className="question" onClick={toggleQ2}>
                <p className="q-text">What formats can I download my transaction history in?</p>
                <button className="chevron-down"><i className="fa-solid fa-chevron-down"></i></button>  
            </div>
            <div className={`answer ${isOpen ? 'open' : ''}`}>
                {isOpen && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit magni mollitia molestias, commodi deleniti animi. Odio officiis sed temporibus sit expedita at obcaecati?</p> }
            </div>
        </div>

    );

}
export default Q2