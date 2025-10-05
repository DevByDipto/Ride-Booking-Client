import React from 'react'
import { Outlet } from 'react-router'

const CommonLayout = () => {
  return (
    <div>
        nav
        <Outlet/>
        footer
    </div>
  )
}

export default CommonLayout