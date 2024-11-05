import React, { useState } from "react"



function Q1 () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleQ1 = () => {

        setIsOpen(!isOpen);
        
    };    

    return (

        <div className="faqs">
            <div className="question" onClick={toggleQ1}>
                <p className="q-text">Is any of my personal information stored in the app?</p>
                <button className="chevron-down"><i className="fa-solid fa-chevron-down"></i></button>  
            </div>
        <div className={`answer ${isOpen ? 'open' : ''}`}>
                {isOpen && <p className="q-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, eligendi nisi ad perspiciatis laudantium reiciendis, aliquid tempora dolores accusamus vitae deserunt doloremque dolore eaque ducimus quaerat ut omnis eum veritatis!</p> }   
            </div>
        </div>

    );
}

export default Q1