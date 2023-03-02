import c from "./HeroFooter.module.css"
import HeroFooterJson from "../../dimmiy-data.heroFooter.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const HeroFooter = () => {
    return (
        <div className={c.herofooter}>
            <div className={c.container}>
                <ul className={c.heroFooter__list}>
                    {
                        HeroFooterJson.map(heroFooterImg => 
                            <li key={uuidv4()} className={c.heroFooter__item}>
                                <Link>
                                    <img className={c.heroFooter__imges} src={heroFooterImg.HeroFooterImg} alt="" />
                                </Link>
                            </li>    
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default HeroFooter