import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiFillYoutube} from "react-icons/ai"

const Footer = () => {
  return (
    <main className='footer'>
        <div>
            <h2>Burger Shop</h2>
            <p>We Provide you best burge's</p>
            <strong>All rights reserved by @kushnayak</strong>
        </div>
        <aside>
          <h3>Follow us</h3>
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiFillYoutube/>
        </aside>
    </main>

  )
}

export default Footer