import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { CartReducer } from "./cartReducer";
import Products from "./components/products";
import Cart from "./components/cart";

const UseReducerApi = () => {

    const [state, dispatch] = useReducer(CartReducer, {
        products: [],
        cart: [],
    })
   // console.log(state, "ss")

    const fetchProducts = async () => {
        const { data } = await axios.get("https://dummyjson.com/products");
         console.log(data.products,"d");
        dispatch({
            type: "ADD_PRODUCTS",
            payload: data.products,
        });
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div style={{ display: "flex" }}>
            <Products state={state} dispatch={dispatch} />
            <Cart state={state} dispatch={dispatch} />
        </div>
    )
}
export default UseReducerApi