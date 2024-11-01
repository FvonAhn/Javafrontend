import './Assets/css/styles.css'
import FirstPage from './Components/FirstPage'
import SecondPage from './Components/SecondPage'
import ThirdPage from './Components/ThirdPage'
import PageFour from './Components/PageFour'
import FifthPage from './Components/FifthPage'
import SixthPage from './Components/SixthPage'

const App = () => {

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
export default App
