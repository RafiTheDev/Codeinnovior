
import './App.css'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Courses from './Components/Courses/Courses'
import Footer from './Components/Courses/Footer/Footer'
import Features from './Components/Features/Features'
import Gallery from './Components/Gallery/Gallery'
import Navbar from './Components/Navbar/Navbar'
import Team from './Components/Team/Team'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
      <Courses></Courses>
      <Gallery></Gallery>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
