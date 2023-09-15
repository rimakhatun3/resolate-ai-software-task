import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTask from "../Pages/AddTask/AddTask";
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/addtask",
                element:<AddTask></AddTask>
            },
        ]
    }
])

export default router