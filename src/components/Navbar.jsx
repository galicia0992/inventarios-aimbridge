import React from 'react'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import inventarioIcon from "../assets/inventory.png"
import directorioIcon from "../assets/directory.png"
import AimbridgeLogo from "../assets/Aimbridge_LATAM_Color.png"
import AColor from "../assets/A2.png"

const BotonCollapse = styled.button`
background-color: white;
border: none;
cursor: pointer;
&:hover{
  background-color: aliceblue;
}
`
const IconoInventario = styled.img`
  width: 20px;
`
const Logo = styled.img`
  width: 200px;
  margin-left: 27px;
  background-repeat: no-repeat;
`
const ALogo = styled.img`
width: 90px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Navbar = () => {
  const [expand, setExpand] = useState(true)
  const { collapseSidebar } = useProSidebar();
  const expandCollapse = () => {
    expand == false ? setExpand(true):setExpand(false)
  }

  return (
    <>
      <Wrapper style={{ display: "flex", height: "100%"}} >
        <Sidebar collapsedWidth="70px">
          <Menu rootStyles={{
          backgroundColor:"#FFFF"
        }}>
          {
            expand == true ? (<Logo src={AimbridgeLogo}></Logo>):(<ALogo src={AColor}></ALogo>)
          }
            <SubMenu  label="Inventarios" icon={<IconoInventario src={inventarioIcon}></IconoInventario>}>
              <MenuItem component={<NavLink to={"/alta"}></NavLink>}>
                {" "}
                Alta{" "}
              </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <SubMenu label="Directorio" icon={<IconoInventario src={directorioIcon}></IconoInventario>}>
              <MenuItem component={<NavLink to={"/sistemas"}></NavLink>}>Sistemas</MenuItem>
              <MenuItem component={<NavLink to={"/contabilidad"}></NavLink>}>Contabilidad</MenuItem>
              <MenuItem component={<NavLink to={"/operaciones"}></NavLink>}>Operaciones</MenuItem>
              <MenuItem component={<NavLink to={"/rh"}></NavLink>}>Recursos Humanos</MenuItem>
              <MenuItem component={<NavLink to={"/pt"}></NavLink>}>Prisma Tech</MenuItem>
            </SubMenu>
            <SubMenu  label="Bitlocker" icon={<IconoInventario src={inventarioIcon}></IconoInventario>}>
              <MenuItem component={<NavLink to={"/bitlocker"}></NavLink>}>
                {" "}
                Alta{" "}
              </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <SubMenu  label="Inventarios" icon={<IconoInventario src={inventarioIcon}></IconoInventario>}>
              <MenuItem component={<NavLink to={"/inventarios"}></NavLink>}>
                {" "}
                Inventarios{" "}
              </MenuItem>
              <MenuItem> Line charts </MenuItem>
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
                {expand ? "chevron_left" : "chevron_right"}
              </span>
            }
          </BotonCollapse>
        </main>
      </Wrapper>
    </>
  );
}

export default Navbar;