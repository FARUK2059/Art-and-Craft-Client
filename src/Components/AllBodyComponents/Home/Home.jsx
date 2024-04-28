import CraftItemSection from "./ArtAndCraftItem/CraftItemSection";
import BannerSlider from "./BannerSlider/BannerSlider";
import CraftCatagory from "./CraftCatagory";
import Futures from "./Futures";
import Galary from "./Galary";


const Home = () => {
    return (
        <div>

            {/* Banner Slider section */}
            <div>
                <BannerSlider></BannerSlider>
            </div>

            {/* craft Item  section */}
            <div>
                <CraftCatagory></CraftCatagory>
            </div>

            {/* Art & Craft Item section chalange extra */}
            <div>
                <CraftItemSection></CraftItemSection>
            </div>

            {/* craft Future section */}
            <div className="p-6 ">
                <Futures></Futures>
            </div>

            {/* craft Galary section */}
            <div className="p-6">
                <Galary></Galary>
            </div>

        </div>
    );
};

export default Home;