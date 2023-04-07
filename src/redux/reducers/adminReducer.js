import {createReducer} from "@reduxjs/toolkit"

export const adminReducer=createReducer({
    order:[],
    
    users:[]
},{

    getdashboardStatRequest:(state)=>{
        state.loading=true;
    },
    getdashboardStatSuccess:(state,action)=>{
        state.loading=false;
        state.userCount=action.payload.userCount;
        state.ordersCount=action.payload.ordersCount;
        state.totalincome=action.payload.totalincome;
    },
    getdashboardStatFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },

    getAdminUserRequest:(state)=>{
        state.loading=true
    },
    getAdminUserSuccess:(state,action)=>{
        state.loading=false;
        state.users=action.payload;
    },
    getAdminUserFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    getAdminorderRequest:(state)=>{
        state.loading=true;
    },
    getAdminorderSuccess:(state,action)=>{
        state.loading=false;
        state.order=action.payload;
    },
    getAdminorderFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    processOrderRequest:(state)=>{
        state.loading=true;
    },
    processOrderSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    processOrderFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
    clearError:(state)=>{
        state.error=null;
    }



})

