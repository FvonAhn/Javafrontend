import React, { useState, useEffect } from "react"


const TheFaqs = () => {


    const [faqs, setFaqs] = useState([]);
    const [openFaqs, setOpenFaqs] = useState({})

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

    const toggleQuestion = (index) => {
    setOpenFaqs((prevOpenFaqs) => ({...prevOpenFaqs, [index]: !prevOpenFaqs[index]
    }));
    }; 

    return (

        <div className="the-faqs">
                {faqs.map((item, index) => (
                    <div className="faqs" key={index}>
                        <div className="question" onClick={ () => toggleQuestion(index)}>
                            <p className="q-text">{item.title}</p>
                            <button className={`chevron-down ${openFaqs[index] ? 'open' : ''}`}><i className="fa-solid fa-chevron-down"></i></button>  
                        </div>
                        <div className={`answer ${openFaqs[index] ? 'open' : ''}`}>
                            {openFaqs[index] && <p className="q-text">{item.content}</p> }   
                        </div>
                    </div>
                ))}
        </div>

    )

}
export default TheFaqs