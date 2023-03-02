import React, { useEffect, useState } from 'react'
import c from "./Artel.module.css"
import artelLeftImg from "../../assets/images/artel.png"
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from 'react-i18next'

const Artel = () => {
    const { t } = useTranslation()
    const [artelFetch, setArtelFetch] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setArtelFetch(data.slice(53, 58)))
    }, [])
  return (
    <div className={c.artel}>
        <div className={c.container}>
            <div className={c.artel__container}>
                <div className={c.artel__left}>
                    <Link>
                        <img className={c.artel__left__img} src={artelLeftImg} alt="" />
                    </Link>
                </div>
                <ul className={c.artel__right}>
                    {
                        artelFetch.map((artelRightFetch, id) => 
                            <li className={c.artel__right__item} key={id}>
                                <Link className={c.artel__right__link} to={`/pdp/${artelRightFetch.id}`}>
                                    <img className={c.artel__right__img} src={artelRightFetch.category.image} alt="" />
                                    <p className={c.artel__right__title}>{artelRightFetch.title}</p>
                                    <p className={c.artel__right__price}>{artelRightFetch.price}</p>
                                </Link>
                                <div className={c.artel__right__btn__wrapper}>
                                    <button className={c.artel__right__cart}>
                                        <FiShoppingCart className={c.artel__icon}/>
                                    </button>
                                    <button className={c.artel__right__rent}>
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

export default Artel