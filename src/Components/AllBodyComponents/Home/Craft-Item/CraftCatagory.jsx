import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const CraftCatagory = () => {

    const [Categoryall, setCategory] = useState([]);

    const category = Categoryall.slice(0, 6);
    console.log(category);

    useEffect(() => {
        fetch('https://art-and-craft-store-backend-server.vercel.app/crafts')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])




    return (
        <div className="border bg-green-200 rounded-lg">
            <div className="text-center">
                <div>

                    {/* title section */}
                    <div className="mt-10 mb-10">
                        <h2 className="text-4xl p-2 text-blue-900 hover:text-blue-700 font-bold ">Craft Item Store</h2>
                        <p className="text-lg text-black">Wooden coasters and trivets to protect your tabletops while adding a touch of elegance.</p>
                    </div>

                </div>

                {/* Card section */}
                <div className="grid lg:grid-cols-2 gap-6 p-6">
                    {
                        category.map((craft) =>
                            <div key={craft._id}>
                                <div className="card lg:h-72 lg:card-side bg-slate-300 shadow-xl p-2 hover:bg-info hover:text-blue-950">
                                    <figure><img className="w-60 p-4 border bg-slate-400 rounded-lg lg:ml-4" src={craft.craftURL} alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-yellow-700 text-center text-2xl font-semibold"> {craft.itemName}</h2>
                                        <p className="text-start"><span className="text-black font-medium hover:text-blue-700">Category :</span> {craft.subitemname}</p>
                                        <p className="text-start"><span className="text-black font-medium hover:text-blue-700">Price :</span> {craft.price}</p>
                                        <p className="text-start"><span className="text-black font-medium hover:text-blue-700">Customization :  </span>{craft.Customization}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/craftmaindetails/${craft._id}`}><button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default CraftCatagory;