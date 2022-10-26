import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Course from "../../pages/Course/Course";
import Home from "../../pages/Home/Home";
import Login from "../../shared/Login/Login";
import Register from "../../shared/Register/Register";

export const routes=createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[

        {path:'/', element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/course-category')
    },
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>},

        {path:'/category/:id', element:<Category></Category>,
        loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
    },

        {path:'/course/:id', element:<Course></Course>},

    ]}
])