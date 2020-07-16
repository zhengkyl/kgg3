import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Container, Grid, IconButton, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: "flex",
    // flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  gridItem: {
    maxWidth: 420,
    minWidth: 360,
    padding: theme.spacing(4),
    textAlign: "center",
    flex: "1 0 0",
  },
  image:{
    borderRadius:theme.spacing(1),
    backgroundColor:"#f6d5d0"
  }
}))

const PeoplePage = props => {
  const classes = useStyles()

  const createProfileContainer = (fluidImage, nameText, descText) => (
    <span className={classes.gridItem}>
      <Img fluid={fluidImage} className={classes.image}/>
      <Typography variant="h3">{nameText}</Typography>
      <Typography variant="h6">{descText}</Typography>
    </span>
  )
  return (
    <Layout>
      <SEO title="People" />
      <Container maxWidth="lg">
        <Typography variant="h1">People</Typography>
        <div className={classes.gridContainer}>
          {createProfileContainer(
            props.data.kyleZheng.childImageSharp.fluid,
            "Kyle Zheng",
            "The guy who made this website"
          )}
          <FontAwesomeIcon icon={faGithub}/>
          {createProfileContainer(
            props.data.kggGroup.childImageSharp.fluid,
            "Others",
            "People who did not make this website"
          )}
          {createProfileContainer(
            props.data.cactus.childImageSharp.fluid,
            "You",
            "A cool person"
          )}
        </div>
      </Container>
    </Layout>
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
{/* <span>Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Charles Deluvio</a> on <a href="https://unsplash.com/s/photos/cactus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
export default PeoplePage
