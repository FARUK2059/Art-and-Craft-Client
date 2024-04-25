import { Outlet } from "react-router-dom";
import Navbar from "../HeaderFooter/Navbar";
import Footer from "../HeaderFooter/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;