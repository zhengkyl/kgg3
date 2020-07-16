import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import { Container } from "@material-ui/core"
// import Image from "../components/image"
import SEO from "../components/seo"

import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

// import ChessSVG from "../images/chess.svg"
// import ControllerSVG from "../images/controller.svg"
// import PhoneSVG from "../images/phone.svg"
// import LaptopSVG from "../images/laptop.svg"
import SplashSVG from "../assets/svgs/kgg_splash.svg"
import CouchSVG from "../assets/svgs/couch_yellow.svg"
import BlueSVG from "../assets/svgs/blue_fantasy.svg"
import DownSVG from "../assets/svgs/down_arrow.svg"
import DiversitySVG from "../assets/svgs/diversity.svg"
import joshZoom from "../assets/images/josh_zoom.gif"
import clsx from "clsx"

import WaveTopSVG from "../assets/svgs/wave_top.svg"
import WaveBotSVG from "../assets/svgs/wave_bot.svg"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  sloganContainer: {
    // position: "absolute",
    zIndex:100,
  },
  sloganBack: {
    position: "absolute",
    transform: `translate(-0.06em, 0.04em)`,
    color: "#f8f93350",
  },
  sloganFront: {
    position: "absolute",
  },
  splashArt: {
    // zIndex: -1,
    
    // width: 700,
    // right: 0,
  },
  splashCouch: {
    // position:"relative",
  },
  splashContainer: {
    // display:"flex",
    // flexDirection:"column",
    position: "absolute",
    // top:0,
    right:0,
    height:"100%",
    // height: 500,
    // // margin: "0 -1.0785rem",
    // marginBottom: theme.spacing(16),
    // [theme.breakpoints.up("md")]: {
    //   flexDirection:"row",
    // },
  },
  infoTitle: {
    fontWeight: 700,
    color: "#FFE680",
    marginBottom: theme.spacing(4),
  },
  info: {
    fontWeight: 500,
  },
  blockOdd: {
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row-reverse",
    },
  },
  blockEven: {
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  block: {
    display: "flex",

    alignItems: "center",
  },
  blockText: {
    flexGrow: 1,
  },
  blockImg: {
    padding: theme.spacing(2),
    flexGrow: 1,
    maxWidth: "100%",
  },
  blockContainer: {
    backgroundColor: "#222",
  },
  waveBlock: {
    display: "block",
    fill: "#222",
  },
  // blockText:{
  //   display:'flex',
  //   flexDirection:'column',
  //   justifyContent: 'space-evenly',
  // }
}))

const IndexPage = props => {
  const classes = useStyles()

  const createSlogan = slogan => (
    <Container maxWidth="lg" className={classes.sloganContainer}>
      <Typography variant="h1" component="div" className={classes.sloganBack}>
        {slogan}
      </Typography>
      <Typography variant="h1" className={classes.sloganFront}>
        {slogan}
      </Typography>
    </Container>
  )

  return (
    <Layout>
      <SEO title="Home" />
<div className={classes.splashContainer}>
        <BlueSVG/>
      </div>
      {createSlogan(
        <>
          <br />
          Stay inside.
          <br />
          Game with us.
        </>
      )}
      {/* <Img fluid={props.data.space.childImageSharp.fluid} className={classes.splashArt}/> */}
          
        <CouchSVG className={classes.splashCouch} />

      <Container
        maxWidth="lg"
        className={clsx(classes.block, classes.blockEven)}
      >
        <DiversitySVG />
        <div className={classes.blockText}>
          <Typography variant="h3" className={classes.infoTitle}>
            For everyone and anyone
          </Typography>
          <Typography variant="h6" className={classes.info}>
            No matter what game you play, KGG welcomes you. We've always strived
            for inclusiveness at KGG, because we know that games bring people
            together.
          </Typography>
        </div>
      </Container>

      <WaveTopSVG className={classes.waveBlock} />
      <div className={classes.blockContainer}>
        <Container
          maxWidth="lg"
          className={clsx(classes.block, classes.blockOdd)}
        >
          <img src={joshZoom} className={classes.blockImg} />
          <div className={classes.blockText}>
            <Typography variant="h3" className={classes.infoTitle}>
              Participate in legal activities with new friends.
            </Typography>
            <Typography variant="h6" className={classes.info}>
              All of our activities are legal under U.S. law in the state of
              Indiana.
            </Typography>
          </div>
        </Container>
      </div>
      <WaveBotSVG className={classes.waveBlock} />

      <Container
        maxWidth="lg"
        className={clsx(classes.block, classes.blockEven)}
      >
        <DiversitySVG />
        <div className={classes.blockText}>
          <Typography variant="h3" className={classes.infoTitle}>
            Make memories that last beyond college.
          </Typography>
          <Typography variant="h6" className={classes.info}>
            You might not remember the hours you spend grinding, but you'll
            never forget the fun you've had here. That's a promise.
          </Typography>
        </div>
      </Container>

      <Typography variant="h3" className={classes.infoTitle}>
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
    space: file(relativePath: { eq: "space.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
