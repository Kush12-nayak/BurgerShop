import axios from "axios"
import {server} from "../store"

export const getAdminStats=()=>async(dispatch)=>{
    try{

        dispatch({type:"getdashboardStatRequest"})

        const {data}=await axios.get(`${server}/admin/stats`,{
            withCredentials:true
        })

        dispatch({type:"getdashboardStatSuccess",payload:data })
    }
    catch(error){
        dispatch({type:"getOrderDetailsFail",payload:error.response.data.message})
    }

}

export const getAdminUser=()=>async(dispatch)=>{
    try{

        dispatch({type:"getAdminUserRequest"})

        const {data}=await axios.get(`${server}/admin/users`,{
            withCredentials:true
        })

        dispatch({type:"getAdminUserSuccess",payload:data.users })
    }
    catch(error){
        dispatch({type:"getAdminUserFail",payload:error.response.data.message})
    }
}

export const getAdminorders=()=>async(dispatch)=>{
    try{

        dispatch({type:"getAdminorderRequest"})

        const {data}=await axios.get(`${server}/admin/orders`,{
            withCredentials:true
        })

        dispatch({type:"getAdminorderSuccess",payload:data.order })
    }
    catch(error){
        dispatch({type:"getAdminorderFail",payload:error.response.data.message})
    }
}

export const getprocessOrder=(id)=>async(dispatch)=>{
    try{

        dispatch({type:"processOrderRequest"})

        const {data}=await axios.get(`${server}/admin/order/${id}`,{
            withCredentials:true
        })

        dispatch({type:"processOrderSuccess",payload:data.message })
    }
    catch(error){
        dispatch({type:" processOrderFail",payload:error.response.data.message})
    }
}