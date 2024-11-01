import React from "react"
import ArrowDown from '../images/arrow-down.svg'

const Q3 = () => {

    return (
        <div className="faqs">
            <div className="question">
                <p className="q-text">Can I schedule future transactions?</p>
                <button className="chevron-down"><i className="fa-solid fa-chevron-down"></i></button>
            </div>
            <div className="answer">
                <p className="q-text">Yes you can! But if you do, you will notice that we allways taka a fee between 10 to 100$ depending on the size of the transaction taking place. And that even counts for smaller transactions than 10$. But it is a piece of cake to schedule. Just go to the tab that says "Schedule transaction" and pick a date, then pick from what account you want to withdraw from. </p>
            </div>
        </div>

    )

}
export default Q3