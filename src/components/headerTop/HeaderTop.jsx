import c from "./HeaderTop.module.css"
import { useTranslation } from "react-i18next"
import { changeLanguage } from "i18next"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

const HeaderTop = () => {
    const { t } = useTranslation()
    const [changeLang, setChangeLang] = useState(localStorage.getItem("lang"))
    const { i18n } = useTranslation()
    const changeWebSiteLang = (evt) => {
        i18n.changeLanguage(evt.target.value || "uz")
    }
    localStorage.getItem("lang")
    const langs = [
        "uz",
        "ru",
      ]
    return (
        <div className={c.headertop}>
            <div className={c.container}>
                <div className={c.headertop__wrapper}>
                    <ul className={c.headertop__list}>
                        <li className={c.headertop__item}>
                            <a className={c.headertop__link} href="/">0% {t("paymentInKind")}</a>
                        </li>
                        <li className={c.headertop__item}>
                            <a className={c.headertop__link1} href="/">{t("discount")}</a>
                        </li>
                        <li className={c.headertop__item}>
                            <a className={c.headertop__globe} href="/">{t("mapOfGlobe")}</a>
                        </li>
                    </ul>
                    <div className={c.headertop__telWrapper}>
                        <a className={c.headertop__numberLink} href="tel:+998 71 202 202 1">+998 (71) 202 202 1</a>
                        <a className={c.headertop__olchaLink} href="/">{t("seleToOlcha")}</a>

                        <select className={c.headertop__select} onChange={changeWebSiteLang}>
                            {
                                langs.map(langsItem => 
                                    <option key={uuidv4()} selected={localStorage.getItem("lang") === langsItem ? true : false} value={langsItem}>{langsItem}</option>    
                                )
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default HeaderTop