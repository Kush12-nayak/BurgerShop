import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {AiFillEye} from "react-icons/ai"
import {GiArmoredBoomerang} from "react-icons/gi"
import {useDispatch,useSelector} from "react-redux"
import {getAdminorders,getprocessOrder} from "../../redux/actions/admin"
import Loader from '../layout/Loader'
import toast from "react-hot-toast"

const Orders = () => {

   

    const dispatch=useDispatch();
    
    const {loading,order,message,error}=useSelector(state=>state.admin)

    const statechangeHandler=(id)=>{
        dispatch(getprocessOrder(id))
    }

  

    useEffect(() => {

        if(message){
            toast.success(message);
            dispatch({type:"clearMessage"})
        }
        if(error){
            toast.error(error);
            dispatch({type:"clearError"})
        }
     
        dispatch(getAdminorders())
    }, [dispatch,message,error])

    function getquan(i){
        let quan=0
        let arr=i.orderItems
    
        for(let i=0;i<arr.length;i++){
            
            quan=quan+arr[i].quantity;
        } 
        return quan
        
    }
    

  return (
    <section className="tableclass">
        {
            loading===false && order !== undefined ?(
                <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(i=>(
                            <tr key={i}>
                        <td>{i._id}</td>
                        <td>{i.orderStats}</td>
                        <td>{getquan(i)}</td>
                        <td>₹{i.totalAmount}</td>
                        <td>{i.paymentMethod}</td>
                        <td>{i.user.name}</td>
                        <td>
                            <Link to={`/order/${i._id}`}>
                                <AiFillEye/>
                            </Link>
                           {
                            i.orderStats==="Delivered"?null:
                            <button style={{marginLeft:"4px"}} onClick={()=>statechangeHandler(i._id)}>
                            <GiArmoredBoomerang/>
                        </button>
                           }
                        </td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
            ):<Loader/>
        }

    </section>
  )
}

export default Orders