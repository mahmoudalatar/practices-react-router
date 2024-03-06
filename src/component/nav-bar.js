import React from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "./auth.js"

function NavBar() {
  const auth = useAuth()

  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    }
  }

  return (
    <nav className="nav-primary">
      <NavLink style={navStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navStyle} to="/products">
        Products
      </NavLink>
      <NavLink style={navStyle} to="/users">
        Users
      </NavLink>
      <NavLink style={navStyle} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navStyle} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  )
}

export default NavBar
