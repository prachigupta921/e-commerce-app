import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
    const { cart } = state;

    const [total, settotal] = useState(0)
    const changeQty=(id,qty)=>{
        dispatch({
            type:"CHANGE_CART_QTY",
            payload:{
                id,
                qty,
            },
        });
    }

    useEffect(()=>{
        settotal(
            cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0)
        );
    },[cart])
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            margin: 10,
            backgroundColor: "#ececec",
            padding: 10,
            width: "20%"
        }}
        >
            <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
            <b style={{ fontSize: 30, alignSelf: "center" }}>Subtotal {total}</b>

            {
                cart.length > 0 ? (
                    cart.map((prod) => (
                        <div
                            key={prod.title}
                            style={{
                                display: "flex",
                                padding: 10,
                                border: "1px solid grey",
                                margin: 5,
                                justifyContent: "space-between"
                            }}
                        >
                            <img style={{ height: 50, objectFit: "cover" }} src={prod.thumbnail} alt="" />
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                                <span>{prod.title}</span>
                                <span>{prod.price}</span>
                            </div>
                            <div style={{display:"flex",alignSelf:"center",gap:"10"}}>
                                <button onClick={()=>changeQty(prod.id,prod.qty-1)}>-</button>
                                <span>{prod.qty}</span>
                                <button  onClick={()=>changeQty(prod.id,prod.qty+1)}>+</button>
                            </div>
                        </div>
                    ))
                ) :
                    (<span style={{ fontSize: 20, alignSelf: "center" }}>Cart is empty</span>)
            }
        </div>
    )
}
export default Cart