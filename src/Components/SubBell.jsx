import React from "react"
import Notification from '../images/notification.svg'

const SubBell = () => {

    return (

        <div className="sub-bell">
            <img src={Notification} />
            <div className="sub-text">
                <p>Subscribe to our newsletter to stay informed  about our latest updates</p>
            </div>
        </div>

    )

}
export default SubBell