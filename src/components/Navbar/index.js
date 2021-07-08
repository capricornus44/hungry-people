import React from "react"

import logo from "../../assets/icons/logo.svg"

import {
  Navigation,
  NavigationContainer,
  NavigationLeft,
  NavigationRight,
  NavigationLink,
  NavigationLogo,
} from "./NavbarElements"

const Navbar = () => {
  return (
    <Navigation>
      <NavigationContainer>
        <NavigationLeft>
          <NavigationLink exact to="/" activeClassName="active">
            Home
          </NavigationLink>
          <NavigationLink to="/about" activeClassName="active">
            About
          </NavigationLink>
          <NavigationLink to="/team" activeClassName="active">
            Team
          </NavigationLink>
        </NavigationLeft>

        <NavigationLink to="/">
          <NavigationLogo src={logo} alt="logotype" />
        </NavigationLink>

        <NavigationRight>
          <NavigationLink to="/menu" activeClassName="active">
            Menu
          </NavigationLink>
          <NavigationLink to="/events" activeClassName="active">
            Events
          </NavigationLink>
          <NavigationLink to="/booking" activeClassName="active">
            Booking
          </NavigationLink>
        </NavigationRight>
      </NavigationContainer>
    </Navigation>
  )
}

export default Navbar
