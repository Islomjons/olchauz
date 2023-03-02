import c from "./Beauty.module.css"
import BeautyImg from "../../dimmiy-data.quetion.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const Beauty = () => {
    return (
        <div className={c.beauty}>
            <div className={c.container}>
                <div className={c.beauty__wrapper}>
                    {
                        BeautyImg.map(beautyImg => 
                            <Link key={uuidv4()}>
                                <img className={c.beauty__img} src={beautyImg.imagess} alt="" />
                            </Link>    
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Beauty