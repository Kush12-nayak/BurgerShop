import React,{useState} from 'react'
import Menucard from "./Menucard"
import {motion} from "framer-motion"
import burger1 from "../../assests/burger1.png"
import burger2 from "../../assests/burger2.png"
import burger3 from "../../assests/burger3.png"
import burger4 from "../../assests/blackbunnew.png"
import burger5 from "../../assests/bgonion.png"
import burger6 from "../../assests/pannerbg.png"

import "../../styles/color.scss"

import french from "../../assests/french-removebg-preview.png"
import puf from "../../assests/pizza_puff-removebg-preview.png"
import taco from "../../assests/tacos-removebg-preview.png"

import cola from "../../assests/cola-removebg-preview.png"
import smoothie from "../../assests/smoothie-removebg-preview.png"
import shake from "../../assests/chocolate-removebg-preview.png"

import toast from "react-hot-toast"
import {useDispatch} from "react-redux"



const Menu = () => {

  const options={
    initial:{
      x:"-100%",
      opacity:0
    },
     whileInView:{
      x:"0",
    opacity:1}
  }

  

  const burgerlist=[{
     imgSrc:burger1,
     price:300,
     title:'Cheese Burger',
     id:"jsdbjlb"
  }
  ,{
    imgSrc:burger2,
    price:200,
    title:'Veg Cheese Burger',
    id:"bddvbl"
  },{
    imgSrc:burger3,
    price:400,
    title:'Aloo tiki Burger',
    id:"jlvdb"
  },{
    imgSrc:burger4,
    price:320,
    title:'Black Bun Burger',
    id:"jlvdbfoscjs"
  },{
    imgSrc:burger5,
    price:140,
    title:'Onion Ring Burger',
    id:"jlvdlkcjs"
  },{
    imgSrc:burger6,
    price:180,
    title:'Panner Burger',
    id:"jlvdbfonmkpjs"
  }
  ]

  const snacks=[{
     imgSrc:french,
     price:100,
     title:'French Fries',
     id:"jlvdvmb"
  }
  ,{
    imgSrc:puf,
    price:70,
    title:'Puff Pizza',
    id:"hiefdk"
  },{
    imgSrc:taco,
    price:230,
    title:'Vegetable Taco',
    id:"owdibddn"
  }]

  const beverages=[{
     imgSrc:cola,
     price:60,
     title:'Cola',
     id:"kwjmd"
  }
  ,{
    imgSrc:smoothie,
    price:120,
    title:'Smoothie',
    id:"ajla"
  },{
    imgSrc:shake,
    price:180,
    title:'Chocolate Shake',
    id:"iefbdl"
  }]

  const dispach=useDispatch()
  
  const addtocart=(options)=>{
  
    dispach({type:"addtoCart",payload:options});
  
    dispach({
      type:"calculate"
  })

  
}

  const myfunction=(active,de1,de2,btn)=> {
  
    
    let x=document.querySelector(`.${active}`)
    let y=document.querySelector(`.${de1}`)
    let z=document.querySelector(`.${de2}`)

    let bt1=document.querySelector(`.${btn}`)
    

    x.style.display="flex";
    y.style.display="none"
    z.style.display="none"

  }

  const btncolor=(button,de1,de2)=>{

    let btn=document.querySelector(`.${button}`)
    let debt1=document.querySelector(`.${de1}`)
    let debt2=document.querySelector(`.${de2}`)

    
    btn.style.backgroundColor = 'rgb(190, 118, 146)'; 
    debt1.style.backgroundColor='rgb(156,0,60)';
    debt1.style.color="white"
    debt2.style.backgroundColor='rgb(156,0,60)';
    debt2.style.color="white"
  }

  var burger

  const [show,setshow]=useState(true)


  return (
    <section id='menu'>
      <h1>MENU</h1>
      <div className='btn'>
        <button className='btburger' onClick={() => {myfunction('burger','snacks','beverages','btburger',btncolor('btburger','btsnack','btbev'))}}>Burger</button>
        <button className='btsnack' onClick={() => {myfunction('snacks','burger','beverages','btsnack',btncolor('btsnack','btburger','btbev'))}}>Snacks</button>
        <button className='btbev' onClick={() => {myfunction('beverages','snacks','burger','btbev',btncolor('btbev','btburger','btsnack'))}}>Beverages</button>
      </div>
     <div className='burger'>
     {
        burgerlist.map((i)=>(
          <Menucard
          key={i.id}
          id={i.id}
          imgSrc={i.imgSrc}
          price={i.price}
          title={i.title}
          handler={addtocart} />
        ))
      
      }
      </div>
      <div className='snacks' style={{
        display:"none"
      }}>
      {
        snacks.map((i)=>(
          <Menucard
          key={i.id}
          id={i.id}
          imgSrc={i.imgSrc}
          price={i.price}
          title={i.title}
          handler={addtocart}/>
        ))
      }
      </div>
      <div className='beverages'style={{
        display:"none"
      }}>
      {
      beverages.map((i)=>(
          <Menucard
          key={i.id}
          id={i.id}
          imgSrc={i.imgSrc}
          price={i.price}
          title={i.title}
          handler={addtocart}/>
        ))
      }
      </div>
      
     {
      
     }
    </section>
  )
}

// const Menucard = ({id,imgSrc,price,title,handler}) => (

// <motion.div >
// <div className='menucard'>
//   <div>

//   </div>
//   <main>
//     <img src={imgSrc} alt="" />
//     <h5>₹{price}</h5>
//     <p>{title}</p>
//     <button 
//     onClick={()=>handler({title,price,id,quantity:1,imgSrc}) }>Add To Cart</button>
//   </main>
// </div>
// </motion.div>

 
// );


export default Menu
