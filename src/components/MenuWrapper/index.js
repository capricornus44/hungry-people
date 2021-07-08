import React from "react"

import { MenuSection, MenuContainer, MenuContent, MenuDescription, MenuTitle, MenuSubtitle } from "./MenuElements"
import { Line } from "../shared"
import MenuListNav from "./MenuListNav"
import MenuListContent from "./MenuListContent"

const MenuElements = () => {
  return (
    <>
      <MenuSection>
        <MenuContainer>
          <MenuContent>
            <MenuDescription>
              <MenuTitle>Delicious menu</MenuTitle>
              <Line />
              <MenuSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor
                magna.
              </MenuSubtitle>
            </MenuDescription>
            <MenuListNav />
            <MenuListContent />
          </MenuContent>
        </MenuContainer>
      </MenuSection>
    </>
  )
}

export default MenuElements
