
import { Outlet } from 'react-router'
import Navnbar from './Navbar'
import { Footer2 } from './Footer'
const CommonLayout = () => {
  return (
    <div>
       <Navnbar/>
        <Outlet/>
        <Footer2/>
    </div>
  )
}

export default CommonLayout