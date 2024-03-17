import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../components/home/Home";
import Dashboard from "../components/dashboard/Dashboard";
import Application from "../components/application/Application";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'application',
                element:<Application></Application>
            }
        ]
    }
])

export default router;