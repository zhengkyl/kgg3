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
  email:{
    color:theme.palette.primary.main,
    textAlign: 'center',
  }
}))

const ContactPage = props => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Contact" />
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.blockyText}>
          Contact
        </Typography>
        <Typography variant="h4">Email us at </Typography>
        <Typography variant="h2"className={classes.email}>info@kgg.gg</Typography>
        <Typography variant="h4">Visit in person at </Typography>
        <Typography variant="h2"className={classes.email}>HCRN 3F Middle Lounge</Typography>

        <Typography variant="h3">FAQ</Typography>
        <Typography variant="h3">Sponsors & Partners</Typography>
        <Typography variant="h6">
          If you or your organization want to work with KGG, we'd love to
          discuss potential partnerships. We also accept free money.
        </Typography>
        <Typography variant="h3">New Chapters</Typography>
        <Typography variant="h6">
          If you want to bring KGG to your campus, reach out and show us what
          you've got! If the vibe is right, we'll send an official KGG starter
          kit with all the materials and resources needed to create a new
          chapter.
        </Typography>
        <Typography variant="h3">Media Resources</Typography>
        <Typography variant="h6">
          If you would like to tell the world about KGG and need any specific
          materials or information, we would love to help. We can provide exclusive
          interviews, subpar photographs, and official graphics to make your story shine.
        </Typography>
      </Container>
    </>
  )
}
{
  /* <span>Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Charles Deluvio</a> on <a href="https://unsplash.com/s/photos/cactus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */
}
export default ContactPage
