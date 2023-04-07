import {createReducer} from "@reduxjs/toolkit"

export const ordersReducer=createReducer({
    orders:[]
},{

    getMyOrderRequest:(state)=>{
        state.loading=true;
    },
    getMyOrderSuccess:(state,action)=>{
        state.loading=false;
        state.orders=action.payload;
    },
    getMyOrderFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },

    getOrderDetailsRequest:(state)=>{
        state.loading=true;
    },
    getOrderDetailsSuccess:(state,action)=>{
        state.loading=false;
        state.order=action.payload;
    },
    getOrderDetailsFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },

    clearError:(state,action)=>{
        state.error=null;
    },
    clearmessage:(state,action)=>{
        state.message=null;
    },
})