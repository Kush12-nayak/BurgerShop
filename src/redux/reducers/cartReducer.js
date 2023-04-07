import {createReducer} from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"



const initialstate={
    cartitems:localStorage.getItem("cartitems")?JSON.parse(localStorage.getItem("cartitems")):[],
    subtotal:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).subtotal:0,
    Tax:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).Tax:0,
    shippingCharges:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).shippingCharges:0,
    Total:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).Total:0,
    shippingInfo:localStorage.getItem("shippingInfo")?JSON.parse(localStorage.getItem("shippingInfo")):{},
   
}

export const cartReducer=createReducer(initialstate,{


    addtoCart:(state,action)=>{
        const item=action.payload;

        const isItemexist=state.cartitems.find((i)=> i.id === item.id )

        if(isItemexist){
            // state.cartitems.forEach((i)=>{
            //     if(i.id===item.id ){
            //         i.quantity+=1
            //     }
            // })
            toast.error("Item already in cart")
        }
        else{
            state.cartitems.push(item);
            toast.success("addded to cart")
        }
    },

    increament:(state,action)=>{
        const item=state.cartitems.find((i)=> i.id === action.payload )
            state.cartitems.forEach((i)=>{
                if(i.id === item.id ){
                    i.quantity+=1
                }
            })
    },

    decreament:(state,action)=>{

        const item=state.cartitems.find((i)=> i.id === action.payload )
        if(item.quantity>=1){
            state.cartitems.forEach((i)=>{
                if(i.id === item.id ){
                    i.quantity-=1
                }
            })
        }

        if(item.quantity===0){
            state.cartitems=state.cartitems.filter((i)=>i.id !== action.payload)
        }
        
    },

    deletfromcart:(state,action)=>{
        
        state.cartitems=state.cartitems.filter((i)=>i.id !== action.payload)
        
    },

    calculate: (state) => {
        let sum = 0;
        state.cartitems.forEach((i) => {
            sum = sum + (i.quantity * i.price);
        })
        state.shippingCharges = sum > 1000 ? 0 : 100;
        if (sum === 0) {
            state.shippingCharges = 0;
        }
        state.subtotal = sum;
        state.Tax = Number((sum * 0.18).toFixed());
        state.Total = state. shippingCharges + state.subtotal + state.Tax;
    },

    emptyState:(state)=>{
    
        state.cartitems=state.cartitems.filter((i)=>i.id === "xyz")

        state.subtotal=0;
        state.shippingCharges=0;
        state.Tax=0;
        state.Total=0;
    },

    addshippingInfo:(state,action)=>{

        state.shippingInfo={
            hNo:action.payload.hNo,
            city:action.payload.city,
            state:action.payload.state,
            country:action.payload.country,
            pinCode:action.payload.pinCode,
            phNo:action.payload.phNo
        }
    }

})

export const orderReducer=createReducer({},{

    createOrderRequest:(state)=>{
        state.loading=true;
    },
    createOrderSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload
    },
    createOrderFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    paymentVerificationRequest:(state)=>{
        state.loading=true;
    },
    paymentVerificationSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload
    },
    paymentVerificationFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },


    clearMessage:(state)=>{
        state.message=null;
    },
    clearError:(state)=>{
        state.error=null;
    }

})