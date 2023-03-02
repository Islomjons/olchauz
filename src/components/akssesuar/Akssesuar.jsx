import c from "./Akssesuar.module.css"
import AkssesuarImges from "../../dimmiy-data.akssesuar.json"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const Akssesuar = () => {
    const { t } = useTranslation()
    const [akssesuarCards, setAkssesuarCards] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setAkssesuarCards(data.slice(44, 49)))
    }, [])
    return (
        <div className={c.akssesuar}>
            <div className={c.container}>
                <div className={c.akssesuar__wrapper}>
                    <div className={c.akssesuar__left}>
                        {
                            AkssesuarImges.map(akssesuarRasm => 
                                <Link key={uuidv4()}>
                                    <img className={c.akssesuar__img__left} src={akssesuarRasm.akssesuarImg} alt="" />
                                </Link>    
                            )
                        }
                    </div>

                    <ul className={c.akssesuar__right}>
                        {
                            akssesuarCards.map((akssesuarFetch, id) => 
                                <li className={c.akssesuar__item} key={id}>
                                    <Link to={`/pdp/${akssesuarFetch.id}`} className={c.akssesuar__link__right}>
                                        <img className={c.akssesuar__img__right} src={akssesuarFetch.category.image} alt="" />
                                        <p className={c.akssesuar__title__right}>{akssesuarFetch.title}</p>
                                        <p className={c.akssesuar__price__right}>{akssesuarFetch.price}</p>
                                    </Link>
                                    <div className={c.akssesuar__btn__right__wrapper}>
                                        <button className={c.akssesuar__btn__right__cart}>
                                            <FiShoppingCart className={c.akssesuar__btn__right__icon}/>
                                        </button>
                                        <button className={c.akssesuar__btn__right__rent}>
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

export default Akssesuar