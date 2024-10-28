import './Assets/css/styles.css'
import Navbar from './Components/Navbar'
import Hero  from './Components/Hero'
import HeaderP2 from './Components/HeaderP2'
import InfoSheet from './Components/InfoSheet'
import Work from './Components/Works'
import PageFour from './Components/PageFour'

const App = () => {

  return (

    <>
      <section id="first-page">
        <Navbar />
        <Hero />
      </section>
      <section id="second-page">
        <HeaderP2 />
        <InfoSheet />
      </section>
      <section id="third-page">
        <Work />
      </section>
      <section id="fourth-page">
        <PageFour />
      </section>
    </>

  )

}
export default App
