import React from 'react'
import {motion} from "framer-motion"
import kush from "../../assests/kp-modified.png"

const Founder = () => {

    const options={
        initial:{
          x:"-100%",
          opacity:0
        },
         whileInView:{
          x:0,
        opacity:1}
      }

  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={kush} alt="" height={200} width={200}/>
            <h3>kush Nayak</h3>
            <p>Hey, Everyone I am   Kush Nayak, the founder of MBA Burger Wala.
                Our aim is to create the most tasty burger on planet.</p>
        </motion.div>
    </section>
  )
}

export default Founder