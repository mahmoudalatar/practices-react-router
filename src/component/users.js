import React from "react"
import { Link, Outlet, useSearchParams } from "react-router-dom"

function Users() {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get("filter") === "active"

  return (
    <>
      <nav>
        <Link to="1">User 1</Link>
        <Link to="2">User 2</Link>
        <Link to="3">User 3</Link>
      </nav>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </div>

      <div>{showActiveUsers ? <h2>Active Users</h2> : <h2>All Users</h2>}</div>
    </>
  )
}

export default Users
