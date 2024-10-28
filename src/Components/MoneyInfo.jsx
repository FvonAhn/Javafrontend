import React from "react"
import CheckCircle from '../images/check-circle.svg'

const MoneyInfo = () => {

    return (

        <>
            <p className="banking-text"><img src={CheckCircle} />Banking transactions are free for you</p>
            <p className="monthly-text"><img src={CheckCircle} />No monthly cash commission</p>
            <p className="manage-text"><img src={CheckCircle} />Manage payments and transactions online</p>
        </>

    )

}
export default MoneyInfo