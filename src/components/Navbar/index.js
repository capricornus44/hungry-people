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
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/about">About</NavigationLink>
          <NavigationLink to="/team">Team</NavigationLink>
          <NavigationLink to="/booking">Booking</NavigationLink>
        </NavigationLeft>

        <NavigationLink to="/">
          <NavigationLogo src={logo} alt="logotype" />
        </NavigationLink>

        <NavigationRight>
          <NavigationLink to="/menu">Menu</NavigationLink>
          <NavigationLink to="/galery">Galery</NavigationLink>
          <NavigationLink to="/events">Events</NavigationLink>
          <NavigationLink to="/contact">Contact</NavigationLink>
        </NavigationRight>
      </NavigationContainer>
    </Navigation>
  )
}

export default Navbar
