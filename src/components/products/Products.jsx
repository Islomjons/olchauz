import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import c from "./Products.module.css"
import ProductImg from "../../dummiy-data.products.json"
import { FiShoppingCart } from "react-icons/fi"
import { v4 as uuidv4 } from 'uuid';

const Products = () => {
    const [productsImg, setProductsImg] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductsImg(data.slice(10, 15)))
    }, [])

    return (
        <div className={c.products}>
            <div className={c.container}>
                <div className={c.products__wrapper}>
                    <ul className={c.products__left}>
                        {
                            productsImg.map((productImgess, id) => 
                                <li className={c.products__item} key={id}>
                                    <Link to={`/pdp/${productImgess.id}`} className={c.products__link}>
                                        <img className={c.products__image__left} src={productImgess.category.image} alt="" />
                                        <p className={c.products__title__left}>{productImgess.title}</p>
                                        <p className={c.products__price__left}>{productImgess.price}</p>
                                    </Link>
                                    <div className={c.products__btn__wrapper__left}>
                                        <button className={c.products__btnCart}>
                                            <FiShoppingCart className={c.products__icon}/>
                                        </button>
                                        <button className={c.productCards__btn}>
                                            Muddatli to'lov
                                        </button>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <div className={c.products__right}>
                        {
                            ProductImg.map(productsLeftImg => 
                                <Link key={uuidv4()}>
                                    <img className={c.products__right__img} src={productsLeftImg.products__img} alt="" />
                                </Link>    
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products