import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyCraftList = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    const emaiUserlData = useLoaderData()
    // console.log(emailData);

    const singlUserData = emaiUserlData.filter((item) =>  item?.email === user.email);
    console.log(singlUserData);

    // const { craftURL, itemName, Customization, email, shortdescription, price, rating, processing_time, stockStatus, subitemname, username, _id } = singlUserData ;


    return (

        <div>
            <div>
                {
                    singlUserData.map((craft) => <div key={craft._id}>

                        <div className="card lg:card-side bg-white shadow-xl">
                            <figure><img className="w-60" src={craft.craftURL} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"><span>Craft Item Name :</span> {craft.itemName}</h2>
                                <p className="text-start"><span>Price :</span> {craft.price}</p>
                                <p className="text-start"><span>Rating :</span> {craft.rating}</p>
                                <p className="text-start"><span>Customization :  </span>{craft.Customization}</p>
                                <p className="text-start"><span>Stock Status :</span> {craft.stockStatus}</p>
                                
                                <div className="card-actions justify-end">
                                    <Link to=""><button className="btn btn-primary">Update</button></Link>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to=""><button className="btn btn-primary">Delete</button></Link>
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