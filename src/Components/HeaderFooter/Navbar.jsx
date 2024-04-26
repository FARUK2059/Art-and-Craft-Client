import { Link, NavLink } from "react-router-dom";
import userIcon from "../../../public/userIcon.png"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { LuUser2 } from "react-icons/lu";
import { toast } from "react-toastify";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Your LogOut successfull")
            })
            .catch()
    }

    const links = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blog">blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-green-500 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">CraftXtor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <Link to="/">
                                <div className="tooltip tooltip-left " data-tip={user?.displayName || "not found"}>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
                                        <div className="w-10 rounded-full">
                                            <img alt="null" src={user?.photoURL || userIcon} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            :
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={userIcon} />
                                </div>
                            </div>
                    }

                    {
                        user ? <Link to="/"><button onClick={handleSignOut} className="btn btn-active btn-primary rounded-full"> <LuUser2 />Sign Out</button></Link> :
                            <Link to="/login"><button className="btn btn-active btn-primary rounded-full"><LuUser2 />Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;