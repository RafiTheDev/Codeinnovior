import { Outlet } from "react-router-dom"
import Footer from "../Courses/Footer/Footer"
import Navbar from "../Navbar/Navbar"

const  MainLayouts = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayouts