import React from 'react'
import styled from "@emotion/styled"
import {stack as Menu} from "react-burger-menu"
import { NavLink } from 'react-router-dom'






const Navbar = () => {
  return (
    <>
    <Menu width={100}>
      <NavLink to={"/inventarios"}>Inventarios</NavLink>
    </Menu>
  
    </>
  )
}

export default Navbar