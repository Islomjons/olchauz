import React from "react"
import { Route } from "react-router-dom"
import Cart from "./cart/Cart"
import Explore from "./explore/Explore"
import Home from "./home/Home"
import Pdp from "./pdp/Pdp"

const index = () => {
    return (
        <>
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="/pdp/:id">
            <Pdp />
        </Route>
        <Route exact path="/explore">
            <Explore />
        </Route>
        <Route path="/cart">
            <Cart />
        </Route>
        </> 
    )
}

export default index