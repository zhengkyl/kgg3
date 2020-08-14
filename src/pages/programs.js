import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { WithStore } from "pure-react-carousel"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import SEO from "../components/seo"

import { Container, Grid, IconButton, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import ProgramsData from "../../content/programs.yml"
const useStyles = makeStyles(theme => ({
  blockyText: {
    marginTop: `0.8em`,
    textShadow: `-0.05em 0.04em ${theme.palette.primary.dark}`,
  },
  sectionTitle: {
    color: theme.palette.primary.main,
  },
  blockImg: {
    width: 240,
  },
  programBlock: {
    backgroundColor: "#1a1a1a",
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    width: 240,
  },
  programText: {
    padding: theme.spacing(2),
  },
  container: {
    overflow: "hidden",
  },
  carousel:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    zIndex:1000,
    backgroundColor: "transparent",
    width:32,
    height:32,
    border:"none",
    color: "#fff",
    borderRadius:"50%",
    transform:'translate(-50%,0)',
    "&:first-child":{
      transform:'translate(50%,0)',
    },
    "&:hover":{
      backgroundColor:"#ffffff20"
    }
  }
}))

const ProgramsPage = props => {
  const classes = useStyles()

  const atLeastSm = useMediaQuery(theme => theme.breakpoints.up("sm"))
  const atLeastMd = useMediaQuery(theme => theme.breakpoints.up("md"))
  const atLeastLg = useMediaQuery(theme => theme.breakpoints.up("lg"))

  const visibleCards =
    (atLeastLg && 4) || (atLeastMd && 3) || (atLeastSm && 2) || 1

  const totalCards = ProgramsData.content.length

  const ProgramBlock = ({ title, desc, children }) => (
    <>
      <div className={classes.programBlock}>
        <div className={classes.programText}>
          <Typography variant="h5" className={classes.sectionTitle}>
            {title}
          </Typography>
          <Typography variant="body1">{desc}</Typography>
        </div>
        {children}
      </div>
    </>
  )

  return (
    <>
      <SEO title="Programs" />
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h1" className={classes.blockyText}>
          Programs
        </Typography>
        <Typography variant="h4">
          KGG is proud to run the following events
        </Typography>
        <CarouselProvider
          isIntrinsicHeight
          currentSlide={totalCards}
          visibleSlides={visibleCards}
          totalSlides={totalCards * 3}
          //width of cards + width of card margins
          className={classes.carousel}
        >
          <ButtonBack className={classes.button}>
            <FontAwesomeIcon icon={faCaretLeft} size="2x"/>
          </ButtonBack>
          
          <Slider style={{ width: visibleCards * 240 + visibleCards * 32, overflow:'visible'}}>
            {[0, 1, 2].map(iteration =>
              ProgramsData.content.map((item, index) => (
                <Slide index={index + iteration * totalCards}>
                  <ProgramBlock title={item.title} desc={item.desc}>
                    <Img
                      fluid={props.data[item.imgName].childImageSharp.fluid}
                      className={classes.blockImg}
                    />
                  </ProgramBlock>
                </Slide>
              ))
            )}
          </Slider>
          <ButtonNext className={classes.button}>
            <FontAwesomeIcon icon={faCaretRight} size="2x"/>
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
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mentorship: file(relativePath: { eq: "mentorship43.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    advice: file(relativePath: { eq: "advice43.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    legal: file(relativePath: { eq: "legal43.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    tutor: file(relativePath: { eq: "tutor43.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    duo: file(relativePath: { eq: "duo43.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    slide: file(relativePath: { eq: "slide43.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    study: file(relativePath: { eq: "study43.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
export default ProgramsPage
