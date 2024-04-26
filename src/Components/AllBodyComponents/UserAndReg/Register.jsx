

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";




const Register = () => {
    const { creatUser, updateUserProfile, updateTitle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const [errorName, setErrorname] = useState('');
    const [errorpassword, setErrorPassword] = useState('');

    // Navigation System
    const location = useLocation();
    const navigat = useNavigate();

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Register | Craft Store');
    }, [updateTitle]);


    const handleregister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const accepted = e.target.tarms.checked;
        console.log(name, photoURL, email, password);

        if (!/[A-Z]/.test(name)) {
            setErrorname('Your name should have  Upper cash carecter')
            return;
        }

        if (password.length < 6) {
            setErrorPassword('Password should be at last 6 characters');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setErrorPassword('Your password should have at last on Upper cash carecter')
            return;
        }

        else if (!/[a-z]/.test(password)) {
            setErrorPassword('Your password should be have last on Lower cash carecter')
            return;
        }

        else if (!accepted) {
            toast.error("Please accepted our turms and condition")
            return;
        }

        // Creat user setup
        creatUser(email, password)
            .then(result => {

                console.log(result.user)
                navigat(location?.state ? location.state : '/');
                updateUserProfile(name, photoURL)
                    .then(() => {
                        toast.success("Your Registation and Login successfull")
                    })
            })
            .catch(error => {
                console.log(error)
                // toast.error("You already registered, Please back to home")
            })

    }


    return (

        <div data-aos="fade-up" data-aos-duration="1500" className="mt-4 z-0">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">

                    {/* Main Body */}
                    <div data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1500" className="max-w-md border border-yellow-800 rounded-lg backdrop-blur-sm -z-50">
                        <div className="grid justify-center p-10 font-poppins">
                            <div className="w-full max-w-md p-8  rounded-xl backdrop-blur-sm dark:text-gray-800 border">
                                <h1 className="text-2xl font-bold text-center text-yellow-300">Register your account</h1>

                                <form onSubmit={handleregister} className="space-y-2 mt-2">

                                    {/* Name */}
                                    <div className=" text-sm text-center">
                                        <label className="label">
                                            <span className="label-text text-blue-200 font-medium">Your Name</span>
                                        </label>
                                        <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-1 py-3 rounded-md  dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                                        <div className="label ">
                                            <span className="label-text-alt text-red-400">{errorName}</span>
                                        </div>
                                    </div>

                                    {/* Photo URL */}
                                    <div className=" text-sm text-center">
                                        <label className="label">
                                            <span className="label-text text-blue-200 font-medium">Photo URL</span>
                                        </label>
                                        <input type="text" name="photo" id="photo" placeholder="Enter your photo URL" className="w-full px-1 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                                    </div>

                                    {/* Email */}
                                    <div className=" text-sm text-center">
                                        <label className="label">
                                            <span className="label-text text-blue-200 font-medium">Email address</span>
                                        </label>
                                        <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                                        <div className="label ">
                                            <span className="label-text-alt text-red-400"></span>
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className=" text-sm">
                                        <label className="label">
                                            <span className="label-text text-blue-200 font-medium">Password</span>
                                        </label>
                                        <div className="relative">
                                            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border focus:dark:border-violet-600" required />
                                            <span className="absolute mt-4 lg:right-4 right-4 md:right-4" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>

                                            <div className="label ">
                                                <span className="label-text-alt text-red-400">{errorpassword}</span>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Submit section */}
                                    <div className="flex items-center text-white">
                                        <input type="checkbox" className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" name="tarms" id="tarms" />
                                        <label className="ml-2" htmlFor="tarms"> Accept our <a className="text-blue-400" href=""> Tarms and Condition </a> </label>
                                    </div>

                                    <button className="block  w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600">Submit</button>

                                </form>

                                <p className="text-[14px] mt-2 text-center sm:px-6 text-white">Already Have An Account ?
                                    <NavLink to="/login" id="##" rel="noopener noreferrer" href="#" className="underline dark:text-gray-800"> <button className="btn text-[16px] btn-ghost text-yellow-200 btn-sm">LogIn</button></NavLink>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;