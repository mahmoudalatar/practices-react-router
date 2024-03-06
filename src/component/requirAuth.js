import { useAuth } from "./auth.js"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

function RequireAuth({ children }) {
  const location = useLocation()
  const { user } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />
  } else {
    return children
  }
}

export default RequireAuth
