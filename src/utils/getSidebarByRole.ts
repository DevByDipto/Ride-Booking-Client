import { role } from '@/constants/role';
import { adminSidebarItems } from '@/router/adminSidebarItems';
import { driverSidebarItems } from '@/router/driverSidebaritems';
import { riderSidebarItems } from '@/router/riderSidebarItems';
import type { TRole } from '@/types';

const getSidebarByRole = (userRole:TRole) => { // ai function ta to ami akbar er beshi duibar ar kothaw use korbo nah tahole aita utils e keno rakhlam ?
  switch (userRole) {
    case (role.ADMIN):
       return [...adminSidebarItems]
    case (role.DRIVER):
       return [...driverSidebarItems]
    case (role.RIDER):
       return [...riderSidebarItems]
    default:
        return []
  }
}

export default getSidebarByRole