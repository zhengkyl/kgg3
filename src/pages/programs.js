import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import SEO from "../components/seo"

import { Container, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import ProgramsData from "../../content/programs.yml"
const useStyles = makeStyles(theme => ({
  blockyText: {
    marginTop: `0.8em`,
    marginBottom: `0.2em`,
    textShadow: `-0.05em 0.04em ${theme.palette.primary.dark}`,
  },
  sectionTitle: {
    color: theme.palette.primary.main,
  },
  programBlock: {
    backgroundColor: "#1a1a1a",
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 240,
  },
  programText: {
    padding: theme.spacing(2),
  },
  container: {
    overflow: "hidden",
  },
  carousel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  button: {
    zIndex: 1000,
    backgroundColor: "transparent",
    width: 48,
    height: 48,
    border: "none",
    color: theme.palette.action.active,
    borderRadius: "25%",
    transform: "translate(-50%,0)",
    "&:first-child": {
      transform: "translate(50%,0)",
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:disabled": {
      color: theme.palette.action.disabled,
      backgroundColor: "transparent",
      cursor: "default",
    },
  },
}))

const ProgramsPage = props => {
  const classes = useStyles()

  const atLeastSm = useMediaQuery(theme => theme.breakpoints.up("sm"))
  const atLeastMd = useMediaQuery(theme => theme.breakpoints.up("md"))
  const atLeastLg = useMediaQuery(theme => theme.breakpoints.up("lg"))

  const visibleCards =
    (atLeastLg && 4) || (atLeastMd && 3) || (atLeastSm && 2) || 1

  const totalCards = ProgramsData.content.length

  const ProgramBlock = ({ title, desc, children, style }) => (
    <>
      <div className={classes.programBlock} style={style}>
        <div className={classes.programText}>
          <Typography
            variant="h5"
            component="h3"
            className={classes.sectionTitle}
          >
            {title}
          </Typography>
          <Typography variant="body1">{desc}</Typography>
        </div>
        {children}
      </div>
    </>
  )

  const EndSlide = ({index}) => (
    <Slide index={index}>
              <ProgramBlock
                title={"(ㆆ_ㆆ)"}
                desc={`You reached the ${index == 0 ? "beginning":"end"}...`}
                style={{ position: "relative" }}
              >
                <Img
                  fixed={props.data.chickenPeck.childImageSharp.fixed}
                  style={{
                    display: "block",
                    filter: "grayscale(1)",
                    margin: "147px auto 32px",
                  }}
                />
              </ProgramBlock>
            </Slide>
  )

  const [scrollLock, setScrollLock] = useState(false)

  return (
    <>
      <SEO title="Programs" />
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h1" className={classes.blockyText}>
          Programs
        </Typography>
        <Typography variant="h4" component="h2">
          We host a variety of activites and events.
        </Typography>
        <CarouselProvider
          isIntrinsicHeight
          currentSlide={2 * totalCards + 1}
          visibleSlides={visibleCards}
          totalSlides={totalCards * 4 + 2}
          className={classes.carousel}
        >
          <ButtonBack className={classes.button}>
            <FontAwesomeIcon icon={faCaretLeft} size="3x" />
          </ButtonBack>

          <Slider
            //width of cards + width of card margins
            style={{
              width: visibleCards * 240 + visibleCards * 32,
              overflow: atLeastLg ? "hidden" : "visible",
            }}
            isPageScrollLocked={scrollLock}
            trayProps={{
              onTouchStart: () => setScrollLock(true),
              onTouchEnd: () => setScrollLock(false),
            }}
          >
            <EndSlide index={0}/>
            {[0, 1, 2, 3].map(iteration =>
              ProgramsData.content.map((item, index) => (
                <Slide index={index + iteration * totalCards + 1}>
                  <ProgramBlock title={item.title} desc={item.desc}>
                    <Img
                      fixed={props.data[item.imgName].childImageSharp.fixed}
                      style={{ display: "block" }}
                    />
                  </ProgramBlock>
                </Slide>
              ))
            )}
            <EndSlide index={4*totalCards+1}/>
          </Slider>
          <ButtonNext className={classes.button}>
            <FontAwesomeIcon icon={faCaretRight} size="3x" />
          </ButtonNext>
        </CarouselProvider>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query {
    ramenNight: file(relativePath: { eq: "ramen_night43.png" }) {
      childImageSharp {
        fixed(width: 240) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    mentorship: file(relativePath: { eq: "mentorship43.png" }) {
      childImageSharp {
        fixed(width: 240) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    advice: file(relativePath: { eq: "advice43.png" }) {
      childImageSharp {
        fixed(width: 240) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    legal: file(relativePath: { eq: "legal43.png" }) {
      childImageSharp {
        fixed(width: 240) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    tutor: file(relativePath: { eq: "tutor43.png" }) {
      childImageSharp {
        fixed(width: 240) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    duo: file(relativePath: { eq: "duo43.png" }) {
      childImageSharp {
        fixed(width: 240) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    slide: file(relativePath: { eq: "slide43.png" }) {
      childImageSharp {
        fixed(width: 240) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    study: file(relativePath: { eq: "study43.png" }) {
      childImageSharp {
        fixed(width: 240) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    chickenPeck: file(relativePath: { eq: "chicken_peck.png" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
export default ProgramsPage
