import c from "./Property.module.css"
import PropertyImg from "../../dummiy-data.property.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const Property = () => {
  return (
    <div className={c.property}>
        <div className={c.container}>
            <div className={c.property__wrapper}>   
                {
                    PropertyImg.map(propertyImgs => 
                        <Link key={uuidv4()} className={c.property__link}>
                            <img className={c.property__img} src={propertyImgs.propertyImg} alt="" />
                        </Link>    
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Property