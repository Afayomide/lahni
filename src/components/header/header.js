import React, { useState } from "react"
import { useContext } from "react"

import "./header.css"
import {BsHouse,BsGenderFemale,BsGenderMale, BsCart} from "react-icons/bs"
import { Link } from "react-router-dom"
import Cap from "../../assets/cap.png"
import Trouser from "../../assets/trousers.png"
import Shirt from "../../assets/shirt.png"
import { CartContext } from "../context"
import { uniqueArray } from "../clothes/clothes"
import { ItemContext } from "../filecontext";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse
} from "@material-tailwind/react";
 
function Header() {
  const { cart } = useContext(CartContext);
  const {items} = useContext(ItemContext)

  const [style, SetStyle] = useState(null)
  const [style2, SetStyle2] = useState(null)

  
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="nav-buttons mt-2 mb-4 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <div>
        <Link className="header-link" to="/"><BsHouse className="nav-icons"/><p>Home</p></Link>
        </div>

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <div>  
        <Link className="header-link" to="/shirt">
        <img src={Shirt} className="nav-icons"/>
        <p>Shirts</p>
        </Link>
        </div>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
          <div>
        <Link className="header-link" to="/trouser">
        <img src={Trouser} className="nav-icons"/>
        <p>Trousers</p>
        </Link>
        </div>
      </Typography>

    

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
    <div>
        <Link className="header-link" to="/cap">
        <img src={Cap} className="nav-icons"/>
        <p>Caps</p>
        </Link>
        </div>
      </Typography> 
    </ul>
  );

  const navlistmobile = (
    <ul className="nav-buttons mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <div>
        <Link className="header-link" to="/"><BsHouse className="nav-icons"/><p>Home</p></Link>
        </div>

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <div>  
        <Link className="header-link" to="/shirt">
        <img src={Shirt} className="nav-icons"/>
        <p>Shirts</p>
        </Link>
        </div>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
          <div>
        <Link className="header-link" to="/trouser">
        <img src={Trouser} className="nav-icons"/>
        <p>Trousers</p>
        </Link>
        </div>
      </Typography>

    

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
    <div>
        <Link className="header-link" to="/cap">
        <img src={Cap} className="nav-icons"/>
        <p>Caps</p>
        </Link>
        </div>
      </Typography> 
    </ul>
  );
 
  return (
    <Navbar className="fixed top-0 bg-dark mx-auto  px-4 py-2 lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        > <IconButton
          variant="text"
          className=" iconbutton ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
<Link className="lahni" to="/">LÁHNÍ</Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
   
        <div className="button-cart">
        <Link className="cart-icon" to="/cart"><BsCart/><small>{items.length}</small></Link>

       
      </div>
      </div>
      <Collapse open={openNav}>
        <div>
          {navlistmobile}
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header







