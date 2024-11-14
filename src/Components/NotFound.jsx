import React from "react";
import obiwan from './Images/obiwan'

const NotFound = () => {

    return (
        <div className="notfoundPage">
            <h1>Well Hello there!</h1>
            <img src={obiwan} />
            <p>Some things are under construction...</p>
            <a href="/">go back to high ground...</a>
        </div>
    )

}
export default NotFound