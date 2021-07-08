import React from "react"

import { MenuLinks, MenuLink } from "./MenuListNavStyled"

const MenuListNav = () => {
  return (
    <MenuLinks>
      <MenuLink to="/menu/soupe" activeClassName="active">
        Soupe
      </MenuLink>
      <MenuLink to="/menu" exact activeClassName="active">
        Pizza
      </MenuLink>
      <MenuLink to="/menu/pasta" activeClassName="active">
        Pasta
      </MenuLink>
      <MenuLink to="/menu/desert" activeClassName="active">
        Desert
      </MenuLink>
      <MenuLink to="/menu/wine" activeClassName="active">
        Wine
      </MenuLink>
      <MenuLink to="/menu/beer" activeClassName="active">
        Beer
      </MenuLink>
      <MenuLink to="/menu/drinks" activeClassName="active">
        Drinks
      </MenuLink>
    </MenuLinks>
  )
}

export default MenuListNav
