import React ,{useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrdersDetails} from "../../redux/actions/order"
import Loader from "../layout/Loader"

const OrderDetails = () => {


    const params=useParams()
    const dispatch=useDispatch()

    const {order,loading}=useSelector(state=>state.orders)

    useEffect(() => {   
     
        dispatch(getOrdersDetails(params.id))

    }, [params.id,dispatch])

  
    
    
  return (
    <section className='orderdetails'>
        {
            loading===false && order !== undefined ?
            <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address:</b>
                    {`${order.shippingInfo.hNo} 
                    ${order.shippingInfo.city}
                    ${order.shippingInfo.state}
                    ${order.shippingInfo.country}
                    ${order.shippingInfo.pinCode}`}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name:</b>
                    {order.user.name}
                </p>
                <p>
                    <b>Phone No:</b>
                    {order.shippingInfo.phNo}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status:</b>
                    {order.orderStats}
                </p>
                <p>
                    <b>Placed At:</b>
                    {order.createdAt.split("T")[0]}
                </p>
                <p>
                    <b>Delivered At:</b>
                    {order.deliveredAt ? order.deliveredAt.split("T")[0]:""}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method:</b>
                    {order.paymentMethod}
                </p>
               {
                order.paymentMethod==="COD"?null:
                 <p>
                <b>Paymen ref:</b>
                #{order.paymentInfo}
            </p>
               }
                {
                    order.paymentMethod==="COD"?null:
                    <p>
                    <b>Paymet At:</b>
                    {order.paidAt.split("T")[0]}
                </p>
                }
            </div>
            <article>
                <h1>Ordered Items</h1>
                {
                    order && order.orderItems.map(i=>(
                       < div>
                        <p>{i.title}</p>
                        <div>
                            <span>{i.quantity}</span> x
                            <span>{i.price}</span>
                        </div>
                </div>
                    ))
                }
            </article>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total:</b>
                    ₹{order.itemsPrice}
                </p>
                <p>
                    <b>Shipping Charges:</b>
                    ₹{order.shippingCharges}
                </p>
                <p>
                    <b>Tax:</b>
                    ₹{order.taxPrice}
                </p>
                <p>
                    <b>Total Amount:</b>
                    ₹{order.totalAmount}
                </p>
                
            </div>
        </main>:<Loader/>
        }

    </section>
  )
}

export default OrderDetails
