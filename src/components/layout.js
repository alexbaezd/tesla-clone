import PropTypes from "prop-types"
import * as React from "react"
import Header from "./Header"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
