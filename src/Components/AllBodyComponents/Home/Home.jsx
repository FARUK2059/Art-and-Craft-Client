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

            {/* Craft Item section */}
            <div>
                <CraftItemSection></CraftItemSection>
            </div>

            {/* craft Item Catagory section */}
            <div>
                <CraftCatagory></CraftCatagory>
            </div>

            {/* craft Future section */}
            <div>
                <Futures></Futures>
            </div>

            {/* craft Galary section */}
            <div>
                <Galary></Galary>
            </div>

        </div>
    );
};

export default Home;