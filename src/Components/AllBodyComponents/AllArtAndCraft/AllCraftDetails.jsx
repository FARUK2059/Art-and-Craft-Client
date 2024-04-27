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
        <div>
            <div className="card lg:card-side bg-white shadow-xl">
                <figure><img src={craftURL} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span>Craft Item Name :</span> {itemName}</h2>
                    <p className="text-start"><span>Craft Sub-Category name :</span> {subitemname}</p>
                    <p className="text-start"><span>Short Description :</span> {shortdescription}</p>
                    <p className="text-start"><span>Craft ID No :</span> {_id}</p>
                    <p className="text-start"><span>Price :</span> {price}</p>
                    <p className="text-start"><span>Rating :</span> {!rating}</p>
                    <p className="text-start"><span>Customization :  </span>{Customization}</p>
                    <p className="text-start"><span>Processing time :</span> {processing_time}</p>
                    <p className="text-start"><span>Stock Status :</span> {stockStatus}</p>
                    <p className="text-start"><span>User name :</span> {username}</p>
                    <p className="text-start"><span>Email :</span> {email}</p>
                    <div className="card-actions justify-end">
                        <Link to="/allcraft"><button className="btn btn-primary">Back to All Crafts Item</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCraftDetails;