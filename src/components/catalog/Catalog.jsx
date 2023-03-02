import "./Catalog.css"
import { FiX } from "react-icons/fi"

const Catalog = ({isCatalogActive, setIsCatalogActive}) => {
    return (
        <div className={isCatalogActive === true ? "catalog catalogactive" : "catalog"}>
            <div className="catalog__wrapper">
                <div className="catalog__list">
                    <h1 className="header__catalog">Katalog</h1>
                    <FiX className="catalog__icon" onClick={() => {setIsCatalogActive(false)}}/>
                </div>
            </div>
        </div>
    )
}

export default Catalog