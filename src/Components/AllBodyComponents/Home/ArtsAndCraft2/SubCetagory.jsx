import { useContext, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";



const SubCetagory = () => {

    const { updateTitle } = useContext(AuthContext);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Art Sub Items | Craft Store');
    }, [updateTitle]);

    const paunting = useLoaderData();
    console.log(paunting);

    const { id } = useParams(paunting);
    const print = paunting?.find((pint) => pint._id === id)
    // console.log(print);
    const subCetagory = print.subcategories
    console.log(subCetagory);

    return (
        <div className="p-6">
            <div className="border bg-green-200 rounded-lg">
                <div className="text-center">
                    <div>

                        {/* title section */}
                        <div className="mt-10 mb-10">
                            <h2 className="text-4xl p-2 text-blue-900 hover:text-blue-700 font-bold ">{print.category_name}</h2>
                            <p className="text-lg text-black">{print?.short_description}</p>
                        </div>

                    </div>

                    {/* Card section */}
                    <div className="grid lg:grid-cols-2 gap-6 p-6">
                        {
                            subCetagory.map((sub) =>
                                <div key={sub._id}>
                                    <div className="card lg:h-96 lg:card-side bg-slate-300 shadow-xl p-4 hover:bg-blue-100 hover:text-blue-950">
                                        <figure><img className="w-96 h-48 p-4 border bg-slate-400 rounded-lg lg:ml-4" src={sub.image} alt="Album" /></figure>
                                        <div className="card-body ">
                                            <div className="text-center">
                                                <h2 className="card-title text-yellow-700  text-2xl font-semibold hover:text-blue-950"> {sub.sub_item_name}</h2>
                                            </div>

                                            <p className="text-start"><span className="text-black font-bold hover:text-blue-700">Category Name :</span> {print.category_name}</p>
                                            <p className="text-start"><span className="text-black font-bold hover:text-blue-700">Category Name :</span> {sub.short_description}</p>
                                            <p className="text-start"><span className="text-black font-bold hover:text-blue-700">Price :</span> {sub.price}</p>
                                            <p className="text-start"><span className="text-black font-bold hover:text-blue-700">Price :</span> {sub.rating}</p>
                                            <p className="text-start"><span className="text-black font-bold hover:text-blue-700">Customization :  </span>{sub.processing_time}</p>
                                            <div className="card-actions justify-end">
                                                <Link to=""><button className="btn btn-primary hover:btn-warning">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

// export default subCetagory;

export default SubCetagory;