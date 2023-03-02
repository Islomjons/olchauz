import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import c from "./SwiperProducts.module.css"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

const SwiperProducts = () => {
    const elSwiperCards = useRef()
    const [swipeCards, setSwipeCards] = useState([])
    const [swipeImges, setSwipeImages] = useState(0)

    const scrollLeft = () => {
        if (swipeImges < 0) {
            setSwipeImages(swipeCards.length - 1)
        }else{
            setSwipeImages(0)
        }
    }

    const scrollRight = () => {
        if (swipeImges < swipeCards.length - 1) {
            setSwipeImages(swipeImges + 1)
        }else{
            setSwipeImages(0)
        }
    }

    
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => setSwipeCards(data.slice(15, 35)))
    }, [])
    
    useEffect(() => {
        elSwiperCards.current.scrollLeft = swipeImges * 100
    }, [swipeImges])

    return (
        <div className={c.swiperProducts}>
            <div className={c.container}>
                <button className={c.swiper__btn} data-btn-type="left" onClick={scrollLeft}>
                    <GrFormPrevious />
                </button>
                <ul className={c.swiper__products__list} ref={elSwiperCards}>
                    {
                        swipeCards.map((swipeImges, id) => 
                            <li className={c.swiper__products__item} key={id}>
                                <Link to={`/pdp/${swipeImges.id}`} className={c.swiper__productLink}>
                                    <img className={c.swiper__products__img} src={swipeImges.category.image} alt="" />
                                    <p className={c.swiper__products__title}>{swipeImges.title}</p>
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <button className={c.swiper__btn} data-btn-type="right" onClick={scrollRight}>
                    <GrFormNext />
                </button>
            </div>
        </div>
    )
}

export default SwiperProducts