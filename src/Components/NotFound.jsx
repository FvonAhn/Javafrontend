import React from "react"
import { Link } from 'react-router-dom'
import obiwan from '../Images/obiwan.jpg'

const NotFound = () => {

    return (
        <div className="notfoundPage">
            <h1>Well Hello there!</h1>
            <img src={obiwan} />
            <p>Some things are under construction...</p>
            <div className="goBack">
                <i className="fa-solid fa-arrow-left"></i>
                <Link to="/"><p className="goText">go back to high ground...</p></Link>
            </div>
        </div>
    )

}
export default NotFound