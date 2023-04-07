import React from 'react'
import {motion} from "framer-motion"

const Menucard = ({id,imgSrc,price,title,handler}) => {

  const options={
    initial:{
      x:"-100%",
      opacity:0
    },
     whileInView:{
      x:"0",
    opacity:1}
  }

  let quantity=1;

  return (
    <motion.div className='menucard' {...options}>
  <div>

  </div>
  <main>
    <img src={imgSrc} alt="" />
    <h5>₹{price}</h5>
    <p>{title}</p>
    <button 
    onClick={()=>handler({title,price,id,quantity:1,imgSrc}) }>Add To Cart</button>
  </main>
    </motion.div>
  )
}

export default Menucard