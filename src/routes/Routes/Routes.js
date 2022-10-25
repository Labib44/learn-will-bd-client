import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home";

export const routes=createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[

        {path:'/', element:<Home></Home>},

        {path:'/category/:id', element:<Category></Category>},

    ]}
])