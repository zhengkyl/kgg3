import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

// import ChessSVG from "../images/chess.svg"
// import ControllerSVG from "../images/controller.svg"
// import PhoneSVG from "../images/phone.svg"
// import LaptopSVG from "../images/laptop.svg"
import SplashSVG from "../assets/svgs/kgg_splash.svg"
import DownSVG from "../assets/svgs/down_arrow.svg"
import joshZoom from "../assets/images/josh_zoom.gif"

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
    opacity: 0.6,
    zIndex: -1,
    position: "absolute",
    width: 700,
    right: 0,
  },
  splashContainer: {
    position: "relative",
    height: 500,
    margin: "0 -1.0785rem",
    marginBottom: theme.spacing(16),
    [theme.breakpoints.up("md")]: {
      marginTop: -100,
    },
  },
  infoTitle: {
    fontWeight: 700,
    color: "#FFE680",
    marginBottom:theme.spacing(4),
  },
  info: {
    fontWeight: 500,
  },
  block:{
    display:'flex',
    margin: `${theme.spacing(12)}px 0`,
    alignItems:'center',
  },
  blockImg:{
    padding: theme.spacing(2),
  }
  // blockText:{
  //   display:'flex',
  //   flexDirection:'column',
  //   justifyContent: 'space-evenly',
  // }
}))

const IndexPage = props => {
  const classes = useStyles()

  const createSlogan = slogan => (
    <div className={classes.sloganContainer}>
      <Typography variant="h1" component="div" className={classes.sloganBack}>
        {slogan}
      </Typography>
      <Typography variant="h1" className={classes.sloganFront}>
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

      <div className={classes.splashContainer}>
        <SplashSVG className={classes.splashArt} />
      </div>
      <Typography variant="h4" className={classes.infoTitle}>
        KGG is a gaming fraternity open to all genders and races.
      </Typography>
      <Typography variant="h6" className={classes.info}>
        No matter what game you play, KGG welcomes you. We've always strived for
        inclusiveness at KGG, because we know that games bring people together.
      </Typography>

      <div className={classes.block}>
        <div className={classes.blockText}>
          <Typography variant="h4" className={classes.infoTitle}>
            Participate in legal activities with new friends.
          </Typography>
          <Typography variant="h6" className={classes.info}>
            All of our activities are legal under U.S. law in the state of
            Indiana.
          </Typography>
        </div>
        <img src={joshZoom} className={classes.blockImg}/>
        {/* <Img fluid={props.data.joshZoom.childImageSharp.fluid} /> */}

      </div>

      <Typography variant="h4" className={classes.infoTitle}>
        Make memories that last beyond college.
      </Typography>
      <Typography variant="h6" className={classes.info}>
        You might not remember the hours you spend grinding, but you'll never
        forget the fun you've had here. That's a promise.
      </Typography>

      <Typography variant="h4" className={classes.infoTitle}>
        Ready to join?
      </Typography>
      <Typography variant="h6" className={classes.info}>
        Give us your email for future announcements ;)!
      </Typography>
    </Layout>
  )
}

export const pageQuery = graphql`
query {
  joshZoom: file(relativePath: { eq: "kgg-icon.png" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default IndexPage
