import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
const BotonCollapse = styled.button`
background-color: white;
border: none;
cursor: pointer;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Navbar = () => {
  const [expand, setExpand] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const { collapseSidebar } = useProSidebar();
  const expandCollapse = () => {
    expand == false ? setExpand(true):setExpand(false)
    console.log(expand)
  }
  return (
    <>
      <Wrapper style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <Menu>
            <SubMenu label="Inventarios">
              <MenuItem component={<NavLink to={"/inventarios"}></NavLink>}>
                {" "}
                Inventarios{" "}
              </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <SubMenu label="Directorio">
              <MenuItem component={<NavLink to={"/"}></NavLink>}>WEMTYV</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <main>
          <BotonCollapse onClick={() => collapseSidebar()}>
            {
              <span
                className="material-symbols-outlined"
                onClick={expandCollapse}
              >
                {!expand ? "chevron_left" : "chevron_right"}
              </span>
            }
          </BotonCollapse>
        </main>
      </Wrapper>
    </>
  );
}

export default Navbar;