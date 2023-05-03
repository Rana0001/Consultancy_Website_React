import React from "react";
import logo from "../../assets/images/brand_logo.png";
import { Navbar,Button } from "flowbite-react";
import "./header.css";
const Header = ()=>{
    return(
        <>

<Navbar
  fluid={true}
  rounded={true}
  className="shadow-lg !p-6 "
  id='home'
>
  <Navbar.Brand href="/">
    <img
      src={logo}
      className="md:ml-6 h-6 sm:h-9 self-center"
      alt="Logo"
    />
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button className="!bg-[#289AE2] !rounded-full">Login / Signup</Button>
    <Navbar.Toggle />

  </div>

  <Navbar.Collapse className=" font-semibold dark:text-white !text-center dark:bg-slate-800">
    <Navbar.Link
      href="/"
      className="navbar-item !pt-0"
    >
    
      Home
    </Navbar.Link>
    <Navbar.Link href="/#aboutUs" className="navbar-item">
      About Us
    </Navbar.Link>
    <Navbar.Link href="/#oursevices" className="navbar-item">
      Our Services
    </Navbar.Link>
    <Navbar.Link href="/#ourteam" className="navbar-item">
      Our Teams
    </Navbar.Link>
    <Navbar.Link href="/#contactus" className="navbar-item">
      Contact Us
    </Navbar.Link>
    
  </Navbar.Collapse>
</Navbar>


        </>
    )
}

export default Header;