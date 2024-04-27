import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AddCraftItem = () => {

    const { user } = useContext(AuthContext);

    const handleCraftAdd = e => {
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
        const username = form.username.value;
        const email = form.email.value;

        const addCraft = { craftURL, price, shortdescription, subitemname, itemName, processing_time, rating, Customization, stockStatus, username, email }
        console.log(addCraft);

        // send data to the Server
        fetch('http://localhost:5000/crafts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'CraftiItem added successfully',
                        icon: 'success',
                        confirmButtonText: 'ok',
                    })

                }
                // setClear(newUser);
            })

    }

    return (
        <div>
            <div>
                <section className="p-6 dark:bg-gray-100 dark:text-gray-900">

                    <form onSubmit={handleCraftAdd} className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                            {/* title section */}
                            <div className="space-y-2 col-span-full ">
                                <p className="font-medium">Personal Inormation</p>
                                <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                            </div>

                            <div className="grid grid-cols-6 gap-4 col-span-full">

                                {/* Craft Image URL */}
                                <div className="col-span-full">
                                    <label className="text-md grid text-start p-2">Craft Image URL</label>
                                    <input type="url" name="imageURL" placeholder="Input craft image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* Craft Item Name */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-md grid text-start p-2">Item Name</label>
                                    <input type="text" name="itemname" placeholder="Inpute item_name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" required />
                                </div>

                                {/* Craft subcategory_Name */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-md grid text-start p-2">Subcategory Name</label>
                                    <input type="text" name="subitemname" placeholder="Inpute subcategory_Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* Short description */}
                                <div className="col-span-full">
                                    <label className="text-md grid text-start p-2">Short Description</label>
                                    <textarea name="shortdescription" placeholder="Type Craft Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 h-24 p-2"></textarea>
                                </div>

                                {/* Price */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-md grid text-start p-2">Price</label>
                                    <input name="price" type="text" placeholder="Inpute craft price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* Rating */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-md grid text-start p-2">Rating</label>
                                    <input name="rating" type="text" placeholder="Inpute craft rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* Processing_time */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-md grid text-start p-2">Processing_time</label>
                                    <input name="processing_time" type="text" placeholder="Inpute craft processing_time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* customization section */}
                                <div className="flex-row form-control  items-center mt-2 lg:gap-16 md:gap-8 gap-4 p-1 col-span-full text-black">
                                    <div>
                                        <h2 className=" ">Customization :</h2>
                                    </div>

                                    {/* Customization Yes section */}
                                    <div className="form-control flex">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="Customization" value="Yes" className="radio checked:bg-green-500 " checked />
                                            <span className="label-text p-4 "> Yes</span>
                                        </label>
                                    </div>

                                    {/* customization No section */}
                                    <div className="form-control flex">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="Customization" value="No" className="radio checked:bg-green-500 " checked />
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
                                            <input type="radio" name="stockStatus" value="In stock" className="radio checked:bg-green-500 " checked />
                                            <span className="label-text p-4 "> In stock</span>
                                        </label>
                                    </div>

                                    {/* Made to Order section */}
                                    <div className="form-control flex">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="stockStatus" value="Made to Order" className="radio checked:bg-green-500 " checked />
                                            <span className="label-text p-4 ">Made to Order</span>
                                        </label>
                                    </div>
                                </div>

                                {/* User Name */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-md grid text-start p-2">User Name</label>
                                    <input type="text" name="username" defaultValue={user.displayName} placeholder="Inpute your name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                                </div>

                                {/* User Email */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-md grid text-start p-2">User Email</label>
                                    <input type="text" name="email"  value={user.email} placeholder="Inpute your email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" required />
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

export default AddCraftItem;