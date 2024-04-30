import { Link, useLoaderData } from "react-router-dom";


const Painting = () => {

    const painting = useLoaderData();
    console.log(painting);

    return (
        <div>
            <div className="text-center ">

                {/* title section */}
                <div className="mt-10 mb-10">
                    <h2 className="text-4xl p-2 text-[#70BBFF] font-bold ">Art & Craft Item Store</h2>
                    <h2 className="text-3xl p-2 text-green-400 font-bold ">Painting and Drawing</h2>
                    <p className="text-lg p-2">Join our mailing list to update the latest products,  don’t miss the promotions we will send you!</p>
                </div>

                {/* Card section */}
                <div className="grid lg:grid-cols-2 gap-6 p-6  ">
                    {
                        painting.map((craft) =>
                            <div key={craft._id}>
                                <Link to={`/subcetagory/${craft._id}`}>
                                    <div className=" p-4 shadow-md  bg-blue-300 max-h-screen  hover:bg-slate-300 hover:text-blue-950 rounded-lg justify-center items-center">
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <img src={craft.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                            </div>
                                            <div className="space-y-2 p-2 ml-4 text-md">
                                                <h2 className="card-title text-yellow-700 hover:text-blue-800 text-center text-4xl font-semibold justify-center"> {craft.category_name}</h2>
                                                <p className="text-start"><span className="text-black font-bold hover:text-blue-700 ">Rating :</span> {craft.rating}</p>
                                                <p className="text-start"><span className="text-black font-bold hover:text-blue-700">Description :</span> {craft.short_description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>



            </div>
        </div>
    );
};

export default Painting;