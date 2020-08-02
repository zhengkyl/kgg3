import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SEO from "../components/seo"

import { Container, Grid, IconButton, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
const useStyles = makeStyles(theme => ({
  blockyText: {
    marginTop: `0.8em`,
    textShadow: `-0.05em 0.04em ${theme.palette.primary.dark}`,
  },
  sectionTitle:{
    color: theme.palette.primary.main,
  }
}))

const ProgramsPage = props => {
  const classes = useStyles()

  const createProgramBlock = (title) => (
    <>
      <Typography variant="h5" className={classes.sectionTitle}>{title}</Typography>
      
    </>
  )

  return (
    <>
      <SEO title="Programs" />
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.blockyText}>Programs</Typography>
        <Typography variant="h4">KGG is proud to run the following events</Typography>
        {createProgramBlock("Ramen Night")}        
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query {
    kyleZheng: file(relativePath: { eq: "kyle_zheng.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kggGroup: file(relativePath: { eq: "kgg_group.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cactus: file(relativePath: { eq: "cactus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
export default ProgramsPage
