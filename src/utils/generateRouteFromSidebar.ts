/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ISidebar } from '@/types'



const generateRouteFromSidebar = (sidebar:ISidebar[]) => {
 return sidebar[0].items.map((item)=>{
    return {
        path: item?.url || "",
        Component: item?.Component
    }
 })
}

export default generateRouteFromSidebar







 