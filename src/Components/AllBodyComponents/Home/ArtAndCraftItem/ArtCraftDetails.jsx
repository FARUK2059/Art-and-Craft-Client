import { useLoaderData, useParams } from "react-router-dom";


const ArtCraftDetails = () => {

    const crafts = useLoaderData();
    // console.log(craft);

    const { id } = useParams(crafts);
    const craftD = crafts?.find((craft) => craft._id === id)
    console.log(craftD);


    return (
        <div>

            {/* title section */}
            <div>
                <p>This is Craft Title</p>
            </div>

            {/* Craft details */}
            <div>

                <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={craftD.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-600">Craft item Name : {craftD.item_Name}</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtCraftDetails;