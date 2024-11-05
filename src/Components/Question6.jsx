import React, { useState } from "react"

function Q6 () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleQ6 = () => {

        setIsOpen(!isOpen);
        
    };    

    return (

        <div className="faqs">
            <div className="question" onClick={toggleQ6}>
                <p className="q-text">What if I forget or lose my password?</p>
                <button className="chevron-down">
                    <i className="fa-solid fa-chevron-down"></i>                    
                </button>
            </div>
            <div className={`answer ${isOpen ? 'open' : ''}`}>
               {isOpen && <p className="q-†ext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit harum sint dolore a molestias adipisci, praesentium ipsum explicabo ad quo accusamus consequuntur vel provident ab necessitatibus. Omnis totam cumque iure consequatur dicta?</p>}
            </div>
        </div>


    );

}
export default Q6