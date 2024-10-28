import React from "react"
import ArrowDown from '../images/arrow-down.svg'

const Q3 = () => {

    return (

        <a href="#" className="question-w-answer">
            <div className="q-text-arrow">
                <p className="q-text">Can I schedule future transactions?</p>
                <img src={ArrowDown} className="arrow-up" /> 
            </div>
            <p className="q-answer">Yes you can! But if you do, you will notice that we allways taka a fee between 10 to 100$ depending on the size of the transaction taking place. And that even counts for smaller transactions than 10$. But it is a piece of cake to schedule. Just go to the tab that says "Schedule transaction" and pick a date, then pick from what account you want to withdraw from. </p>
        </a>

    )

}
export default Q3