import React from 'react'
import {MdError} from "react-icons/md"
import {Link} from "react-router-dom"
import {IoMdHome} from "react-icons/io"

const NotFound = () => {
  return (
    <section className='notfound'>
        <main>
            <div>
                <MdError/>
                <h1>404</h1>
            </div>
            <p>Page Not Found,Click Below for HomePage</p>
            <Link to="/">Home Page<IoMdHome/></Link>
        </main>
    </section>
  )
}

export default NotFound