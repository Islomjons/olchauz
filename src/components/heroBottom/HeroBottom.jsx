import c from "./HeroBottom.module.css"
import heroBottomImg from "../../dummiy-data.hot.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const HeroBottom = () => {
    return (
        <div className={c.herobottom}>
            <div className={c.container}>
                <ul className={c.herobottom__list}>
                    {
                        heroBottomImg.map(herobottomimg => 
                            <li key={uuidv4()} className={c.herobottom__item}>
                               <Link>
                                  <img className={c.heroBottomImges} src={herobottomimg.hotImg} alt="" />
                               </Link>
                            </li>    
                        )
                    }
                </ul>
            </div>  
        </div>
    )
}

export default HeroBottom