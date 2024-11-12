import React, { useState } from "react";

function ConsultForm () {

    const [selectedPerson, setSelectedPerson] = useState('');
      
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
        <form>
            <div className="conHeadline">
                <h2>Get Online Consultation</h2>
            </div>
            <p>Full Name</p>
            <input type="full name" className="inputFullName" name="full name" />
            <p>Email Adress</p>
            <input type="email" className="inputEmail" name="email" />
            <p>Specialist</p>
            <select className="specialist" onChange={handleSelection} value={selectedPerson}>
                <option vaule="">-none-</option>
                {people.map((person) => (<option key={person.id} value={person.name}>{person.name}</option>))}
            </select>
            <div>
                <button className="consult-btn">Make an appointment</button>
            </div>
        </form>
    </div>

)

}
export default ConsultForm