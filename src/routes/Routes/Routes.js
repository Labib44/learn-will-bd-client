import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category/Category";
import Course from "../../pages/Course/Course";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import CheckOut from "../../shared/CheckOut/CheckOut";
import CourseDetails from "../../shared/CourseDetails/CourseDetails";
import Login from "../../shared/Login/Login";
import Register from "../../shared/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [

            {
                path: '/', element: <Home></Home>
            },

            {
                path: '/courses', element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/course-category')
            },

            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },

            {
                path: '/category/:id', element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },

            {
                path: '/details/:id', element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },


        ]
    },
    { path: '/blog', element: <Blog></Blog> },
    { path: '/checkOut/:id', element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
},
{path:'/*', element:<Error></Error>}

])