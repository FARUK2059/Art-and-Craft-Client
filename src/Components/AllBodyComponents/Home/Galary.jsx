

const Galary = () => {
    return (
        <div className="border rounded-xl p-4 bg-[#ddc8b4d9]">
            {/* Title */}
            <div>
                <div className="mt-4 p-4">
                    <h1 className="mb-5 text-4xl p-2 text-black font-bold"> Our bast Galary Products</h1>
                    <p className="mb-5 text-xl font-semibold text-green-800 ">Art & Craft aprons and kitchen towels for a sustainable and stylish addition to your culinary space.</p>
                </div>
            </div>

            {/* galary */}
            <div>
                <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        <img src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/10/banner-special-offer-home2-1.webp" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square bg-blue-400 hover:bg-blue-300" src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/08//product-1-460x460.png" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square bg-red-500 hover:bg-red-400" src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/08//product-3-460x460.png" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square bg-pink-200 hover:bg-pink-400" src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/08//product-1-1-460x460.png" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square bg-orange-200 hover:bg-orange-400" src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/08//product-3-1-460x460.png" />
                        <img alt="" className="w-full h-full rounded bg-orange-400 hover:bg-orange-500 shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/10/banner-home4.png" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square bg-green-400 hover:bg-green-300" src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/10/item-slider-home4-1.png" />
                        <img alt="" className="w-full h-full bg-cyan-400 hover:bg-cyan-300 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/10/item-slider-home4-3.png" />
                        <img alt="" className="w-full h-full rounded bg-fuchsia-500 hover:bg-fuchsia-400 shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://bw-craftxtore.bzotech.com/demo4/wp-content/uploads/2023/10/item-slider-home4-2.png" />
                        <img src="https://andimpex.com.bd/public/frontend/assets/img/green-world/Jute-Leaf-1.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square bg-pink-200 hover:bg-pink-400" />
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Galary;