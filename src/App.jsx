import './Assets/css/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './Components/FirstPage'
import SecondPage from './Components/SecondPage'
import ThirdPage from './Components/ThirdPage'
import PageFour from './Components/PageFour'
import FifthPage from './Components/FifthPage'
import SixthPage from './Components/SixthPage'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'

function App  ()  {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <section id="FirstPage">
            <FirstPage />
          </section>
          <section id="SecondPage">
            <SecondPage />
          </section>
          <ThirdPage />
          <PageFour />
          <FifthPage />
          <SixthPage />          
          </>
        }/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/underconstruction" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App
