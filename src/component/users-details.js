import React from "react"
import { useParams } from "react-router-dom"

function UsersDetails() {
  let { userId } = useParams()

  return <h2>User {userId}</h2>
}

export default UsersDetails
