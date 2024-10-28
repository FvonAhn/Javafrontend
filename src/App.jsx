import './Assets/css/styles.css'
import Navbar from './Components/Navbar'
import Hero  from './Components/Hero'
import Downloads from './Components/Downloads'
import Discover from './Components/Discover'
import Phones from './Components/Phones'

function App() {

  return (

    <>
      <section id="first-page">
        <Navbar />
        <container className="bottom-of-page-1">
          <Hero />
          <Downloads />
          {/* <Discover /> */}
          <Phones />
        </container>
      </section>
    </>

  )

}

export default App
