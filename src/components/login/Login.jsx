import React from 'react'
import {FcGoogle} from "react-icons/fc"
import { server } from '../../redux/store'

const Login = () => {

  const loginhandler=()=>{

    window.open(`${server}/googlelogin`,"_self")
  }

  return (
    <section className='login'>
        <main>
            <button onClick={loginhandler}>Login With Google <FcGoogle/></button>
        </main>
    </section>
  )
}

export default Login