import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SEO from "../components/seo"

import { Container, Grid, IconButton, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
const useStyles = makeStyles(theme => ({
  
}))

const NewsPage = props => {
  const classes = useStyles()


  return (
    <>
      <SEO title="Members" />
      <Container maxWidth="lg">
        <Typography variant="h1">News</Typography>
        
      </Container>
    </>
  )
}
{/* <span>Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Charles Deluvio</a> on <a href="https://unsplash.com/s/photos/cactus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
export default NewsPage
