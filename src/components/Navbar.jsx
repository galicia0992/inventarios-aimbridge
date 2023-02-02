import React from 'react'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import inventarioIcon from "../assets/inventory.png"
import directorioIcon from "../assets/directory.png"

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
const WrapperInventario = styled.div`
  display: flex;
  flex-direction: row;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Navbar = () => {
  const [expand, setExpand] = useState(false)
  const { collapseSidebar } = useProSidebar();
  const expandCollapse = () => {
    expand == false ? setExpand(true):setExpand(false)
  }

  const themes = {
    light: {
      sidebar: {
        backgroundColor: '#ffffff',
        color: '#607489',
      },
      menu: {
        menuContent: '#fbfcfd',
        icon: '#0098e5',
        hover: {
          backgroundColor: '#c5e4ff',
          color: '#44596e',
        },
        disabled: {
          color: '#9fb6cf',
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: '#0b2948',
        color: '#8ba1b7',
      },
      menu: {
        menuContent: '#082440',
        icon: '#59d0ff',
        hover: {
          backgroundColor: '#00458b',
          color: '#b6c8d9',
        },
        disabled: {
          color: '#3e5e7e',
        },
      },
    },
  };
  return (
    <>
      <Wrapper style={{ display: "flex", height: "100%"}} >
        <Sidebar collapsedWidth="75px">
          <Menu  rootStyles={{
          backgroundColor:"#FFFF"
        }}>
            <SubMenu  label="Inventarios" icon={<IconoInventario src={inventarioIcon}></IconoInventario>}>
              <MenuItem component={<NavLink to={"/inventarios"}></NavLink>}>
                {" "}
                Inventarios{" "}
              </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <SubMenu label="Directorio" icon={<IconoInventario src={directorioIcon}></IconoInventario>}>
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