import React from "react"
import { Link } from 'react-router-dom'
import obiwan from '../Images/obiwan.jpg'

const NotFound = () => {

    return (
        <div className="notfoundPage">
            <h1>Well Hello there!</h1>
            <img src={obiwan} />
            <p>Some things are under construction...</p>
            <Link to="/">go back to high ground...</Link>
        </div>
    )

}
export default NotFound