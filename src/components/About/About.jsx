import React, { useEffect, useState } from 'react'
import burger from "../../assests/bgnew.jpg"
import sig from "../../assests/sig.jpeg"
import burgervid from "../../assests/burgervid.mp4"

import ch1 from "../../assests/ch1.jpg"
import ch2 from "../../assests/chef3.jpg"
import ch3 from "../../assests/chef2.jpg"

import {GoThumbsup} from "react-icons/go"
import {GiHamburger} from "react-icons/gi"
import {HiHome} from "react-icons/hi"

const About = () => {


function Experiance() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if(count<15){
        setCount((count) => count + 1);
      }
    }, 100);
  });

  return count;
}

function Menuvar() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if(count<30){
        setCount((count) => count + 1);
      }
    }, 100);
  });

  return count;
}




  return (
   <section id='about'>
    <div className="top">
    <h2>About Us</h2>
        <p>At  Burger Shop, it is just not about food but we strive to give you a memorable 
            experience with loads of smiles over gorgeous food. With comfortable and youthful
            ambience.</p>
            
    </div>
    <div className="middle">
      <div className="img">
      <img src={burger} alt="" />
      </div>
      <div>
      <h3>GOOD FOOD FOR YOUR ALL DAY GOOD MOOD</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores esse nostrum quasi voluptate porro? Pariatur ad suscipit delectus inventore non? Adipisci deserunt libero culpa non modi, odit perferendis dolore</p>
        <img src={sig} alt="" />
        <em>Our CEO, Taylor Swift</em>
      </div>
    </div>
    <div className="exp">
      <div>
        <GoThumbsup/>
          <p className='ex'>{Experiance()}+</p>
          <strong>Year Experience</strong>
      </div>
      <div>
        <GiHamburger/>
          <p className='menuof'>{Menuvar()}+</p>
          <strong>Menu Variant</strong>
      </div>
      <div>
        <HiHome/>
          <p className='branch'>{Experiance()+5}+</p>
          <strong>Restaurant Branch</strong>
      </div>
    </div>
    <div className='vid'>
      <h2>We Serve You The Best Burges's</h2>
    <video loop muted autoPlay>
	      <source src={burgervid} type="video/mp4"/>
	</video>

    </div>
    <div className='chef'>
          <h2>Our Best Chef's</h2>
          <div>
          <img src={ch1} alt="" />
          <img src={ch2} alt="" />
          <img src={ch3} alt="" />
          </div>
    </div>
   </section>
  
   
  )

 
}


export default About