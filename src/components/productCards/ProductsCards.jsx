import c from "./ProductCards.module.css"
import ProductCardsJson from "../../dimmiy-data.cards.json"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const ProductCards = ({setIsRentActive}) => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const dispatchProducts = (data) => {
        const action = {
            type: "ADD_TO_CART",
            data: data
        }
        dispatch(action)
    }
    const { t } = useTranslation()
    const [productsCards, setProductsCards] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductsCards(data.slice(0, 10)))
    }, [])
    console.log(productsCards);
    return (
        <div className={c.productcards}>
            <div className={c.container}>
                <div className={c.productCards__wrapper}>
                        <div className={c.productCards__left}>
                        {
                            ProductCardsJson.map(productImg => 
                               <Link key={uuidv4()}>
                                     <img className={c.productCardsLeft__Img} src={productImg.cards} alt="" /> 
                               </Link> 
                            )
                        }
                    </div>
                    <ul className={c.productCards__right}>
                        {
                            productsCards.map(({id, image, title, price}) =>
                               <li key={id} className={c.productCards__item}>
                                   <Link to={`/pdp/${id}`} className={c.productsCards__Link}>
                                        <img className={c.productCardsRight__Img} src={image} alt="" />
                                        <p className={c.productCardsRight__Title}>{title}</p>
                                        <p className={c.productCardsRight__Price}>{price}</p>
                                   </Link>
                                   <div className={c.productCards__btnWrapper}>
                                        <button className={c.productCards__btnCart} onClick={() => dispatchProducts({ id, image, title, price, count: 1 })}>
                                            <FiShoppingCart className={c.productCards__icon}/>
                                        </button>
                                        <button onClick={() => {setIsRentActive(true)}} className={c.productCards__btn}>
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

export default ProductCards