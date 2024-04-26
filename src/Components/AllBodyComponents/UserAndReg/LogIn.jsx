

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


import { toast } from 'react-toastify';


const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signInPassword, user, logOut, updateTitle, googleLogIn, gitHubLogIn } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Login | Craft Store');
    }, [updateTitle]);

    // Navigation System
    const location = useLocation();
    const navigat = useNavigate();


    // password Login
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signInPassword(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Your LogIn successfull")

                // navigat;
                navigat(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error)
                setPasswordError("Inpute currect password")
            })
    }

    // Google LogIn
    const handleGoogleSignIn = () => {
        // console.log("google  coming sooooooon");
        googleLogIn()
            .then((result) => {
                console.log(result.user);
                toast.success("Your LogIn successfully");

                // navigat;
                navigat(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error)
                toast.error("Your login faild")
            })
    }


    // GitHub LogIn
    const handleGitHubSignIn = () => {
        // console.log("google  coming sooooooon");
        gitHubLogIn()
            .then((result) => {
                console.log(result.user);
                toast.success("Your LogIn successfully");

                // navigat;
                navigat(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error)
                toast.error("Your login faild")
            })
    }


    // sign Out/ Log out section
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                toast.success("LogOut successfully")
                // navigat(forms);
                // navigat(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error)
                toast.error("logOut faild")
            })
    }

    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" className="mt-4 ">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">

                        {/* Main Body */}
                        <div data-aos="zoom-in-down" data-delay="2000" data-aos-duration="2500" className="max-w-md border border-yellow-800 rounded-lg backdrop-blur-sm">
                            <div className="grid justify-center  font-poppins p-10">
                                <div className="w-full max-w-md p-8 space-y-3 rounded-xl backdrop-blur-3xl dark:text-gray-800 border border-blue-700">
                                    <h1 className="text-2xl font-bold text-center text-yellow-300">Login your account</h1>

                                    {/* Inpute Fild */}
                                    <form onSubmit={handleLogin} className="space-y-6">
                                        <div className="space-y-1 text-sm text-center">
                                            <label className="label">
                                                <span className="label-text text-blue-200 font-medium">Email address</span>
                                            </label>
                                            <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />

                                        </div>
                                        <div className="space-y-1 text-sm">
                                            <label className="label">
                                                <span className="label-text text-blue-200 font-medium">Password</span>
                                            </label>
                                            <div className="relative">
                                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border focus:dark:border-violet-600" required />
                                                <span className="absolute mt-4 lg:right-4 right-4 md:right-4" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                                                <div className="label ">
                                                    <span className="label-text-alt text-red-600">{passwordError}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600">Login</button>
                                    </form>

                                    <p className="text-md text-center sm:px-6 text-white">Do not Have An Account ? Now
                                        <NavLink to="/register" rel="noopener noreferrer" href="#" className="underline font-bold text-yellow-400 "> <button className="btn btn-ghost text-yellow-200 btn-sm border">  Register</button></NavLink>
                                    </p>
                                    <div className="flex flex-col w-full">
                                        <div className="divider divider-warning text-white">OR</div>
                                    </div>

                                    <h2 className="text-white font-medium text-lg">SingIn With account</h2>
                                    {
                                        user ?
                                            <button onClick={handleLogOut} className="btn btn-accent">Sign Out</button> :
                                            <div className="flex gap-4 p-2 justify-center">
                                                <button onClick={handleGoogleSignIn} className="btn btn-primary"><span className=""><FcGoogle /></span> Google</button>
                                                <button onClick={handleGitHubSignIn} className="btn btn-primary"><span><FaGithub /></span> GitHub </button>
                                            </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;