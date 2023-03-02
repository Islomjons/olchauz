import React from 'react'
import c from "./Cart.module.css";
import { useDispatch, useSelector } from 'react-redux';
import cartImg from "../../assets/images/cart.png"
import { CgMathPlus, CgMathMinus, CgHeart, CgTrash } from "react-icons/cg"
import { Link } from 'react-router-dom';

const Cart = ({ callback }) => {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
  return (
    <div className={c.cart}>
        <div className={c.container}>
            <div className={c.cart__container}>
                <div className={c.cart__header}>
                    <h1 className={c.cart__heading}>Hozir xarid qilish</h1>
                </div>
                <div className={c.cart__body}>
                        <div className={c.cart__product__wrapper}>
                            {
                                selector?.cart?.cart.map((product) => 
                                <div className={c.product__cart__item}>
                                        <div className={c.cart__product__left}>
                                            <img src={product.image} alt="" />
                                            <div className={c.cart__product__info}>
                                                <Link to={`/product/${product.id}`} className={c.cart__product__left__title}>{product.title}</Link>
                                                <span className={c.cart__product__left__price}>{`${product.price}`}</span>
                                            </div>
                                        </div>
                                        <div className={c.cart__product__right}>
                                            <div className={c.cart__product__count}>
                                                <button className={c.cart__product__btn} onClick={() => {dispatch({
                                                    type: "DECREMENT",
                                                    data: {
                                                        id: product.id,
                                                        count: product.count
                                                    }
                                                })
                                            }}>
                                                    <CgMathMinus style={{width: "20px", height: "20px", cursor: "pointer"}}/> 
                                                </button>
                                                <span className={c.cart__product__number}>{product.count}</span>
                                                <button className={c.cart__product__btn} onClick={() => {
                                                    dispatch({
                                                        type: "INCREMENT",
                                                        data: product
                                                    })
                                                }}>
                                                    <CgMathPlus className="product__minus__cart" style={{width: "20px", height: "20px", cursor: "pointer"}}/>
                                                </button>
                                            </div>
                                            <div className={c.product__btns}>
                                                <CgHeart className={c.product__icon}/>
                                                <CgTrash className={c.product__icon} onClick={() => {
                                                    dispatch({
                                                        type: "REMOVE_PRODUCT",
                                                        data: product
                                                    })
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart