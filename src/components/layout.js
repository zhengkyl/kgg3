/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Navbar from "./navbar"
import Footer from "./footer"
// import "./layout.css"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, Container } from "@material-ui/core"
import theme from "./theme"

const Layout = ({ children }) => {

  return (

    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700&display=swap" rel="stylesheet"/> 
        </Helmet>
        <CssBaseline/>
        <Navbar/>
        {/* <Container maxWidth="lg"
          // style={{
          //   margin: `0 auto`,
          //   maxWidth: 960,
          //   padding: `0 1.0875rem 1.45rem`,
          //   overflowX: `hidden`,
          // }}
        > */}
          
          <main>{children}</main>
          <footer>
            <Footer/>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        {/* </Container> */}
      </React.Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
