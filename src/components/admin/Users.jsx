import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {AiFillEye} from "react-icons/ai"
import kush from "../../assests/kp-modified.png"
import {useDispatch,useSelector} from "react-redux"
import {getAdminUser} from "../../redux/actions/admin"
import Loader from '../layout/Loader'

const Users = () => {

    

    const dispatch=useDispatch();

    const {loading,users}=useSelector(state=>state.admin)

    useEffect(() => {
      
        dispatch(getAdminUser())
    }, [dispatch])
    

  return (
    <section className='tableclass'>
       {
        loading===false?(
        <main>
        <table>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Role</th>
                    <th>Since</th>
                </tr>
            </thead>
            <tbody>
                {
                    users && users.map(i=>(
                        <tr key={i}>
                    <td>#{i._id}</td>
                    <td>{i.name}</td>
                    <td>
                        <img src={i.photo} alt="" style={{
                            height:"40px",
                            width:"40px",
                            objectFit: "cover",

                        }} />
                    </td>
                    <td>{i.role}</td>
                    <td>{i.createdAt.split("T")[0]}</td>
                </tr>
                    ))
                }
            </tbody>
        </table>
    </main>):<Loader/>
       }
    </section>
  )
}

export default Users