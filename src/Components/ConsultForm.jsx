import React, { useState } from "react";

function ConsultForm () {

    const [formData, setFormData] = useState({ name: '', email: '', specialist: '' })
    const [submitted, setSubmitted] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleOK = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({ name: '', email: '', specialist: '' })
        }
    }

    if (submitted) {
        return (
            <div className="infoBox">
                <h1>Thank you!</h1>
                <p>You will never here from us.</p>
                <button className="infoBox-btn" onClick={handleOK}>OK</button>
            </div>
        )
    }
      
    const people = [
      { id: 1, name: 'Benny Gurksats' },
      { id: 2, name: 'Hony Tawk' },
      { id: 3, name: 'Deppie John' },
      { id: 4, name: 'Pad Britt' },
    ];
  
    const handleSelection = (event) => {
      setSelectedPerson(event.target.value);
    }

return (

    <div className="consultForm">
        <form onSubmit={handleSubmit} noValidate>
            <div className="conHeadline">
                <h2>Get Online Consultation</h2>
            </div>
            <div className="conInputs">
                <p className="conText">Full Name</p>
                <input type="text" value={formData.name} onChange={handleChange} className="inputFullName" name="name" />
                <p className="conText">Email Adress</p>
                <input type="email" value={formData.email} onChange={handleChange}  className="inputEmail" name="email" />
                <p className="conText">Specialist</p>
                <select className="specialist" onChange={handleSelection} value={selectedPerson} name="specialist">
                    <option vaule="">-none-</option>
                    {people.map((person) => (<option key={person.id} value={person.name}>{person.name}</option>))}
                </select>
            </div>
            <div>
                <button type="submit" className="consult-btn">Make an appointment</button>
            </div>
        </form>
    </div>

)

}
export default ConsultForm