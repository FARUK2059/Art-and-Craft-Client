import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Root from "./Root";
import Home from "../AllBodyComponents/Home/Home";
import LogIn from "../AllBodyComponents/UserAndReg/LogIn";
import Register from "../AllBodyComponents/UserAndReg/Register";
import AddCraftItem from "../AllBodyComponents/AddCraftItem/AddCraftItem";
import PrivetRout from "../AuthProvider/PrivetRoute/PrivetRout";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addcraft",
                element: <PrivetRout><AddCraftItem></AddCraftItem></PrivetRout>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;