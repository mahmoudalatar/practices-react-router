import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./component/home.js"
import About from "./component/about.js"
import NotMuch from "./component/not-much.js"
import NavBar from "./component/nav-bar.js"
import LogIn from "./component/logIn.js"
import Products from "./component/products.js"
import FeaturedProducts from "./component/featuredProducts.js"
import NewProducts from "./component/newProducts.js"
import Users from "./component/users.js"
import UsersDetails from "./component/users-details.js"
import React from "react"
import { AuthProvider } from "./component/auth.js"
import RequireAuth from "./component/requirAuth.js"
import Profile from "./component/profile.js"
const LazyAbout = React.lazy(() => import("./component/about.js"))

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="login" element={<LogIn />} />
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UsersDetails />} />
        </Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured-products" element={<FeaturedProducts />} />
          <Route path="new-products" element={<NewProducts />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotMuch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
