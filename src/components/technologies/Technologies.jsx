import c from "./Technologies.module.css"
import technologiesJson from "../../dummiy-data.img.json"
import { Link } from "react-router-dom"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

const Technologies = () => {
    const elTechnologiesWrapper = useRef()
    const [technologiesSwiper, setTechnologiesSwiper] = useState(0)

    const turnLeft = () => {
        if (technologiesSwiper < 0) {
            setTechnologiesSwiper(technologiesJson.length - 1)
        }else{
            setTechnologiesSwiper(0)
        }
    }

    const turnRight = () => {
        if (technologiesSwiper < technologiesJson.length - 1) {
            setTechnologiesSwiper(technologiesSwiper + 1)
        }else{
            setTechnologiesSwiper(0)
        }
    }

    useEffect(() => {
        elTechnologiesWrapper.current.scrollLeft = technologiesSwiper * 100
    }, [technologiesSwiper])
    return (
        <div className={c.technologies}>
            <div className={c.container}>
                <button className={c.technologies__btn} data-btn-type="left" onClick={turnLeft}>
                    <GrFormPrevious />
                </button>
                <ul className={c.technologies__list} ref={elTechnologiesWrapper}>
                    {
                        technologiesJson.map(newTech => 
                            <li key={uuidv4()} className={c.technologies__item}>
                                <Link to={`/explore`} className={c.technologies__link}>
                                    <img className={c.technologies__img} src={newTech.technologyImg} alt="" />
                                    <p className={c.technologies__desc}>{newTech.technologyDesc}</p>
                                </Link>
                            </li>    
                        )
                    }
                </ul>
            <button className={c.technologies__btn} data-btn-type="right" onClick={turnRight}>
                <GrFormNext />
            </button>
            </div>
        </div>
    )
}

export default Technologies