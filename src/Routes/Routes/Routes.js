import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Error from "../../Pages/404/Error";
import Blogs from "../../Pages/Blog/Blogs";
import SingleCategory from "../../Pages/Home/Categories/SingleCategory/SingleCategory";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Join/LogIn/LogIn";
import Register from "../../Pages/Join/Register/Register";
import Test from "../../Pages/Test.js/Test";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/blog',
                element: <Blogs></Blogs>
            },
            // {
            //     path: '/blog/:id',
            //     element: <Home></Home>,
            //     loader: () => fetch('blogs.json')
            // },
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
            },
            {
                path: "/test",
                element: <Test></Test>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element: <p>Hello, I am coming soon.</p>
            },
            {
                path: '/dashboard/admin',
                element: <p>Hello, I am Admin.</p>
            },
            {
                path: '/dashboard/seller',
                element: <p>Hello, I am Seller.</p>
            },
            {
                path: '/dashboard/buyer',
                element: <p>Hello, I am Buyer.</p>
            },
            // {
            //     path: '/dashboard/allusers',
            //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/adddoctor',
            //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            // },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
            // },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;