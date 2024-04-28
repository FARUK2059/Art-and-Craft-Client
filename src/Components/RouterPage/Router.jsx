import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Root from "./Root";
import Home from "../AllBodyComponents/Home/Home";
import LogIn from "../AllBodyComponents/UserAndReg/LogIn";
import Register from "../AllBodyComponents/UserAndReg/Register";
import AddCraftItem from "../AllBodyComponents/AddCraftItem/AddCraftItem";
import PrivetRout from "../AuthProvider/PrivetRoute/PrivetRout";
import AllCraft from "../AllBodyComponents/AllArtAndCraft/AllCraft";
import AllCraftDetails from "../AllBodyComponents/AllArtAndCraft/AllCraftDetails";
import MyCraftList from "../AllBodyComponents/MyCraftList/MyCraftList";
import MyUpdateItem from "../AllBodyComponents/MyCraftList/MyUpdateItem";
import ArtCraftDetails from "../AllBodyComponents/Home/ArtAndCraftItem/ArtCraftDetails";
import CraftMainDetails from "../AllBodyComponents/Home/Craft-Item/CraftMainDetails";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/cetagory')
            },
            {
                path: "/craftmaindetails/:id",
                element: <CraftMainDetails></CraftMainDetails>,
                loader: () => fetch('http://localhost:5000/crafts')
            },
            {
                path: "/homedetails/:id",
                element: <ArtCraftDetails></ArtCraftDetails>,
                loader: () => fetch('http://localhost:5000/cetagory')
            },
            {
                path: "/addcraft",
                element: <PrivetRout><AddCraftItem></AddCraftItem></PrivetRout>
            },
            {
                path: "/allcraft",
                element: <AllCraft></AllCraft>,
                loader: () => fetch('http://localhost:5000/crafts')
            },
            {
                path: "/allCraftDetails/:id",
                element: <PrivetRout><AllCraftDetails></AllCraftDetails></PrivetRout>,
                loader: () => fetch('http://localhost:5000/crafts')
            },
            {
                path: "/mycraftlist",
                element: <PrivetRout><MyCraftList></MyCraftList></PrivetRout>,
                loader: () => fetch('http://localhost:5000/crafts')
            },
            {
                path: "/myupdate/:id",
                element: <PrivetRout><MyUpdateItem></MyUpdateItem></PrivetRout>,
                loader: ( { params } ) => fetch(`http://localhost:5000/crafts/${params.id}`)
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