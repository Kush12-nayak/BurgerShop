import React, { useState,useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {creatOrder, paymentVerification} from "../../redux/actions/order"
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { server } from '../../redux/store'

const ConfirmOrder = () => {

    // shippingInfo,
    // orderItems,
    // paymentMethod,
    // itemsPrice,
    // taxPrice,
    // shippingCharges,
    // totalAmount

    const dispatch=useDispatch();
    const {cartitems,subtotal,Tax,shippingCharges,Total,shippingInfo}=useSelector((state)=>state.cart)
    const {message,error,loading}=useSelector((state)=>state.order)
    const {user}=useSelector((state)=>state.auth)
    const navigate=useNavigate();

    let temp=0;
   

    const [paymentmethod,setpaymentmethod]=useState("")
    const [disablebtn,setdisablebtn]=useState(false)

    const usernew=user._id;

    // const {
    //  cartitems,
    // subtotal,
    // Tax,
    // shippingCharges,
    // Total,
    // shippingInfo

    // }=useSelector(state=>state.cart)

   

    const submitHandler=async(e)=>{
        e.preventDefault();
        setdisablebtn(true)

        if(paymentmethod==="COD"){

           // console.log({shippingInfo,cartitems,paymentmethod,subtotal,Tax,shippingCharges,Total,usernew})
           dispatch(creatOrder(shippingInfo,cartitems,paymentmethod,subtotal,Tax,shippingCharges,Total,usernew))
       
        }
        else{

            const {data:{
                order,orderOptions
            }}=await axios.post(`${server}/createorderonline`,
            {
                shippingInfo,
                orderItems:cartitems,
                paymentMethod:paymentmethod,
                itemsPrice:subtotal,
                taxPrice:Tax,
                shippingCharges,
                totalAmount:Total,
                user:usernew
            },{
                
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })

            const options = {
                key: "rzp_test_xyYZBIVpYL74Vc",
                amount: order.amount,
                currency: "INR",
                name: "Burger Shop",
                description: "Burger App",
                order_id: order.id,
                handler: function (response) {
                  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
                    response;

                    dispatch(paymentVerification(razorpay_payment_id,
                        razorpay_order_id,razorpay_signature,
                        orderOptions))
        
                },
        
                theme: {
                  color: "#9c003c",
                },
              };
              const razorpay = new window.Razorpay(options);
              razorpay.open();
        }

    };

    useEffect(() => {
      
        if(message){
            toast.success("order placed successfully")
            dispatch({
                type:"clearMessage"
            })
            dispatch({
                type:"emptyState"
            })
            navigate("/paymentsuc")
        }
        if(error){
            toast.error(error);
            dispatch({type:"clearError"});
            setdisablebtn(false);
        }
        
    
    }, [dispatch,message,navigate,error])
    

  return (
   <section className='confirmorder'>
        <main>
            <h1>Confirm Order</h1>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Cash On Delivery</label>
                    <input type="radio" required name="payment" id="" onChange={()=>setpaymentmethod("COD")} />
                </div>
                <div>
                    <label htmlFor="">Online</label>
                    <input type="radio" name="payment" id="" onChange={()=>setpaymentmethod("ONLINE")} />
                </div>
                <button type='submit' required  disabled={disablebtn}>Place Order</button>
            </form>
        </main>
   </section>
  )
}

export default ConfirmOrder