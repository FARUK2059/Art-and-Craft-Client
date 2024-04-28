import { useContext, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const ArtCraftDetails = () => {

    const { updateTitle } = useContext(AuthContext);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Art Detais | Craft Store');
    }, [updateTitle]);

    const crafts = useLoaderData();
    // console.log(craft);

    const { id } = useParams(crafts);
    const craftD = crafts?.find((craft) => craft._id === id)
    console.log(craftD);

    const { image, item_Name, customization, StockStatus, price, processing_time, rating, short_Description, subcategory_name } = craftD;


    return (
        <div>

            {/* Arts and Craft details dection */}
            <div className="p-10 text-black lg:ml-24  lg:mr-10">
                <div className="card lg:card-side bg-neutral-200 hover:bg-neutral-400 shadow-xl p-6">
                    <div className="grid justify-center items-center">
                        <figure className="p-8 lg:h-96 lg:w-96 "><img src={image} alt="Album" className="bg-orange-200  hover:bg-orange-300  rounded-lg" /></figure>
                    </div>
                    <div className="card-body text-blue-600 font-semibold bg-green-200  rounded-lg p-4">
                        <h2 className="card-title justify-center hover:bg-green-300 text-green-900 text-xl bg-yellow-500 p-2 rounded-lg  lg:text-2xl"> {item_Name}</h2>
                        <div className="">
                            <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Craft Sub-Category name :</span> {subcategory_name}</p>
                            <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Short Description :</span> {short_Description}</p>
                            <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Price :</span> {price}</p>
                            <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Rating :</span> {rating}</p>
                            <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Customization :  </span>{customization}</p>
                            <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Processing time :</span> {processing_time}</p>
                            <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Stock Status :</span> {StockStatus}</p>
                            <div className="card-actions justify-end">
                                <Link to="/"><button className="btn btn-primary">Back to Home</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ArtCraftDetails;