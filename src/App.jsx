import './Assets/css/styles.css'
import Work from './Components/Works'
import FirstPage from './Components/FirstPage'
import SecondPage from './Components/SecondPage'
import PageFour from './Components/PageFour'

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
        <Work />
      </section>
      <section id="fourth-page">
        <PageFour />
      </section>
      <section id="fifth-page">

      </section>
    </>

  )

}
export default App
