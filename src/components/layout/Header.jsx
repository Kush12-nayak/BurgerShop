import React from 'react'

import {Link} from "react-router-dom"
import {IoFastFood} from "react-icons/io5"
import {FiShoppingCart,FiLogIn} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import {IoIosAlert} from "react-icons/io"

import {motion} from "framer-motion"
import { useSelector } from 'react-redux'

const Header = ({}) => {

    const {cartitems}=useSelector(state=>state.cart)
    const {isAuthincated}=useSelector(state=>state.auth)

  return (
    <nav>
        <motion.div
        initial={{x:"-100%"}} whileInView={{x:0}}
        >
            <IoFastFood/>
        </motion.div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">
                <FiShoppingCart/>
                {(cartitems.length > 0 && isAuthincated===true)&&(<IoIosAlert className='alert'/>)}
            </Link>
            <Link to={isAuthincated?"/me":"/login"}>
                {isAuthincated?<FaUser/>:<FiLogIn/>}
            </Link>
        </div>
    </nav>
  )
}

export default Header;
