import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Error from "../../Pages/404/Error";
import SingleCategory from "../../Pages/Home/Categories/SingleCategory/SingleCategory";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Join/LogIn/LogIn";
import Register from "../../Pages/Join/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <SingleCategory></SingleCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category?category_id=${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;