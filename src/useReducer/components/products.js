import React from "react";

const Products=({state,dispatch})=>{
    const { products,cart}=state
    console.log(state, "s")
    console.log(products,"p")
    return(
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-between",
            width:"80%"
        }}
        >
            {products.map((prod)=>{
               return(
                <div key={prod.id}
                style={{
                    display:"flex",
                    flexDirection:"column",
                    padding:10,
                    border:"1px solid grey",
                    width:"30%",
                    marginTop:10,
                    gap:10,
                }}
                >
                    <img style={{height:200, objectFit:"cover"}} src={prod.thumbnail} alt="" />
                   <div style={{display:"flex",justifyContent:"space-between"}}>
                   <span>{prod.title}</span>
                    <span>{prod.price}</span>
                   </div>
                   {
                    cart.some(p=>p.id===prod.id)?<button  onClick={()=>dispatch({type:"REMOVE_TO_CART",
                    payload:prod
                })}
                    >Remove from cart</button>
                    : <button onClick={()=>dispatch({type:"ADD_TO_CART",
                    payload:{
                        id:prod.id,
                        title:prod.title,
                        thumbnail:prod.thumbnail,
                        qty:1,
                        price:prod.price
                    }
                })}>Add to cart</button>
                   }
                </div>
               )
            })}

        </div>
    )
}
export default Products