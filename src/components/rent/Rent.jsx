import "./Rent.css"
import { FiX } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const Rent = ({isRentActive, setIsRentActive}) => {
    const { t } = useTranslation()
    return (
        <div className={isRentActive === true ? "rent rentactive" : "rent"}>
            <div className="rent__wrapper">
                <div className="rent__list">
                    <h2 className="rent__heading">{t("credit")}</h2>
                    <FiX className="rent__icon" onClick={() => {setIsRentActive(false)}}/>
                </div>
            </div>
        </div>
    )
}

export default Rent