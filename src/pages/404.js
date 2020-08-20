import React from "react"

import SEO from "../components/seo"
import {
  Container,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import spinGIF from "../assets/images/spin.gif"
const useStyles = makeStyles(theme => ({
  blockyText: {
    marginTop: `0.8em`,
    marginBottom: `0.2em`,
    textShadow: `-0.05em 0.04em ${theme.palette.primary.dark}`,
  },
  spin:{
    display:'block',
    margin:'auto',
  }
}))
const NotFoundPage = () => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="lg">
        <SEO title="404: Not found" />
        <Typography variant="h1" className={classes.blockyText}>
          NOT FOUND
        </Typography>
        <Typography variant="h4" component="p">
          This isn't the page you're looking for. Move along.
        </Typography>
        <img src={spinGIF}/>
      </Container>
    </>
  )
}

export default NotFoundPage
