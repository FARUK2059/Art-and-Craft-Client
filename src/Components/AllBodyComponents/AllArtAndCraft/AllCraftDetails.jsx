import { Link, useLoaderData, useParams } from "react-router-dom";


const AllCraftDetails = () => {

    // /***/ Art and Craft Ditails Data Loade
    const allCraftDetails = useLoaderData();
    // console.log(allCraftDetails);
    const { id } = useParams(allCraftDetails);
    // console.log(id);

    const craft = allCraftDetails?.find((crafts) => crafts._id === id)
    console.log(craft);

    const { craftURL, itemName, Customization, email, shortdescription, price, rating, processing_time, stockStatus, subitemname, username, _id } = craft;

    return (
        <div className="p-10 text-black lg:ml-24  lg:mr-10">
            <div className="card lg:card-side bg-neutral-200 hover:bg-neutral-400 shadow-xl p-6">
                <div className="grid justify-center items-center">
                    <figure className="p-8 lg:h-96 lg:w-96 "><img src={craftURL} alt="Album" className="bg-orange-200  hover:bg-orange-300  rounded-lg" /></figure>
                </div>
                <div className="card-body text-blue-600 font-semibold bg-green-200  rounded-lg p-4">
                    <h2 className="card-title justify-center hover:bg-green-300 text-green-900 text-xl bg-yellow-500 p-2 rounded-lg  lg:text-2xl"> {itemName}</h2>
                    <div className="">
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Craft Sub-Category name :</span> {subitemname}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Short Description :</span> {shortdescription}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Craft ID No :</span> {_id}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Price :</span> {price}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Rating :</span> {!rating}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Customization :  </span>{Customization}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Processing time :</span> {processing_time}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Stock Status :</span> {stockStatus}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">User name :</span> {username}</p>
                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Email :</span> {email}</p>
                        <div className="card-actions justify-end">
                            <Link to="/allcraft"><button className="btn btn-primary">Back to All Crafts Item</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllCraftDetails;