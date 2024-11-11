import React from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import PageFour from './PageFour'
import FifthPage from './FifthPage'
import SixthPage from './SixthPage'

function HomePage  ()  {

  return (

    <>
      <section id="first-page">
        <FirstPage />
      </section>
      <section id="second-page">
        <SecondPage />
      </section>
      <section id="third-page">
        <ThirdPage />
      </section>
      <section id="fourth-page">
        <PageFour />
      </section>
      <section id="fifth-page">
        <FifthPage />
      </section>
      <section id="sixth-page">
        <SixthPage />  
      </section>
    </>

  )

}
export default HomePage
