import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"
import clsx from "clsx"
import { Container, Grid, IconButton, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: "flex",
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
  image: {
    borderRadius: theme.spacing(1),
    backgroundColor: "#f6d5d0",
    marginBottom: theme.spacing(2),
  },
  blockyText: {
    marginTop: `0.8em`,
    textShadow: `-0.05em 0.04em ${theme.palette.primary.dark}`,
  },
  sectionTitle: {
    color: theme.palette.primary.main,
  },
  socialIcon: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  memberDesc: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  centerText:{
    textAlign:"center",
    marginTop: theme.spacing(2)
  }
}))

const MembersPage = props => {
  const classes = useStyles()

  const createProfileContainer = (fluidImage, nameText, descText, links) => (
    <span className={classes.gridItem}>
      <Img fluid={fluidImage} className={classes.image} />
      <Typography variant="h5">{nameText}</Typography>
      <Typography variant="h6" className={classes.memberDesc}>
        {descText}
      </Typography>
      <div>{links}</div>
    </span>
  )
  return (
    <>
      <SEO title="Members" />
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.blockyText}>
          Members
        </Typography>

        <Typography variant="h3" className={clsx(classes.sectionTitle, classes.centerText)}>
          Ranked by Epicness
        </Typography>
        
        <div className={classes.gridContainer}>
          {createProfileContainer(
            props.data.kyleZheng.childImageSharp.fluid,
            "Kyle Zheng",
            "made this website",
            <>
              <a
                href="https://www.kylezheng.tech/"
                target="_blank"
                className={classes.socialIcon}
              >
                <FontAwesomeIcon icon={faWindowMaximize} size="lg" />
              </a>
              <a
                href="https://github.com/zhengkyl"
                target="_blank"
                className={classes.socialIcon}
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/kyle-zheng-9b2546145/"
                target="_blank"
                className={classes.socialIcon}
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </>
          )}

          {createProfileContainer(
            props.data.kggGroup.childImageSharp.fluid,
            "Others",
            "did not make this website"
          )}
          {/* {createProfileContainer(
            props.data.cactus.childImageSharp.fluid,
            "You",
            "A cool person"
          )} */}
        </div>
        <Typography variant="h3" className={classes.sectionTitle}>
          Looking to join?
        </Typography>
        <Typography variant="h6">
          KGG is always looking for more talented and talentless individuals.
          More info about Fall 2020 recruitment coming soon!
        </Typography>
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
{
  /* <span>Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Charles Deluvio</a> on <a href="https://unsplash.com/s/photos/cactus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */
}
export default MembersPage
