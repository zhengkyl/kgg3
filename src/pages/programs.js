import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

    width:240,
  },
  programBlock: {
    backgroundColor: "#1a1a1a",
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    marginRight:40,
    width:240,

  },
  programsBlock: {
    // display: "flex",
    // flexWrap:'wrap',
  },
  programText: {
    padding: theme.spacing(2),
  },
  container:{
    overflow:'hidden',
  },
  slider:{
    overflow:'visible'
  }
}))

const ProgramsPage = props => {
  const classes = useStyles()

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
        currentSlide={6}
        visibleSlides={4}
        totalSlides={18}
        // There is a difference of 4 slides between mobile and desktop view.
        //width of cards + width of card margins
        style={{width:(4 * 240) + (4*40)}}
        >


      <Slider className={classes.slider}>
        {ProgramsData.content.map((item, index)=>(
          <Slide index={index}>
            <ProgramBlock title={item.title} desc={item.desc}>
              <Img
                fluid={props.data[item.imgName].childImageSharp.fluid}
                className={classes.blockImg}
              />
            </ProgramBlock>
          </Slide>
        ))}
        {ProgramsData.content.map((item, index)=>(
          <Slide index={index+6}>
            <ProgramBlock title={item.title} desc={item.desc}>
              <Img
                fluid={props.data[item.imgName].childImageSharp.fluid}
                className={classes.blockImg}
              />
            </ProgramBlock>
          </Slide>
        ))}
        {ProgramsData.content.map((item, index)=>(
          <Slide index={index+12}>
            <ProgramBlock title={item.title} desc={item.desc}>
              <Img
                fluid={props.data[item.imgName].childImageSharp.fluid}
                className={classes.blockImg}
              />
            </ProgramBlock>
          </Slide>
        ))}

      </Slider>

         
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
