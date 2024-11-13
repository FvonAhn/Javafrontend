import './Assets/css/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './Components/FirstPage'
import SecondPage from './Components/SecondPage'
import ThirdPage from './Components/ThirdPage'
import PageFour from './Components/PageFour'
import FifthPage from './Components/FifthPage'
import SixthPage from './Components/SixthPage'
import Contact from './Components/Contact'

function App  ()  {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <PageFour />
          <FifthPage />
          <SixthPage />          
          </>
        }/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
export default App
