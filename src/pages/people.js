import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

// import ChessSVG from "../images/chess.svg"
// import ControllerSVG from "../images/controller.svg"
// import PhoneSVG from "../images/phone.svg"
// import LaptopSVG from "../images/laptop.svg"
// import SplashSVG from "../images/kgg_splash.svg"
// import DownSVG from "../images/down_arrow.svg"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  sloganContainer: {
    position: "relative",
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
    opacity:0.6,
    zIndex:-1,
    position: "absolute",
    width: 700,
    right: 0,
  },
  splashContainer: {
    position: "relative",
    height:500,
    margin: '0 -1.0785rem',
    marginBottom: theme.spacing(16),
    [theme.breakpoints.up("md")]: {
      marginTop:-100,
    },
  },
  info:{
    fontFamily:theme.typography.fontFamilyMono,
  }
}))

const PeoplePage = () => {
  const classes = useStyles()


  return (
    <Layout>
      <SEO title="People" />



    </Layout>
  )
}

export default PeoplePage
