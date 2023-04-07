import React from 'react'
import { Link } from 'react-router-dom'
import kush from "../../assests/kp-modified.png"
import {MdDashboard} from "react-icons/md"
import {GiShoppingCart} from "react-icons/gi"
import {SlLogout} from "react-icons/sl"
import {useDispatch,useSelector} from "react-redux"
import { logoutUser } from '../../redux/actions/users'
import Loader from '../layout/Loader'

const Profile = () => {

    const dispatch=useDispatch()

    const logouthandler=()=>{
        dispatch(logoutUser())
    }

    const {loading,user}=useSelector((state)=>state.auth)
    console.log(user._id);

  return (
    <section className='profile'>

        {
            loading===false && user?<main>
            <img src={user.photo} alt="" />
            <h5>{user.name}</h5>
           {
            user.role==="admin" &&( <div>
                <Link to="/admin/dashboard"><MdDashboard/>DashBoard</Link>
            </div>)
           }
            <div className='order'>
                <Link to="/myorders"><GiShoppingCart/>Orders</Link>
            </div>
            <div>
                <button onClick={logouthandler} style={{
                    cursor:"pointer"
                }}><SlLogout/>LogOut</button>
            </div>
        </main>:<Loader/>
        }

    </section>
  )
}

export default Profile