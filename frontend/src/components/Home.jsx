import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
// import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"

export const Home = () => {
  // let navigate=useNavigate()
//  useEffect(()=>{
//   let user=localStorage.getItem("user")
//   if(!user){
//       navigate("/",{replace:true})
//   }
//  },[navigate])
  return (
    <>
    <Navbar/>
    <h1 className="title">Welcome to Future</h1>
    <Outlet/>
    </>
  )
}
