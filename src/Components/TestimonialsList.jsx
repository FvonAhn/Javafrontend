import React, { useState, useEffect } from "react";
import Testimonials from './Testimonials'

const TestimonialsList = () => {
    const [testimonialsItems, setTestimonialsItems] = useState([])

    const fetchData = async () => {

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')

        const data = await res.json
        setTestimonialsItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div class="quote-container">
            {
                testimonialsItems.map((item) => (<Testimonials key={item.id} item={item} />))
            }
        </div>

    )

}

export default TestimonialsList