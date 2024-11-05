import React, { useState } from "react"

function Q4  () {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleQ4 = () => {

        setIsOpen(!isOpen);
        
    };    

    return (

        <div className="faqs">
            <div className="question" onClick={toggleQ4}>
                <p className="q-text">When can I use Banking App services?</p>
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
export default Q4