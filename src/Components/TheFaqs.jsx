import React, { useState, useEffect } from "react"


const TheFaqs = () => {


    const [faqs, setFaqs] = useState([]);

    useEffect(() => {

        const fetchFaqs = async () => {

            try {

                const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq');
                const data = await res.json();
                console.log(data)
                setFaqs(data);

            } catch (error) {

                console.error('Oops, Something went wrong here. ', error);

            }
        }

        fetchFaqs ()
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleQuestion = () => {
    setIsOpen(!isOpen);
    }; 

    return (

        <div className="the-faqs">
                {faqs.map((item, index) => (
                    <div className="faqs">
                        <div className="question" onClick={toggleQuestion}>
                            <p className="q-text">{item.title}</p>
                            <button className="chevron-down"><i className="fa-solid fa-chevron-down"></i></button>  
                        </div>
                        <div className={`answer ${isOpen ? 'open' : ''}`}>
                            {isOpen && <p className="q-text">{item.content}</p> }   
                        </div>
                    </div>
                ))}
        </div>

    )

}
export default TheFaqs