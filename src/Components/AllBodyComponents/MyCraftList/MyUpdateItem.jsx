import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyUpdateItem = () => {

    const { updateTitle } = useContext(AuthContext);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('My Craft Update | Craft Store');
    }, [updateTitle]);

    const myUpdateCraft = useLoaderData();
    console.log(myUpdateCraft);

    const { craftURL, price, shortdescription, subitemname, itemName, processing_time, rating, Customization, stockStatus, _id } = myUpdateCraft;

    const handleMyCraftUpdate = e => {
        e.preventDefault();
        const form = e.target;

        const craftURL = form.imageURL.value;
        const itemName = form.itemname.value;
        const subitemname = form.subitemname.value;
        const shortdescription = form.shortdescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const Customization = form.Customization.value;
        const stockStatus = form.stockStatus.value;

        const addUpdateCraft = { craftURL, price, shortdescription, subitemname, itemName, processing_time, rating, Customization, stockStatus }
        console.log(addUpdateCraft);

        // Update coffee function and send to bongoDB
        fetch(`http://localhost:5000/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addUpdateCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Craft Item Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }


    return (
        <div className="p-6">
            <div>
                <section className="p-6 bg-[#a1d7c9] hover:bg-slate-500 rounded-lg text-black">

                    {/* Title */}
                    <div>
                        <div className="mt-4 p-4">
                            <h1 className="mb-5 text-4xl p-2 text-black font-bold">Update Your Art & Craft</h1>
                            <p className="mb-5 text-xl font-semibold text-green-800 ">Art & Craft,  wooden spoons, spatulas, and ladles for cooking and serving.</p>
                        </div>
                    </div>

                    <form onSubmit={handleMyCraftUpdate} className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                            <div className="grid grid-cols-6 gap-4 col-span-full">

                                {/* Craft Image URL */}
                                <div className="col-span-full">
                                    <label className="text-md grid text-start p-2">Craft Image URL</label>
                                    <input type="url" name="imageURL" placeholder="Input craft image URL" defaultValue={craftURL} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* Craft Item Name */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-md grid text-start p-2">Item Name</label>
                                    <input type="text" name="itemname" placeholder="Inpute item_name" defaultValue={itemName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" required />
                                </div>

                                {/* Craft subcategory_Name */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-md grid text-start p-2">Subcategory Name</label>
                                    <input type="text" name="subitemname" defaultValue={subitemname} placeholder="Inpute subcategory_Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* Short description */}
                                <div className="col-span-full">
                                    <label className="text-md grid text-start p-2">Short Description</label>
                                    <textarea name="shortdescription" defaultValue={shortdescription} placeholder="Type Craft Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 h-24 p-2"></textarea>
                                </div>

                                {/* Price */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-md grid text-start p-2">Price</label>
                                    <input name="price" type="text" defaultValue={price} placeholder="Inpute craft price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* Rating */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-md grid text-start p-2">Rating</label>
                                    <input name="rating" type="text" defaultValue={rating} placeholder="Inpute craft rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* Processing_time */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-md grid text-start p-2">Processing_time</label>
                                    <input name="processing_time" defaultValue={processing_time} type="text" placeholder="Inpute craft processing_time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* customization section */}
                                <div className="flex-row form-control  items-center mt-2 lg:gap-16 md:gap-8 gap-4 p-1 col-span-full text-black">
                                    <div>
                                        <h2 className=" ">Customization :</h2>
                                    </div>

                                    {/* Customization Yes section */}
                                    <div className="form-control flex">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="Customization" defaultValue={Customization} value="Yes" className="radio checked:bg-green-500 " checked />
                                            <span className="label-text p-4 "> Yes</span>
                                        </label>
                                    </div>

                                    {/* customization No section */}
                                    <div className="form-control flex">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="Customization" defaultValue={Customization} value="No" className="radio checked:bg-green-500 " checked />
                                            <span className="label-text p-4 ">No</span>
                                        </label>
                                    </div>
                                </div>

                                {/* StockStatus section */}
                                <div className="flex-row form-control  items-center mt-2 lg:gap-16 md:gap-8 gap-4 p-1 col-span-full text-black">
                                    <div>
                                        <h2 className=" ">StockStatus :</h2>
                                    </div>

                                    {/* In Stock section */}
                                    <div className="form-control flex">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="stockStatus" defaultValue={stockStatus} value="In stock" className="radio checked:bg-green-500 " checked />
                                            <span className="label-text p-4 "> In stock</span>
                                        </label>
                                    </div>

                                    {/* Made to Order section */}
                                    <div className="form-control flex">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="stockStatus" defaultValue={stockStatus} value="Made to Order" className="radio checked:bg-green-500 " checked />
                                            <span className="label-text p-4 ">Made to Order</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="form-control col-span-full">
                                    <input type="submit" value="Add" className="btn btn-secondary w-full px-8 py-3 font-semibold rounded bg-green-700 text-white mb-4 border-none" />
                                </div>

                            </div>

                        </fieldset>
                    </form>

                </section>
            </div>
        </div>
    );
};

export default MyUpdateItem;