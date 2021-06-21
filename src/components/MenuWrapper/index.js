import React from "react"

import {
  MenuSection,
  MenuContainer,
  MenuContent,
  MenuDescription,
  MenuTitle,
  MenuSubtitle,
  MenuLinks,
  MenuLink,
  MenuGrid,
  MenuCell,
} from "./MenuElements"
import { Line } from "../shared"

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
            <MenuLinks>
              <MenuLink to="/menu/soupe" activeClassName="active">
                Soupe
              </MenuLink>
              <MenuLink to="/menu/pizza" activeClassName="active">
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
            <MenuGrid>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
              <MenuCell>
                <strong>PIZZA QUATRO STAGIONI</strong>
                <p>Integer ullamcorper neque eu purus euismod</p>
                <span>55,68 USD</span>
              </MenuCell>
            </MenuGrid>
          </MenuContent>
        </MenuContainer>
      </MenuSection>
    </>
  )
}

export default MenuElements
