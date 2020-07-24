import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "../components/seo"

import { Container, Grid, IconButton, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import FAQData from "../../content/faq.yaml"
const useStyles = makeStyles(theme => ({
  blockyText: {
    marginTop: `0.8em`,
    // marginBottom: theme.spacing(1),
    textShadow: `-0.05em 0.04em ${theme.palette.primary.dark}`,
  },
  email: {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  question: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(4),
  },
}))

const ContactPage = props => {
  const classes = useStyles()

  const createFaqBlock = (questionText, answerText) => (
    <>
      <Typography variant="h3" className={classes.question}>
        {questionText}
      </Typography>
      <Typography variant="h6">{answerText}</Typography>
    </>
  )
  return (
    <>
      <SEO title="Contact" />
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.blockyText}>
          Contact
        </Typography>
        <Typography variant="h4">Email us at </Typography>
        <Typography variant="h2" className={classes.email}>
          contact@kgg.gg
        </Typography>
        <Typography variant="h4">Visit in person at </Typography>
        <Typography variant="h2" className={classes.email}>
          HCRN 3F Middle Lounge
        </Typography>
        <Typography variant="h1" className={classes.blockyText}>
          FAQ
        </Typography>
        {
          FAQData.content.map((item, index) => (
            createFaqBlock(item.question, item.answer)
          ))
        }
      </Container>
    </>
  )
}
{
  /* <span>Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Charles Deluvio</a> on <a href="https://unsplash.com/s/photos/cactus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */
}
export default ContactPage
