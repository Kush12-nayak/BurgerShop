import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Founder from "./Founder"
import Menu from "./Menu"
import { useSelector } from "react-redux"
import Footer from "./Footer"

const Home = () => {

  // const {user}=useSelector(state=>state.auth)

  const options = {
    initial: {
      x: "-100%",
      opacity: 0
    },
    whileInView: {
      x: "0",
      opacity: 1
    }
  }

  // useEffect(() => {
  //   localStorage.setItem("userdetails",JSON.stringify(user._id))
  // }, [user._id])


  return (
    <>
      <section className='home'>
        <div>
          <motion.h1 {...options}>BURGER SHOP</motion.h1>
          <motion.p {...options} transition={{
            delay: 0.2
          }}>We Provide Best Burger's</motion.p>
        </div>
        <a href="#menu">
          Explore Menu
        </a>
      </section>
      <Founder />
      <Menu />

    </>

  )
}

export default Home