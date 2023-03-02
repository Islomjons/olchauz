import c from "./ProductTech.module.css"
import ProductTechJson from "../../dimmiy-data.productTech.json"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const ProductTech = () => {
    const { t } = useTranslation()
    const [productTechCards, setProductTechCards] = useState([])
    const [productTechCardsBottom, setProductTechCardsBottom] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductTechCards(data.slice(39, 44)))
    }, [])  

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductTechCardsBottom(data.slice(44, 60)))
    }, [])
    return (
        <div className={c.producttech}>
            <div className={c.container}>
                <div className={c.product__tech__wrapper}>
                    <div className={c.product__tech__left}>
                        {
                            ProductTechJson.map(producttechImg => 
                                <Link key={uuidv4()}>
                                    <img className={c.product__tech__left__img} src={producttechImg.productTech} alt="" />
                                </Link>   
                            )
                        }
                    </div>
                    <ul className={c.product__tech__right}>
                        {
                            productTechCards.map((producttechCardss, id) => 
                                <li className={c.product__tech__item} key={id}>
                                    <Link to={`/pdp/${producttechCardss.id}`} className={c.product__tech__link}>
                                        <img className={c.product__tech__img} src={producttechCardss.category.image} alt="" />
                                        <p className={c.product__tech__title}>{producttechCardss.title}</p>
                                        <p className={c.product__tech__price}>{producttechCardss.price}</p>
                                    </Link>
                                    <div className={c.product__tech__btn__wrapper}>
                                        <button className={c.product__tech__cart}>
                                            <FiShoppingCart className={c.product__tech__icon}/>
                                        </button>
                                        <button className={c.product__tech__rent}>
                                            {t("rent__price")}
                                        </button>
                                    </div>
                                </li>
                            )
                        } 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductTech