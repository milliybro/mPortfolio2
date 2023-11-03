import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Header from "./header"

const Layout1 = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}

export default Layout1