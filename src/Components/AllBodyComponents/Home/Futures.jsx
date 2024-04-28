
import { PiDotFill } from "react-icons/pi";

const Futures = () => {
    return (
        <div className="border rounded-xl p-4 bg-cyan-100">
            {/* Title */}
            <div>
                <div className="mt-4 p-4">
                    <h1 className="mb-5 text-4xl p-2 text-[#70BBFF] font-bold"> Our Best Future Art & Craft Products</h1>
                    <p className="mb-5 text-xl font-semibold text-green-600 ">From as low as $10 per day with limited time offer discounts.</p>
                </div>
            </div>

            {/* Details */}
            <div className="">
                <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800 ">
                    <div className="container mx-auto space-y-12">

                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row border p-4 bg-green-200 hover:bg-green-300 text-black">
                            <img src="https://th.bing.com/th/id/OIP.I5FJLrjUVVZU-9kqOFhimwHaEd?w=322&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="h-80  aspect-video rounded-lg border-yellow-700" />
                            <div className="flex flex-col  text-start flex-1 p-6 dark:bg-gray-50">
                                <h3 className="text-3xl font-bold">Wooden Furniture & Sculptures</h3>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span> Handcrafted wooden coffee tables and chairs for a rustic charm in your living room.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span>Intricately carved wooden sculptures to add an artistic touch to your home decor.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span> Solid wood bookshelves and cabinets for organizing your space with style.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span> Wooden room dividers and screens to create distinct zones in open-plan living areas.</p>
                                <button type="button" className="self-end btn btn-secondary btn-sm">Read more ...</button>
                            </div>
                        </div>

                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse border p-4 bg-green-200 hover:bg-green-300 text-black">
                            <img src="https://th.bing.com/th/id/OIP.1flXFPEX2-pAvCMm2gJOhwHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="h-80 aspect-video rounded-lg border-yellow-700" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50 text-start">
                                <h3 className="text-3xl font-bold">Wooden Utensils and Kitchenware</h3>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span>Handcrafted wooden spoons, spatulas, and ladles for cooking and serving.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span>Wooden cutting boards and cheese boards for meal preparation and presentation.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span>Wooden salad bowls and serving trays for hosting gatherings with flair.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span>Wooden coasters and trivets to protect your tabletops while adding a touch of elegance.</p>
                                <button type="button" className="self-end btn btn-secondary btn-sm">Read more ...</button>
                            </div>
                        </div>

                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row border p-4 bg-green-200 hover:bg-green-300 text-black">
                            <img src="https://th.bing.com/th/id/OIP.JnVjbmqdJvMYUC8fjSuJBAHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="h-80  aspect-video rounded-lg border-yellow-700" />
                            <div className="flex flex-col  text-start flex-1 p-6 dark:bg-gray-50">
                                <h3 className="text-3xl font-bold">Jute Home Decor</h3>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span> Jute rugs and carpets woven with natural fibers to add warmth and texture to your floors.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span>Jute baskets and storage bins for organizing clutter in a stylish manner.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span> ute curtains and drapes to filter light and create a cozy atmosphere in any room.</p>
                                <p className="text-md uppercase ml-6 flex"><span><PiDotFill className="h-8 w-8" /></span> Jute cushion covers and throws to accessorize your furniture with earthy tones and textures.</p>
                                <button type="button" className="self-end btn btn-secondary btn-sm">Read more ...</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Futures;