import c from "./HeaderBottom.module.css"
import olchaUzImg from "../../assets/images/olcha.svg"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi"
import { MdOutlineSettingsInputComponent } from "react-icons/md"
import { RxPerson } from "react-icons/rx"
import { useTranslation } from "react-i18next"

const HeaderBottom = ({setisSignUpActive, setIsCartActive, setIsCatalogActive}) => {
    const { t } = useTranslation()
    return (
        <div className={c.headerbottom}>
            <div className={c.container}>
                <div className={c.headerbottom__wrapper}>
                    <Link to="/">
                       <img className={c.headerbottom__img} src={olchaUzImg} alt="" />
                    </Link>
                    <button onClick={() => {setIsCatalogActive(true)}} className={c.headerbottom__btnKatalog}>
                        <RxHamburgerMenu />
                        {t("catalog")}
                    </button>
                    <input className={c.headerbottom__input} type="text" placeholder={t("searchByCatalog")}/>
                    <button className={c.headerbottom__btnSearch}>
                       <FiSearch className={c.search__icon}/> 
                    </button>
                    <Link className={c.compare__wrapper}>
                        <MdOutlineSettingsInputComponent className={c.compare__icon}/>
                        <p className={c.compare__text}>{t("compare")}</p>
                    </Link>
                    <Link className={c.compare__wrapper}>
                        <FiHeart className={c.compare__icon}/>
                        <p className={c.compare__text}>{t("likes")}</p>
                    </Link>
                    <Link className={c.compare__wrapper} to="/cart">
                        <FiShoppingCart className={c.compare__icon}/>
                        <p className={c.compare__text}>{t("cart")}</p>
                    </Link>
                    <button onClick={() => {setisSignUpActive(true)}} className={c.compare__wrapper}>
                        <RxPerson className={c.compare__icon}/>
                        <p className={c.compare__text}>{t("enter")}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom