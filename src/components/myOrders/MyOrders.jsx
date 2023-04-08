import React,{useEffect} from 'react'
import {AiFillEye} from "react-icons/ai"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getMyOrders} from "../../redux/actions/order"
import Loader from "../layout/Loader"
import toast from "react-hot-toast"


const MyOrders = () => {

   
    const {orders,loading,error}=useSelector(state=>state.orders)

    const dispatch=useDispatch()
    
    useEffect(() => {

        if(error){
            toast.error(error)
            dispatch({type:"clearError"})
        }

        dispatch(getMyOrders())
        
      
    }, [dispatch,error])


    function getquan(i){
        let quan=0
        let arr=i.orderItems
    
        for(let i=0;i<arr.length;i++){
            
            quan=quan+arr[i].quantity;
        } 
        return quan
        
    }
   

   

  return (
    <section className='tableclass'>
        
        {
            loading===true?<Loader/>:
            <main>
            {
                orders.length===0?(
                    <h3 style={{
                        fontSize:"1.5rem",
                        color:"rgb(156,0,60)",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>"You Haven't Add anything Yet!!"</h3>)
                :
                <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Ordered Items</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       orders && orders.map(i=>(
                            <tr key={i._id}>
                        <td>{i._id}</td>
                        <td>{i.orderStats}</td>
                        <td>{getquan(i)}</td>
                        <td>₹{i.totalAmount}</td>
                        <td>{i.paymentMethod}</td>
                        <td><Link to={`/order/${i._id}`}><AiFillEye/></Link></td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
            }
        </main>
        }

    </section>
  )
}

export default MyOrders
