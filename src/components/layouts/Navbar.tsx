import { Home,
  Info,
  ListChecks,
  Mail,
  HelpCircle, ZapIcon } from "lucide-react";

import Logo from "../ui/logo";
import UserMenu from "../ui/user-menu";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router";
import Loading from "../shared/Loading";
import { role } from "@/constants/role";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

// Navigation links array

// const handleLogout =>{

// }

export default function Navbar() {
  const { data: user, isLoading } = useUserInfoQuery();
  //console.log(error);
  
  //console.log("user", user);
  if (isLoading) {
    return <Loading />;
  }
  const navigationLinks = [
      { href: "/", label: "Home", icon: Home, role: "public" },
  { href: "/about-us", label: "About", icon: Info, role: "public" },
  { href: "/features", label: "Features", icon: ListChecks, role: "public" },
  { href: "/contact", label: "Contact", icon: Mail, role: "public" },
  { href: "/faq", label: "FAQ", icon: HelpCircle, role: "public" },
   
    {
      href: `/dashboard/admin`,
      label: "dashboard",
      icon: ZapIcon,
      role: role.ADMIN,
    },
    {
      href: `/dashboard/rider`,
      label: "dashboard",
      icon: ZapIcon,
      role: role.RIDER,
    },
    {
      href: `/dashboard/driver`,
      label: "dashboard",
      icon: ZapIcon,
      role: role.DRIVER,
    },
  ];

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon;
                    if (link.role === "public") {
                      return (
                        // <NavigationMenuItem key={index} className="w-full">
                        //   <NavigationMenuLink
                           
                        //     href={link.href}
                        //     className="flex-row items-center gap-2 py-1.5"
                            
                        //   >
                        //     <Link  to={link.href}></Link>
                        //     <Icon
                        //       size={16}
                        //       className="text-muted-foreground/80"
                        //       aria-hidden="true"
                        //     />
                        //     <span>{link.label}</span>
                        //   </NavigationMenuLink>
                        // </NavigationMenuItem>
                        <NavigationMenuItem key={index} className="w-full">
  <Link
    to={link.href}
    className="flex flex-row items-center gap-2 py-1.5 flex"
  >
    <Icon
      size={16}
      className="text-muted-foreground/80"
      aria-hidden="true"
    />
    <span>{link.label}</span>
  </Link>
</NavigationMenuItem>
                      );
                    }
                    if (link.role === user?.data.role) {
                      return (
                        // <NavigationMenuItem key={index} className="w-full">
                        //   <NavigationMenuLink
                           
                        //     href={link.href}
                        //     className="flex-row items-center gap-2 py-1.5"
                            
                        //   >
                        //     <Link to={link.href}></Link>
                        //     <Icon
                        //       size={16}
                        //       className="text-muted-foreground/80"
                        //       aria-hidden="true"
                        //     />
                        //     <span>{link.label}</span>
                        //   </NavigationMenuLink>
                        // </NavigationMenuItem>
                        <NavigationMenuItem key={index} className="w-full">
  <Link
    to={link.href}
    className="flex flex-row items-center gap-2 py-1.5 flex"
  >
    <Icon
      size={16}
      className="text-muted-foreground/80"
      aria-hidden="true"
    />
    <span>{link.label}</span>
  </Link>
</NavigationMenuItem>
                      );
                    }
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-5">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon;
                if (link.role === "public") {
                return (
                  // <NavigationMenuItem key={index}>
                  //   <NavigationMenuLink
                      
                  //     href={link.href}
                  //     className="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium"
                  //   >
                  //     <Link to={link.href}></Link>
                  //     <Icon
                  //       size={16}
                  //       className="text-muted-foreground/80"
                  //       aria-hidden="true"
                  //     />
                  //     <span>{link.label}</span>
                  //   </NavigationMenuLink>
                  // </NavigationMenuItem>
                  <NavigationMenuItem key={index} className="w-full">
  <Link
    to={link.href}
     className="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium flex"
  >
    <Icon
      size={16}
       className="text-muted-foreground/80"
                        aria-hidden="true"
    />
    <span>{link.label}</span>
  </Link>
</NavigationMenuItem>
                );}
                if (link.role === user?.data.role) {
                   return (
                  // <NavigationMenuItem key={index}>
                  //   <NavigationMenuLink
                       
                  //     href={link.href}
                  //     className="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium"
                  //   >
                  //     <Link to={link.href}></Link>
                  //     <Icon
                  //       size={16}
                  //       className="text-muted-foreground/80"
                  //       aria-hidden="true"
                  //     />
                  //     <span>{link.label}</span>
                  //   </NavigationMenuLink>
                  // </NavigationMenuItem>
                   <Link
    to={link.href}
     className="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium flex"
  >
    <Icon
      size={16}
       className="text-muted-foreground/80"
                        aria-hidden="true"
    />
    <span>{link.label}</span>
  </Link>
                );}
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Middle side: Logo */}
        <div className="flex items-center">
          <a href="#" className="text-primary hover:text-primary/90">
            <Logo />
          </a>
        </div>

        {/* Right side: Actions */}
        <div className="flex flex-1 items-center justify-end gap-4">
          {/* User menu */}
          {user ? (
            <> 
            <h2>{user?.data?.name}</h2>
            <UserMenu name={user?.data?.name} />
            </>
          ) : (
            <>
              <Button>
                {" "}
                <Link to="login">Login</Link>
              </Button>
              <Button>
                {" "}
                <Link to="register">Register</Link>
              </Button>
            </>
          )}

          {/* Upgrade button */}
          {/* <Button size="sm" className="text-sm sm:aspect-square">
            <SparklesIcon
              className="opacity-60 sm:-ms-1"
              size={16}
              aria-hidden="true"
            />
            <span className="sm:sr-only">Upgrade</span>
          </Button> */}
        </div>
      </div>
    </header>
  );
}