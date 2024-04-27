import { Link, useLoaderData } from "react-router-dom";


const CraftItemSection = () => {

    const cetagoryData = useLoaderData();
    console.log(cetagoryData);

    // craftURL, price, shortdescription, subitemname, itemName, processing_time, rating, Customization, stockStatus, _id

    return (
        <div>
            <div>
                <p>Cetagory Title : {cetagoryData.length}</p>
            </div>
            <div>
                {
                    cetagoryData.map((craft) =>
                        <div key={craft._id}>
                            <div className="card lg:card-side bg-white shadow-xl">
                                <figure><img className="w-60" src={craft.image} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title"><span>Craft Item Name :</span> {craft.item_Name}</h2>
                                    <p className="text-start"><span>Subcategory_name :</span> {craft.subcategory_name}</p>
                                    <p className="text-start"><span>Price :</span> {craft.price}</p>
                                    <p className="text-start"><span>Rating :</span> {craft.rating}</p>
                                    <p className="text-start"><span>Customization :  </span>{craft.customization}</p>
                                    <p className="text-start"><span>Stock Status :</span> {craft.StockStatus}</p>

                                    <div className="card-actions justify-end">
                                        <Link to={`/homedetails/${craft._id}`}><button className="btn btn-primary">View Details</button></Link>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {/* <button onClick={() => handleDeleteCraft(craft._id)} className="btn btn-primary">Delete</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CraftItemSection;