import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

import ChessSVG from "../images/chess.svg"
import ControllerSVG from "../images/controller.svg"
import PhoneSVG from "../images/phone.svg"
import LaptopSVG from "../images/laptop.svg"
import SplashSVG from "../images/kgg_splash.svg"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  sloganContainer: {
    position: "relative",
    // margin: '0 1.0875rem',
    // marginTop:'4rem',
  },

  sloganBack: {
    position: "absolute",
    transform: "translate(-4px, 3px)",
    color: "#f8f93350",
  },
  sloganFront: {
    position: "relative",
  },
  splashArt: {
    position: "absolute",
    width: 600,
    left: 0,
    [theme.breakpoints.up("sm")]: {
      left: "initial",
      right: 0,
      // marginTop: -100,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: -100,
    },
  },
  info:{
    position:'absolute',
  },
  splashContainer: {
    position: "relative",
    height:700,
    margin: '0 -1.0785rem'
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  const createSlogan = slogan => (
    <div className={classes.sloganContainer}>
      <Typography variant="h1" component="div" className={classes.sloganBack}>
        {slogan}
      </Typography>
      <Typography variant="h1" component="div" className={classes.sloganFront}>
        {slogan}
      </Typography>
    </div>
  )

  return (
    <Layout>
      <SEO title="Home" />
      {createSlogan(
        <>
          <br />
          Stay inside.
          <br />
          Game with us.
        </>
      )}
        <div className={classes.info}>
          Learn about the gaming fraternity. vvv
        </div>
        <div className={classes.splashContainer}>
          <SplashSVG className={classes.splashArt} />
        </div>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <div>
        Icons made by{" "}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
