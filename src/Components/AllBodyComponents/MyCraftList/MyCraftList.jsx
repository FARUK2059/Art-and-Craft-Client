import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const MyCraftList = () => {

    const { user, updateTitle } = useContext(AuthContext);
    // console.log(user);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('My Craft | Craft Store');
    }, [updateTitle]);

    const emailUserData = useLoaderData()
    const [emailCraft, setEnailCraft] = useState(emailUserData);
    // console.log(emailData);

    const singilUserData = emailCraft.filter((item) => item?.email === user.email);
    console.log(singilUserData);

    const handleDeleteCraft = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`http://localhost:5000/crafts/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Craft Item has been deleted.",
                                    icon: "success"
                                });
                                const remainig = emailCraft.filter(craft => craft._id !== _id);
                                setEnailCraft(remainig);
                            }
                        })
                }
            });
    }


    return (

        <div>
            {/* Title */}
            <div>
                <div className="mt-4 p-4">
                    <h1 className="mb-5 text-4xl p-2 text-black font-bold">Your Total Art and Craft : {singilUserData.length} </h1>
                </div>
            </div>
            <div>
                {
                    singilUserData.map((craft) => <div key={craft._id}>

                        <div className="p-10 text-black lg:ml-24  lg:mr-10">
                            <div className="card lg:card-side bg-neutral-200 hover:bg-neutral-400 shadow-xl p-6">
                                <div className="grid justify-center items-center">
                                    <figure className="p-8 lg:h-96 lg:w-96 "><img src={craft.craftURL} alt="Album" className="bg-orange-200  hover:bg-orange-300  rounded-lg" /></figure>
                                </div>
                                <div className="card-body text-blue-600 font-semibold bg-green-200  rounded-lg p-4">
                                    <h2 className="card-title justify-center hover:bg-green-300 text-green-900 text-xl bg-yellow-500 p-2 rounded-lg  lg:text-2xl"> {craft.itemName}</h2>
                                    <div className="">
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Craft Sub-Category name :</span> {craft.subitemname}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Short Description :</span> {craft.shortdescription}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Craft ID No :</span> {craft._id}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Price :</span> {craft.price}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Rating :</span> {craft.rating}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Customization :  </span>{craft.Customization}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Processing time :</span> {craft.processing_time}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Stock Status :</span> {craft.stockStatus}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">User name :</span> {craft.username}</p>
                                        <p className="text-start hover:bg-green-300 p-2 rounded-md"><span className="text-black">Email :</span> {craft.email}</p>
                                        <div className="card-actions flex justify-end gap-4">
                                            <Link to={`/myupdate/${craft._id}`}><button className="btn btn-primary">Update</button></Link>
                                            <button onClick={() => handleDeleteCraft(craft._id)} className="btn btn-primary">Delete</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCraftList;