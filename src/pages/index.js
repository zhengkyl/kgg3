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
import WaveSVG from "../assets/svgs/wave.svg"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  sloganContainer: {
    zIndex: 100,
  },
  sloganBack: {
    position: "absolute",
    transform: `translate(-0.06em, 0.04em)`,
    color: "#f8f93350",
  },
  sloganFront: {

  },
  splashArt: {

  },
  splashCouch: {
  },
  splashContainer: {

    position: "absolute",
    right: 0,
    height: "100%",

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
    paddingTop:theme.spacing(4),
    paddingBottom:theme.spacing(8),
  },
  blockText: {
    flex: 1, 
  },
  blockGraphic: {
    flex: 2,
    maxWidth: "100%",
  },


  waveBlockContainer: {
    backgroundColor: "#1f1f1f",
  },
  waveBlock: {
    display: "block",
    fill: "#1f1f1f",
  },
  flipY: {
    transform: 'scaleY(-1)'
  },
  spacing:{
    height:24,
    width:24,
  }
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
  const createWavedBlock = children => (
    <>
      <WaveSVG className={classes.waveBlock} />
      <div className={classes.waveBlockContainer}>{children}</div>
      <WaveSVG className={clsx(classes.waveBlock, classes.flipY)} />
    </>
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
      {/* <Img fluid={props.data.space.childImageSharp.fluid} className={classes.splashArt}/> */}

      <CouchSVG className={classes.splashCouch} />
      {createWavedBlock(
        <Container
          maxWidth="lg"
          className={clsx(classes.block, classes.blockEven)}
        >
          <DiversitySVG className={classes.blockGraphic}/>
          <div className={classes.spacing}></div>
          <div className={classes.blockText}>
            <Typography variant="h3" className={classes.infoTitle}>
              For everyone and anyone
            </Typography>
            <Typography variant="h6" className={classes.info}>
              No matter what game you play, KGG welcomes you. We've always
              strived for inclusiveness at KGG, because we know that games bring
              people together.
            </Typography>
          </div>
        </Container>
      )}

      <Container
        maxWidth="lg"
        className={clsx(classes.block, classes.blockOdd)}
      >
        <img src={joshZoom} className={classes.blockGraphic} />
        <div className={classes.spacing}></div>
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

      {createWavedBlock(
        <Container
          maxWidth="lg"
          className={clsx(classes.block, classes.blockEven)}
        >
          <DiversitySVG className={classes.blockGraphic}/>
          <div className={classes.spacing}></div>
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
      )}

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
