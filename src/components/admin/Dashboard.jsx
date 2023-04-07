import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {Doughnut} from "react-chartjs-2"
import {Chart as chartjs,Tooltip,ArcElement,Legend} from "chart.js"
import {useDispatch,useSelector} from "react-redux"
import Loader from "./../layout/Loader.jsx"
import {getAdminStats} from "../../redux/actions/admin"


chartjs.register(Tooltip,ArcElement,Legend)

const Box=({title,value})=>(
    <div>
        <h3>
        {title==="Income" && "₹"}
            {value}</h3>
        <p>{title}</p>
    </div>

)

const Dashboard = () => {

    const dispatch=useDispatch()

    const {loading,userCount,ordersCount,totalincome}=useSelector(state=>state.admin)

    useEffect(() => {
     dispatch(getAdminStats())
    }, [dispatch])
    

    const data={
      
        labels:["Preparing","Out-For-Delivery","Delivered"],
        datasets:[
            {
                label:"# of orders",
        data:ordersCount?[ordersCount.prepaing,ordersCount.outfordeleivery,ordersCount.deleivered]:[0,0,0],
        backgroundColor:["rgb(227, 196, 192)","rgb(208, 194, 246)","rgb(219, 247, 209)"],
        borderColor:["red","blue","green"],
        borderWidth:1,
            }
        ]
    };

  return (
    <section className="dashboard">
       {
        loading === false?
        <main>
        <article>
            <Box title="Users" value={userCount}/>
            <Box title="Orders" value={ordersCount.total}/>
            <Box title="Income" value={totalincome}/>
        </article>
        <section>
            <div>
                <Link to="/admin/orders">View Orders</Link>
                <Link to="/admin/users">View Users</Link>
            </div>
            <aside>
                <Doughnut data={data}/>
            </aside>
        </section>
    </main>:<Loader/>
       }
    </section>
  )
}

export default Dashboard