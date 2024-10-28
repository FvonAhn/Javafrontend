import React from 'react'
import Downloads from './Downloads'
import Discover from './Discover'

function Headline() {

    return (
        <>
            <div className="text-knappar">   
                <h1 className="headline">Manage All Of Your Money With One App</h1>
                <p className="bread">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <Downloads />
                {/* <Discover /> */}
            </div>     
        </>
                
    )

}
export default Headline