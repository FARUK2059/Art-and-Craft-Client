import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const MyCraftList = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

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
            <div>
                {
                    singilUserData.map((craft) => <div key={craft._id}>

                        <div className="card lg:card-side bg-white shadow-xl">
                            <figure><img className="w-60" src={craft.craftURL} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"><span>Craft Item Name :</span> {craft.itemName}</h2>
                                <p className="text-start"><span>Price :</span> {craft.price}</p>
                                <p className="text-start"><span>Rating :</span> {craft.rating}</p>
                                <p className="text-start"><span>Customization :  </span>{craft.Customization}</p>
                                <p className="text-start"><span>Stock Status :</span> {craft.stockStatus}</p>

                                <div className="card-actions justify-end">
                                    <Link to={`/myupdate/${craft._id}`}><button className="btn btn-primary">Update</button></Link>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={ () => handleDeleteCraft(craft._id) } className="btn btn-primary">Delete</button>
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