import React, { useState } from "react"

function Q3 () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleQ3 = () => {

        setIsOpen(!isOpen);
        
    };    

    return (
        <div className="faqs">
            <div className="question" onClick={toggleQ3}>
                <p className="q-text">Can I schedule future transactions?</p>
                <button className="chevron-down">
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </div>
            <div className={`answer ${isOpen ? 'open' : ''}`}>
                {isOpen && <p className="q-text">Yes you can! But if you do, you will notice that we allways taka a fee between 10 to 100$ depending on the size of the transaction taking place. And that even counts for smaller transactions than 10$. But it is a piece of cake to schedule. Just go to the tab that says "Schedule transaction" and pick a date, then pick from what account you want to withdraw from. </p> }            
            </div>
        </div>

    )

}
export default Q3