import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { json, Link } from 'react-router-dom'
import burger1 from "../../assests/burger1.png"
import {useDispatch,useSelector} from "react-redux"
import {useEffect} from "react"


const item=10

const Cart = () => {

    const {cartitems,subtotal,shippingCharges,Tax,Total}= useSelector(state=>state.cart)

    const {cartitems:oditems}=useSelector(state=>state.cart)

    

    const dispach=useDispatch()

    const increament=(id)=>{

        dispach({type:"increament",
        payload:id});

        dispach({
            type:"calculate"
        })
    }


    const decreament=(id)=>{
        dispach({type:"decreament",
        payload:id});

        dispach({
            type:"calculate"
        })

    }

    const delhandler=(id)=>{
        dispach({type:"deletfromcart",
        payload:id});
        
        dispach({
            type:"calculate"
        })

    }

    useEffect(() => {
    
        localStorage.setItem("cartitems",JSON.stringify(oditems))
        localStorage.setItem("cartPrices",JSON.stringify({subtotal,shippingCharges,Tax,Total}))
    
    }, [oditems,subtotal,shippingCharges,Tax,Total])
    


  return (
    <section className='cart'>
        <main>
            {
                cartitems.length > 0 ?(
                    cartitems.map((i)=>(
                        <Cartitem
                        key={i.key}
                        title={i.title}
                        price={i.price}
                        quantity={i.quantity}
                        imgSrc={i.imgSrc}
                        increament={increament}
                        decreament={decreament}
                        delhandler={delhandler}
                        id={i.id}/>
                    ))
                ):(<h1 style={{
                    fontSize:"2.5rem",
                    color:"rgb(156,0,60)",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>"No items in cart"</h1>)
            }
            
        </main>
        <aside>
            {
                cartitems.length>0 &&(
                    <div>
                        <div>
                <h3>SubTotal:</h3>
                <p>₹{subtotal}</p>
            </div>
            <div>
                <h3>Shipping:</h3>
                <p>₹{shippingCharges}</p>
            </div>
            <div>
                <h3>Tax:</h3>
                <p>₹{Tax}</p>
            </div>
            <div>
                <h3>Total:</h3>
                <p>₹{Total}</p>
            </div>
                    </div>
                )
            }
        </aside>
        {
           cartitems.length > 0 && (<Link to="/shipping">Checkout</Link>)
        }
        
        
    </section>
  )
}

const Cartitem=({title,price,quantity,imgSrc,increament,decreament,delhandler,id})=>(

    <div className='cartitem'>
        <article>
        <img src={imgSrc} alt="" />
            <p className='foodname'>{title}</p>
            <p>₹{price}</p>
        </article>
        <div>
            <button onClick={()=>decreament(id)}>-</button>
                <p>{quantity}</p>
            <button onClick={()=>increament(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>delhandler(id)}/>
    </div>
    

)


export default Cart