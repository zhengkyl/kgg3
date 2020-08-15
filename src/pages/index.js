import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

import SEO from "../components/seo"
import { Button, Container, Typography, TextField, Hidden } from "@material-ui/core"

import WaveBlock from "../components/waveBlock"

import CouchSVG from "../assets/svgs/couch_yellow.svg"
import DiversitySVG from "../assets/svgs/diversity.svg"
import MascotSVG from "../assets/svgs/mascot.svg"
import WaveSVG from "../assets/svgs/wave.svg"

// import joshZoom from "../assets/images/josh_zoom.gif"
import joshLike from "../assets/images/like_gif.gif"

import clsx from "clsx"

import "../components/pageclip.css"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  main: {
    minHeight: `80vh`,
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sloganContainer: {
    "& del": {
      color: theme.palette.primary.main,
    },
  },
  mascot: {
    maxWidth: 800,
    // marginTop: 80,
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
  blockCenter: {
    flexDirection: "column",
    textAlign: "center",
    // position:"relative",
  },
  block: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  blockText: {
    flex: 1,
  },
  blockGraphic: {
    flex: 2,
    maxWidth: "100%",
  },
  blockyText: {
    marginTop: `0.8em`,
    textShadow: `-0.05em 0.04em ${theme.palette.primary.dark}`,
  },
  // You may be wondering why. This saves times and noone will know.
  // This cursed workaround is why you should use display:grid.
  spacing: {
    height: 24,
    width: 24,
  },

  form: {
    display: "flex",
    width: "100%",
    maxWidth: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  socialBlock: {
    display: "flex",
    alignItems: "center",
    position:"relative",
  },
  socialLinks: {
    marginLeft: theme.spacing(4),
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  emailField: {
    flex: 1,
  },
  chicken: {
    filter: "grayscale(1)",
    position: "absolute",
    // transform: "translate(50%,0)",
  },
}))

const IndexPage = props => {
  console.log(props)
  const classes = useStyles()

  return (
    <>
      <SEO title="Home" />
      <Helmet>
        <script
          defer
          src="https://s.pageclip.co/v1/pageclip.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <Container maxWidth="lg" className={classes.main}>
        <div className={classes.sloganContainer}>
          <Typography variant="h1" className={classes.blockyText}>
            We play
            <br />
            together
          </Typography>
          <Typography variant="h6">
            Kappa Gamma Gamma is a community of gamers.
          </Typography>
        </div>
        <Typography variant="h1" component="div" className={classes.blockyText}>
          <MascotSVG className={classes.mascot} />
        </Typography>
      </Container>
      <WaveBlock>
        <Container
          maxWidth="lg"
          className={clsx(classes.block, classes.blockEven)}
        >
          <DiversitySVG className={classes.blockGraphic} />
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
      </WaveBlock>

      <Container
        maxWidth="lg"
        className={clsx(classes.block, classes.blockOdd)}
      >
        <img src={joshLike} className={classes.blockGraphic} />
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

      <WaveBlock>
        <Container
          maxWidth="lg"
          className={clsx(classes.block, classes.blockEven)}
        >
          <DiversitySVG className={classes.blockGraphic} />
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
      </WaveBlock>
      <Container
        maxWidth="lg"
        className={clsx(classes.block, classes.blockCenter)}
      >
        <Typography variant="h3" className={classes.infoTitle}>
          Interested in KGG?
        </Typography>
        <Typography variant="h6" className={classes.info}>
          {"Give us your email for future announcements ;)"}
        </Typography>

        <form
          action={`https://send.pageclip.co/${process.env.PAGECLIP_API_KEY}`}
          className={clsx("pageclip-form", classes.form)}
          method="post"
        >
          <TextField
            className={classes.emailField}
            type="email"
            variant="outlined"
            label="Email"
            name="email"
            required
            id="emailTextField"
          />
          <Button
            className={"pageclip-form__submit"}
            variant="outlined"
            color="primary"
            type="submit"
            size="large"
          >
            <span>Submit</span>
          </Button>
        </form>

        <Typography variant="h6" className={classes.info}>
          {"Follow our socials for more KGG <3"}
        </Typography>
        <div className={classes.socialBlock}>
        <Hidden xsDown>
             <Img
            fixed={props.data.chickenWalk.childImageSharp.fixed}
            className={classes.chicken}
            style={{position:"absolute", left:"-80%"}}
            />
          </Hidden>
          <Typography variant="h2" component="span">
            {"@kagaga"}
          </Typography>

          <a
            className={classes.socialLinks}
            href="https://www.instagram.com/kappagaga/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a
            className={classes.socialLinks}
            href="https://twitter.com/kappagaga"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <Hidden xsDown>
             <Img
            fixed={props.data.chickenFollow.childImageSharp.fixed}
            className={classes.chicken}
            style={{position:"absolute", right:"-80%"}}
            />
          </Hidden>
       
            </div>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query {
    chickenWalk: file(relativePath: { eq: "chicken_walk.png" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    chickenFollow: file(relativePath: { eq: "chicken_follow.png" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

export default IndexPage
