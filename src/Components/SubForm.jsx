import React, { useState } from "react"
import Envelope from '../images/envelope.svg'

const SubForm = () => {

    const [formData, setFormData] = useState({ email: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleOK = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (!res.ok) {
            const errorText = await res.text()
            console.error('Submission failed with status: ', res.status, errorText)
            alert(`Hmmm... was that really a email adress? Error: ${res.status} - ${errorText}`)
        } else {
            setSubmitted(true)
            setFormData({ email: '' })
        }
        } catch (error) {
            console.error('Error during submission:', error)
        }
    }

    return (

        <div>
            {submitted ? (
                <div className="infoBox">
                <h1>Thank you!</h1>
                <p className="infoBox-text">You will never here from us.</p>
                <button className="infoBox-btn" onClick={handleOK}>OK</button>
            </div>
            ) : (

            <form onSubmit={handleSubmit} className="sub-form" noValidate>

                <img className="sub-img" src={Envelope} />
                <input type="email" value={formData.email} onChange={handleChange} className="input-email" name="email" placeholder="Your Email" />
                <button type="submit" className="btn-sub">Subscribe</button>
                
            </form> 
            )}
        </div>


    )

}
export default SubForm