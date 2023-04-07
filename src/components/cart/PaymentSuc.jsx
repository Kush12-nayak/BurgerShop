import React from 'react'
import {Link} from "react-router-dom"

const PaymentSuc = () => {
  return (
    <section className='paymentsuccess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order placed Successfully, You can Chack Your Order Status Below</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuc