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
                loader: () => fetch('https://art-and-craft-store-backend-server.vercel.app/cetagory')
            },
            {
                path: "/craftmaindetails/:id",
                element: <PrivetRout><CraftMainDetails></CraftMainDetails></PrivetRout>,
                loader: () => fetch('https://art-and-craft-store-backend-server.vercel.app/crafts')
            },
            {
                path: "/homedetails/:id",
                element: <PrivetRout><ArtCraftDetails></ArtCraftDetails></PrivetRout>,
                loader: () => fetch('https://art-and-craft-store-backend-server.vercel.app/cetagory')
            },
            {
                path: "/addcraft",
                element: <PrivetRout><AddCraftItem></AddCraftItem></PrivetRout>
            },
            {
                path: "/allcraft",
                element: <AllCraft></AllCraft>,
                loader: () => fetch('https://art-and-craft-store-backend-server.vercel.app/crafts')
            },
            {
                path: "/allCraftDetails/:id",
                element: <PrivetRout><AllCraftDetails></AllCraftDetails></PrivetRout>,
                loader: () => fetch('https://art-and-craft-store-backend-server.vercel.app/crafts')
            },
            {
                path: "/mycraftlist",
                element: <PrivetRout><MyCraftList></MyCraftList></PrivetRout>,
                loader: () => fetch('https://art-and-craft-store-backend-server.vercel.app/crafts')
            },
            {
                path: "/myupdate/:id",
                element: <PrivetRout><MyUpdateItem></MyUpdateItem></PrivetRout>,
                loader: ( { params } ) => fetch(`https://art-and-craft-store-backend-server.vercel.app/crafts/${params.id}`)
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