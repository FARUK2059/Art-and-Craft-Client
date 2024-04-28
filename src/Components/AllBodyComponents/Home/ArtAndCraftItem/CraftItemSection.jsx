import { Link, useLoaderData } from "react-router-dom";


const CraftItemSection = () => {

    const cetagoryData = useLoaderData();
    console.log(cetagoryData);

    // craftURL, price, shortdescription, subitemname, itemName, processing_time, rating, Customization, stockStatus, _id

    return (
        <div className="text-center">
            <div>
                {/* title section */}
                <div className="mt-10 mb-10">
                    <h2 className="text-4xl p-2 text-[#70BBFF] font-bold ">Art & Craft Item Store</h2>
                    <p className="text-lg p-2">Join our mailing list to update the latest products,  don’t miss the promotions we will send you!</p>
                </div>

            </div>

            {/* DropDown meno section */}
            <div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost border bg-primary text-yellow-500 hover:text-black rounded-btn">Dropdown</div>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>

            {/* Card section */}
            <div className="grid lg:grid-cols-2 gap-6 p-6">
                {
                    cetagoryData.map((craft) =>
                        <div key={craft._id}>
                            <div className="card lg:h-72 lg:card-side bg-info shadow-xl p-2 hover:bg-slate-300 hover:text-blue-950">
                                <figure><img className="w-60 p-4 border bg-slate-400 rounded-lg lg:ml-4" src={craft.image} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-yellow-700 text-center text-2xl font-semibold"> {craft.item_Name}</h2>
                                    <p className="text-start"><span className="text-black font-medium hover:text-blue-700">Category :</span> {craft.subcategory_name}</p>
                                    <p className="text-start"><span className="text-black font-medium hover:text-blue-700">Price :</span> {craft.price}</p>
                                    {/* <p className="text-start"><span className="text-black font-medium hover:text-blue-700">Rating :</span> {craft.rating}</p> */}
                                    <p className="text-start"><span className="text-black font-medium hover:text-blue-700">Customization :  </span>{craft.customization}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/homedetails/${craft._id}`}><button className="btn btn-primary">View Details</button></Link>
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