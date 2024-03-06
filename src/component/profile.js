import React from "react"
import { useAuth } from "./auth.js"
import { useNavigate } from "react-router-dom"

function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handelLogout = () => {
    logout()
    navigate("/")
  }
  return (
    <>
      <h2>Profile</h2>
      <h3>Hello: {user}</h3>
      <button onClick={handelLogout}>Logout</button>
    </>
  )
}

export default Profile
