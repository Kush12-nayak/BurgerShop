import {configureStore} from "@reduxjs/toolkit"
import {authreducer} from "./reducers/userReducer"
import {cartReducer, orderReducer} from "./reducers/cartReducer"
import {ordersReducer} from "./reducers/orderReducer"
import {adminReducer} from "./reducers/adminReducer"

const store=configureStore({
    reducer:{
        auth:authreducer,
        cart:cartReducer,
        order:orderReducer,
        orders:ordersReducer,
        admin:adminReducer,
    },
})

export default store;

export const server="https://burgershopserver.onrender.com/api/v1"
