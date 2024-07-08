import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
    </nav>
  )
}
