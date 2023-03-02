import Akssesuar from "../../components/akssesuar/Akssesuar"
import Artel from "../../components/artel/Artel"
import Beauty from "../../components/beauty/Beauty"
import HeroBanner from "../../components/heroBanner/HeroBanner"
import HeroBottom from "../../components/heroBottom/HeroBottom"
import HeroFooter from "../../components/heroFooter/HeroFooter"
import Olcha from "../../components/olcha/Olcha"
import Part from "../../components/part/Part"
import Price from "../../components/price/Price"
import ProductCards from "../../components/productCards/ProductsCards"
import Products from "../../components/products/Products"
import ProductSkin from "../../components/productSkin/ProductSkin"
import ProductTech from "../../components/productTech/ProductTech"
import Property from "../../components/property/Property"
import SwiperProducts from "../../components/swiperProducts/SwiperProducts"
import TechImg from "../../components/techImg/TechImg"
import Technologies from "../../components/technologies/Technologies"

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <Technologies />
            <HeroBottom />
            <Price />
            <HeroFooter />
            <ProductCards />
            <Products />
            <SwiperProducts />
            <technoHouse />
            <Beauty />
            <ProductSkin />
            <TechImg />
            <ProductTech />
            <Akssesuar />
            <Property />
            <Part />
            <Olcha />
            <Artel />
        </div>
    )
}

export default Home