import c from "./Olcha.module.css"
import olchaJson from "../../dummiy-data.olcha.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const Olcha = () => {
  return (
    <div className={c.olcha}>
        <div className={c.container}>
            <div className={c.olcha__container}>
                {
                    olchaJson.map(olchaimg => 
                        <Link key={uuidv4()}>
                            <img className={c.olcha__img} src={olchaimg.olchaImg} alt="" />
                        </Link>   
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Olcha