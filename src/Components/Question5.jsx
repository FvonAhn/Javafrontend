import React, { useState } from "react"

function Q5 () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleQ5 = () => {

        setIsOpen(!isOpen);
        
    };    

    return (

        <div className="faqs">
            <div className="question" onClick={toggleQ5}>
                <p className="q-text">Can I create my own password that is easy for me to remember?</p>
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
export default Q5