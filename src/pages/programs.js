import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "../components/seo"

import { Container, Grid, IconButton, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
const useStyles = makeStyles(theme => ({
  blockyText: {
    marginTop: `0.8em`,
    textShadow: `-0.05em 0.04em ${theme.palette.primary.dark}`,
  },
  sectionTitle: {
    color: theme.palette.primary.main,
  },
  colorBlock: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    height: 100,
  },
  blockImg: {
    // maxWidth: 600,
    minWidth: 270,
  },
  programBlock: {
    backgroundColor: "#1f1f1f",
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    margin: theme.spacing(1),
    // marginRight:theme.spacing(1),
  },
  programsBlock: {
    display: "flex",
    // flexWrap:'wrap',
  },
  programText: {
    padding: theme.spacing(2),
  },
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
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.blockyText}>
          Programs
        </Typography>
        <Typography variant="h4">
          KGG is proud to run the following events
        </Typography>
      </Container>
      <div className={classes.programsBlock}>
        <ProgramBlock title="Ramen Night" desc="Eat ramen at night">
          <Img
            fluid={props.data.ramenNight.childImageSharp.fluid}
            className={classes.blockImg}
          />
        </ProgramBlock>
        <ProgramBlock title="Ramen Night" desc="Eat ramen at night">
          <Img
            fluid={props.data.study.childImageSharp.fluid}
            className={classes.blockImg}
          />
        </ProgramBlock>
        <ProgramBlock title="Fashion Week" desc="Wear clothes all week">
          <Img
            fluid={props.data.slide.childImageSharp.fluid}
            className={classes.blockImg}
          />
        </ProgramBlock>
        {/* <ProgramBlock title="Youth Mentoring" desc="Help underprivileged youth">
            <Img fluid={props.data.mentorship.childImageSharp.fluid} className={classes.blockImg}/>
          </ProgramBlock> */}
        <ProgramBlock title="Group Therapy" desc="Let's talk about stuff">
          <Img
            fluid={props.data.duo.childImageSharp.fluid}
            className={classes.blockImg}
          />
        </ProgramBlock>
        {/* <ProgramBlock title="Personal Trainer" desc='1 on 1 private "lessons"'>
            <Img fluid={props.data.advice.childImageSharp.fluid} className={classes.blockImg}/>
          </ProgramBlock> */}
        <ProgramBlock title="Legal Counsel" desc="*not an attorney replacement">
          <Img
            fluid={props.data.legal.childImageSharp.fluid}
            className={classes.blockImg}
          />
        </ProgramBlock>
        <ProgramBlock
          title="Math Tutoring"
          desc="Acquire mathematical knowledge"
        >
          <Img
            fluid={props.data.tutor.childImageSharp.fluid}
            className={classes.blockImg}
          />
        </ProgramBlock>
      </div>
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
