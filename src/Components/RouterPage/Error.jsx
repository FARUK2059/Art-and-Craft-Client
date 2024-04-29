import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import lettoError from "../../../public/letto.json";


const Error = () => {

   

    const options = {
        animationData: lettoError,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <div >
            <section className="flex items-center  dark:bg-gray-50 dark:text-gray-800">
                <div className="container grid items-center justify-center  px-5 mx-auto">
                    <div className=" mt-8 text-center">
                        <h2 className=" font-extrabold text-9xl text-red-900">404 </h2>
                        <div className="max-w-72 p-2 ml-20">
                            {View}
                        </div>
                        <p className="text-2xl font-semibold md:text-3xl ">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/"  href="#" className="px-8 py-3 font-semibold rounded "><button className="btn btn-primary text-lg font-medium text-black bg-warning ">Back to homepage</button> </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;