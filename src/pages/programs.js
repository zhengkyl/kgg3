import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
    minWidth: 240,
  },
  programBlock: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: '#1f1f1f',
    borderRadius:theme.spacing(2),
    paddingLeft:theme.spacing(4),
    paddingTop:theme.spacing(4),
    overflow:'hidden',
    // maxWidth: 600,
    // backgroundColor: theme.palette.background.paper,
    // flex:1,
    // flexGrow:1,
  },
  programsBlock:{
    display:'flex',
    flexWrap:'wrap',
  }
}))

const ProgramsPage = props => {
  const classes = useStyles()

  const Test = () => {
    return (
      <h1>hi</h1>
    )
  }
  const ProgramBlock = ({title, desc, children}) => (
    <>
      <div className={classes.programBlock}>
        <div>
          <Typography variant="h5" className={classes.sectionTitle}>
            {title}
          </Typography>
          <Typography variant="body1">{desc}</Typography>
        </div>
        {children}
        {/* <Img fluid={image} className={classes.blockImg} /> */}
        {/* <div className={classes.colorBlock}></div> */}
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
        <div className={classes.programsBlock}>
          <ProgramBlock title="Ramen Night" desc="Eat ramen at night">
            <Img fluid={props.data.ramenNight.childImageSharp.fluid} className={classes.blockImg} />
          </ProgramBlock>
          <ProgramBlock title="Ramen Night" desc="Eat ramen at night">
            <Img fluid={props.data.mentorship.childImageSharp.fluid} className={classes.blockImg} />
          </ProgramBlock>
          <ProgramBlock title="Ramen Night" desc="Eat ramen at night">
            <Img fluid={props.data.advice.childImageSharp.fluid} className={classes.blockImg} />
          </ProgramBlock>
        </div>
        
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query {
    ramenNight: file(relativePath: { eq: "ramen_night.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mentorship: file(relativePath: { eq: "mentorship.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    advice: file(relativePath: { eq: "advice.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
export default ProgramsPage
