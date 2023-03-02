import c from "./ProductSkin.module.css"
import productskinn from "../../dimmiy-data.skin.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi"

const ProductSkin = () => {
    const [productsCardImg, setProductsCardImg] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductsCardImg(data.slice(35, 39)))
    }, [])
    return (
        <div className={c.productskin}>
            <div className={c.container}>
                <div className={c.productskin__wrapper}>
                    <div className={c.productskin__left}>
                        {
                            productskinn.map(productLeftSkin => 
                                <Link key={uuidv4()}>
                                    <img className={c.products__left__img} src={productLeftSkin.skinImg} alt="" />
                                </Link>    
                            )
                        }
                    </div>
                    <ul className={c.productskin__right}>
                        {
                            productsCardImg.map((productsRightSkinCards, id) => 
                                <li key={uuidv4()} className={c.productskin__right__item}>
                                    <Link to={`/pdp/${productsRightSkinCards.id}`} className={c.productskin__right__link}>
                                        <img className={c.productskin__right__img} src={productsRightSkinCards.category.image} alt="" />
                                        <p className={c.productskin__right__title}>{productsRightSkinCards.title}</p>
                                        <p className={c.productskin__right__price}>{productsRightSkinCards.price}</p>
                                    </Link>
                                  <div className={c.productskin__btn__wrapper}>
                                    <button className={c.productskin__cart__btn}>
                                        <FiShoppingCart className={c.productRightSkin__icon}/>  
                                    </button>
                                    <button className={c.product__btn__rent}>
                                        Muddatli tolov
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

export default ProductSkin