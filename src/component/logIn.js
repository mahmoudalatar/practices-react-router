import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "./auth.js"

function LogIn() {
  const [user, setUser] = useState("")
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirect = location.state?.path || "/"

  const handelLogin = () => {
    auth.login(user)
    navigate(redirect, { replace: true })
  }
  return (
    <>
      <h2>LogIn</h2>
      <label htmlFor="input">
        User Name:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handelLogin}>LogIn</button>
    </>
  )
}

export default LogIn
