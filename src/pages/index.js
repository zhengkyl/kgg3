import React from "react"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import {
  Button,
  Container,
  Typography,
  TextField,
  Hidden,
} from "@material-ui/core"

import WaveBlock from "../components/waveBlock"

import CouchSVG from "../assets/svgs/min/couch.min.svg"
import DiversitySVG from "../assets/svgs/min/everyone.min.svg"
import MascotSVG from "../assets/svgs/min/mascot.min.svg"

// import joshZoom from "../assets/images/josh_zoom.gif"
import joshLike from "../assets/images/social_lossy.webp"

import clsx from "clsx"

import "../components/pageclip.css"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  main: {
    minHeight: `80vh`,
    display: "flex",
    flexWrap: "wrap",
    // [theme.breakpoints.up("md")]: {
    // },
  },
  sloganContainer: {
    "& b": {
      color: theme.palette.primary.main,
    },
    minWidth: 320,
    flex: 1,
  },
  mascot: {
    maxWidth: 600,
    minWidth: 400,
    marginTop: 40,
    flex: 1,
  },
  infoTitle: {
    fontWeight: 700,
    color: "#FFE680",
    marginBottom: "0.8rem",
  },
  info: {
    fontWeight: 500,
  },
  blockOdd: {
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row-reverse",
    },
    backgroundColor: theme.palette.background.default,
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
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
  },
  block: {
    display: "flex",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  blockText: {
    margin: "auto 0",
    [theme.breakpoints.up("md")]: {
      flex: 1,
    },
  },
  blockGraphic: {
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      flex: 1.5,
    },
  },
  blockyText: {
    marginTop: `0.8em`,
    marginBottom: `0.4em`,
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
    position: "relative",
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
  },
  backgroundCover: {
    backgroundColor: theme.palette.background.default,
  },
  footerCover: {
    paddingBottom: 96,
    marginBottom: -64,
  },
  notWaveBlock: {
    backgroundColor: theme.palette.background.default,
  },
  first: {
    paddingTop: theme.spacing(12),
  },
}))

const IndexPage = props => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Home" />
      <Helmet>
        <title>{props.data.site.siteMetadata.title}</title>
        <script
          defer
          src="https://s.pageclip.co/v1/pageclip.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <Container maxWidth="lg" className={classes.main}>
        <div className={classes.sloganContainer}>
          <Typography variant="h1" className={classes.blockyText}>
            Here's to time well wasted.
          </Typography>
          <Typography variant="h4" component="h2">
            <b>Kappa Gamma Gamma</b> is a community of gamers.
          </Typography>
        </div>
        <MascotSVG className={classes.mascot} />
      </Container>

      <WaveBlock bottomBackgroundColor={"#262626"}>
        <Container
          maxWidth="lg"
          className={clsx(classes.block, classes.blockEven, classes.first)}
        >
          <DiversitySVG className={classes.blockGraphic} />
          <div className={classes.spacing}></div>
          <div className={classes.blockText}>
            <Typography variant="h3" className={classes.infoTitle}>
              For pretty much everyone and anyone
            </Typography>
            <Typography variant="h6" component="p" className={classes.info}>
              No matter your gender, race, sexual preference (no pedophiles) or
              even if you're a Yasuo main, KGG welcomes you.
            </Typography>
          </div>
        </Container>
      </WaveBlock>

      <div className={classes.notWaveBlock}>
        <Container
          maxWidth="lg"
          className={clsx(classes.block, classes.blockOdd)}
        >
          <div className={classes.blockGraphic}>
            <img src={joshLike} style={{width:"100%"}} alt="Thumbs Up for Legal Activites"/>
          </div>

          <div className={classes.spacing}></div>
          <div className={classes.blockText}>
            <Typography variant="h3" className={classes.infoTitle}>
              Participate in legal activities with new friends.
            </Typography>
            <Typography variant="h6" component="p" className={classes.info}>
              All of our activities are legal under U.S. law in the state of
              Indiana.
            </Typography>
          </div>
        </Container>
      </div>

      <WaveBlock
        topBackgroundColor={"#262626"}
        bottomBackgroundColor={"#262626"}
      >
        <Container
          maxWidth="lg"
          className={clsx(classes.block, classes.blockEven)}
        >
          <CouchSVG className={classes.blockGraphic} />
          <div className={classes.spacing}></div>
          <div className={classes.blockText}>
            <Typography variant="h3" className={classes.infoTitle}>
              Keep socializing while you distance
            </Typography>
            <Typography variant="h6" component="p" className={classes.info}>
              Have fun without risking death. None of our activities require
              your physical presence.
            </Typography>
          </div>
        </Container>
      </WaveBlock>
      <div className={classes.notWaveBlock}>
        <Container
          maxWidth="lg"
          className={clsx(
            classes.block,
            classes.blockCenter,
            classes.footerCover
          )}
        >
          <Typography variant="h3" className={classes.infoTitle}>
            Interested in KGG?
          </Typography>
          <Typography variant="h6" component="p" className={classes.info}>
            {"Give us your email for future announcements ;)"}
          </Typography>

          <form
            action={`https://send.pageclip.co/KRNEb4w6raeBeRXO3qRLKm9GVEK1H8IX`}
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

          <Typography variant="h6" component="p" className={classes.info}>
            {"Follow our socials for more KGG <3"}
          </Typography>
          <div className={classes.socialBlock}>
            <Hidden xsDown>
              <Img
                fixed={props.data.chickenWalk.childImageSharp.fixed}
                className={classes.chicken}
                style={{ position: "absolute", left: "-80%" }}
              />
            </Hidden>
            <Typography variant="h2" component="span">
              {"@kappagaga"}
            </Typography>

            <a
              className={classes.socialLinks}
              href="https://www.instagram.com/kappagaga/"
              target="_blank"
              rel="noreferrer noopener"
              alt="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              className={classes.socialLinks}
              href="https://twitter.com/kappagaga"
              target="_blank"
              rel="noreferrer noopener"
              alt="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <Hidden xsDown>
              <Img
                fixed={props.data.chickenFollow.childImageSharp.fixed}
                className={classes.chicken}
                style={{ position: "absolute", right: "-80%" }}
              />
            </Hidden>
          </div>
        </Container>
      </div>
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
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
