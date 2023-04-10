import React,{useState,useEffect} from 'react'
import {Country,State} from "country-state-city"
import toast from "react-hot-toast"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

const Shipping = () => {

  const dispach=useDispatch();
  const navigate=useNavigate()

  const {shippingInfo}=useSelector(state=>state.cart)

  const [hNo,sethNo]=useState(shippingInfo.hNo);
  const [city,setcity]=useState(shippingInfo.city);
  const [country,setcountry]=useState(shippingInfo.country);
  const [state,setstate]=useState(shippingInfo.state);
  const [pinCode,setpinCode]=useState(shippingInfo.pinCode);
  const [phNo,setphNo]=useState(shippingInfo.phNo);

  const submitHandler=(e)=>{
    e.preventDefault();
    var pin = document.getElementById('pin').value;
    var no=document.getElementById('no').value
    let temp=0;

    for(let i=0;i<pin.length;i++){
      if(pin.length===6){
  
       if(!(pin[i] >=0 || pin[i] <=9)){
        toast.error("Enter pincode corectly")
        return false;
      }
      else{
        temp+=1;
      }
    }
    else{
      toast.error("Enter pincode corectly")
        return false
    }
    }

    for(let i=0;i<no.length;i++){
      if(no.length===10){
        if(no[i] >= 0 || no[i]<=9){
            temp+=1;
        }
        }
      else{
        toast.error("Enter Phone-No corectly")
        return false
        
      }
    }

    if(temp>1){

        dispach({
          type:"addshippingInfo",
          payload:{
            hNo,
            city,
            state,
            country,
            pinCode,
            phNo
          }
        })

        localStorage.setItem("shippingInfo",JSON.stringify({
          hNo,
          city,
          country,
          state,
          pinCode,
          phNo
        }))

       

        navigate("/confirmorder")
      
    }

  }
  

  return (
    <section className='shipping'>
      <main>
        <h1>Shipping Details</h1>
        <form action="" onSubmit={submitHandler}>
          <div>
            <label htmlFor="">Address</label>
            <input type="text"  placeholder='Enter House No' value={hNo} onChange={(e)=> sethNo(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" placeholder='Enter City'  value={city} onChange={(e)=> setcity(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <select id='country'
             value={country} 
             onChange={(e)=> setcountry(e.target.value)}
             required
            >
            <option value="">Country</option>
             {
              Country && Country.getAllCountries().map((i)=>(
                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
              ))
             }
            </select>
          </div>
          {
            country &&(
              <div>
            <label htmlFor="">State</label>
        
           <select
              value={state} onChange={(e)=> setstate(e.target.value)} required
             >
               <option value="">State</option>
               {
                 State && State.getStatesOfCountry(country).map((i)=>(
                   <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                 ))
               }
             </select>
           
          </div>
            )
          }
          <div>
            <label htmlFor="">Pincode</label>
            <input type="text" value={pinCode}  placeholder='Enter PinCode' id="pin" onChange={(e)=> setpinCode(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="">Phone No</label>
            <input type="text" id="no"   placeholder='Enter Phone No'  value={phNo} onChange={(e)=> setphNo(e.target.value)} required
            />
          </div>
          <button type='submit'  >Confirm Order</button>
        </form>
      </main>
    </section>
  )
}

export default Shipping
