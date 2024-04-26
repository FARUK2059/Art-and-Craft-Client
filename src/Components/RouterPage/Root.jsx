import { Outlet } from "react-router-dom";
import Navbar from "../HeaderFooter/Navbar";
import Footer from "../HeaderFooter/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;