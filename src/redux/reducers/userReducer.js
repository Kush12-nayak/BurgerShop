import {createReducer} from "@reduxjs/toolkit"


export const authreducer=createReducer({},{

    loadUserrequest:(state)=>{
        state.loading=true;
    },

    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthincated=true;
        state.user=action.payload;
    },

    loadUserFail:(state,action)=>{
        state.loading=false;
        state.isAuthincated=false;
        state.error=action.payload;
    },
    clearError:(state,action)=>{
        state.error=null;
    },
    clearmessage:(state,action)=>{
        state.message=null;
    },

    logoutUserrequest:(state)=>{
        state.loading=true;
    },

    logoutUserSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthincated=false;
        state.message=action.payload;
        state.user=null;
    },

    logoutUserFail:(state,action)=>{
        state.loading=false;
        state.isAuthincated=true;
        state.error=action.payload;
    },
})