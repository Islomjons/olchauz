import c from "./Price.module.css"
import PriceImg from "../../dummiy-data.price.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const Price = () => {
    return (
        <div className={c.price}>
            <div className={c.container}>
                <ul className={c.price__list}>
                    {
                        PriceImg.map(newPrice => 
                            <li key={uuidv4()} className={c.price__item}>
                                <Link>
                                   <img className={c.priceImg} src={newPrice.price} alt="" />
                                </Link>
                            </li>    
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Price