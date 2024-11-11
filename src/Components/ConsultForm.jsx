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
            <h2>Get Online Consultation</h2>
            <input type="full name" className="inputFullName" name="full name" placeholder="Your Full Name Here" />
            <input type="email" className="inputEmail" name="email" placeholder="Your Email Here" />
            <select onChange={handleSelection} value={selectedPerson}>
                <option vaule="" disabled>Specialist</option>
                {people.map((person) => (<option key={person.id} value={person.name}>{person.name}</option>))}
            </select>
            <button className="">Make an appointment</button>
        </form>
    </div>

)

}
export default ConsultForm