import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import c from "./Pdp.module.css"

const Pdp = () => {
    const { id } = useParams()
    const [activeImgOver, setActiveImgOver] = useState(0)
    const [singleProductsData, setSingleProductsData] = useState(null)

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => response.json())
            .then(data => setSingleProductsData(data))
    }, [])
    
    return (
        <div className={c.pdp}>
            <div className={c.container}>
                <div className={c.pdp__list}>
                    {
                        singleProductsData !== null && singleProductsData ? 
                        <>
                            <div className={c.pdp__desc__wrapper}>
                                <h2 className={c.pdp__desc}>{singleProductsData.description}</h2> 
                            </div>
                            <img className={c.pdp__main__img} src={singleProductsData.category.image} alt="" /> 
                            <div className={c.pdp__img__wrapper}>
                                {
                                    singleProductsData.images.map((productsImg, index) => 
                                        <img key={productsImg.id} style={index === activeImgOver ? {boxShadow: "0px 0px 0px 3px red"} : null} onClick={() => {setActiveImgOver(index)}} className={c.pdp__imges} src={productsImg} alt=""/>
                                    )
                                }
                            </div>
                        </>
                        : <></>
                    }
                </div>
                <div className={c.pdp__right}>
                    
                </div>
            </div>
        </div>
    )
}

export default Pdp