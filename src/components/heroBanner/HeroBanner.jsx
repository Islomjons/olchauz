import c from "./HeroBanner.module.css"
import { Link } from "react-router-dom"
import heroBannerImg from "../../dimmit-data.heroBanner.json"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

const HeroBanner = () => {
    const elHeroWrapper = useRef()
    const [swipeCarausel, setSwipeCarausel] = useState(0)
    const swipeRight = () => {
        if (swipeCarausel < heroBannerImg.length - 1) {
            setSwipeCarausel(swipeCarausel => swipeCarausel + 1)
        }else{
            setSwipeCarausel(0)
        }
    }

    const swipeLeft = () => {
        if (swipeCarausel > 0) {
            setSwipeCarausel(swipeCarausel => swipeCarausel - 1)
        }else{
            swipeCarausel(heroBannerImg.length - 1)
        }
    }

    useEffect(() => {
        elHeroWrapper.current.scrollLeft = swipeCarausel * elHeroWrapper.current.offsetWidth
    }, [swipeCarausel]) 
    return (
        <div className={c.herobanner}>
            <div className={c.container}>
                <button className={c.heroBanner__Btn} data-btn-type="left" onClick={swipeLeft}>
                    <GrFormPrevious />
                </button>
                <div className={c.herobanner__list} ref={elHeroWrapper}>
                    {
                        heroBannerImg.map(heroImg => 
                            <div key={uuidv4()} className={c.herobanner__item}>
                                <Link>
                                    <img className={c.heroBanner__img} src={heroImg} alt="" />
                                </Link>
                            </div>    
                        )
                    }
                </div>
                <div className={c.dots__wrapper}>
                    {
                        heroBannerImg.map((dots, index) => 
                            <div style={swipeCarausel === index ? {backgroundColor: "#333333", transform: "scale 1.3"} : null} className={c.dot} key={index} onClick={() => {
                                setSwipeCarausel(index)
                            }}></div>
                        )
                    }
                </div>
                <button className={c.heroBanner__Btn} data-btn-type="right" onClick={swipeRight}>
                    <GrFormNext />
                </button>
            </div>
        </div>
    )
}

export default HeroBanner