import c from "./TechImg.module.css"
import techHauseImges from "../../dummit-data.techImg.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const TechImg = () => {
    return (
        <div className={c.techimg}>
            <div className={c.container}>
                {
                    techHauseImges.map(techImess => 
                        <Link key={uuidv4()}>
                            <img className={c.teachImg} src={techImess.techHauseImg} alt="" />
                        </Link>    
                    )
                }
            </div>
        </div>
    )
}

export default TechImg