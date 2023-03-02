import React, { useEffect, useState } from 'react'
import c from "./Part.module.css"
import partImgLeft from "../../dummiy-data.part.json"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from 'react-i18next';

const Part = () => {
    const { t } = useTranslation()
    const textNone = {
        textDecoration: "none"
    }
    const [singlePartData, setSinglePartData] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setSinglePartData(data.slice(49, 53)))
    }, [])
  return (
    <div className={c.part}>
        <div className={c.container}>
            <div className={c.part__wrapper}>
                <div className={c.part__left}>
                    {
                        partImgLeft.map(partlefts => 
                            <Link key={uuidv4()}>
                                <img className={c.part__left__img} src={partlefts.partLeftImg} alt="" />
                            </Link>    
                        )
                    }
                </div>
                <ul className={c.part__right}>
                    {
                        singlePartData.map((partRights, id )=> 
                            <li key={id} className={c.part__right__item}>
                                <Link style={textNone} to={`/pdp/${partRights.id}`}>
                                   <img className={c.part__right__img} src={partRights.category.image} alt="" />
                                   <p className={c.part__right__title}>{partRights.title}</p>
                                   <p className={c.part__right__price}>{partRights.price}</p>
                                </Link>
                                <div className={c.part__right__btn__wrapper}>
                                    <button className={c.part__right__btn__cart}>
                                        <FiShoppingCart className={c.part__icon}/>
                                    </button>
                                    <button className={c.part__right__btn__rent}>
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

export default Part