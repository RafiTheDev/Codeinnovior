import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Home/Home";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Contact from "../Contact/Contact";
import Error from "../Error/Error";


const router=createBrowserRouter([
    {

        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        


        children:[{
            path:'/',
            element:<Home></Home>
        },


        {
            path: '/about',
            element:<About></About>
        },

        {
            path: '/courses',
            element:<Courses></Courses>
        },

        {
            path: '/contact',
            element: <Contact></Contact>
        }
    
    ]




    }

]

)

export default router