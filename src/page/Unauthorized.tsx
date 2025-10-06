import React from 'react'
import { Link } from 'react-router'

const Unauthorized = () => {
  return (
    <div>
        <h1>Unauthorized</h1>
         <Link to="/">home</Link>
    </div>
  )
}

export default Unauthorized