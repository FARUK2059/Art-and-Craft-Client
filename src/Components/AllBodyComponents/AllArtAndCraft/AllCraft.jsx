
import { Link, useLoaderData } from "react-router-dom";
import { PiCreditCardDuotone } from "react-icons/pi";


const AllCraft = () => {

    const craftItem = useLoaderData();
    console.log(craftItem);


    return (
        <div>
            <div className="lg:p-12">
                <div className="lg:w-full min-h-full bg-sky-500 border-green-700/100 border-4">
                    <h2 className="bg-green-700 p-4 text-white text-3xl font-bold "> Total Craft Item :  {craftItem.length}</h2>
                    <div className="card card-body lg:m-24 md:p-6 p-2 grid">

                        <div className="lg:w-auto text-white text-sm">
                            <div className="overflow-x-auto">
                                <table className="table ">
                                    {/* head */}
                                    <thead className="bg-green-500">
                                        <tr className="lg:text-lg text-xs text-white">
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Stock Status</th>
                                            <th className="text-center">Customization</th>

                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>

                                    {
                                        craftItem.map(craft => <tbody key={craft._id}>

                                            <tr className="hover">
                                                <th>{craft.itemName}</th>
                                                <td>{craft.price}</td>
                                                <td>{craft.stockStatus}</td>
                                                <td className="text-center">{craft.Customization}</td>
                                                <td>
                                                    <div className="flex gap-2 justify-center">
                                                        <div className="tooltip" data-tip="Details">
                                                            <Link to={`/allCraftDetails/${craft._id}`}><button className="btn btn-sm bg-slate-100 btn-primary text-black"><PiCreditCardDuotone /></button></Link>
                                                        </div>
                                                        {/* <div className="tooltip" data-tip="Delete">
                                                            <button onClick={() => handleDelete(user._id)} className="btn btn-sm bg-slate-100 btn-primary text-black"><MdDelete /></button>
                                                        </div> */}
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>)
                                    }

                                </table>
                                <div className="card-actions justify-end">
                                    {/* <Link to="/"><button className="btn btn-primary">Back to Home</button></Link> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCraft;