import React from 'react'
import {IoFastFood} from "react-icons/io5"
import {motion} from "framer-motion"



const Loader = () => {

  

  return (
    <section className="loader">
        <IoFastFood/>
       <div>
        <p>loading...</p>
       </div>
    </section>
  )
}

export default Loader