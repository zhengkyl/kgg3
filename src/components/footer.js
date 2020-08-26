import React from "react"

import WaveBlock from "./waveBlock"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
const useStyles = makeStyles(theme => ({
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& a": {
      color: theme.palette.text.primary,
      textDecoration: "none",
    },
    "& a:hover": {
      color: theme.palette.primary.light,
    },
  },
  footerContent: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
  },
  sectionTitle: {
    // color: theme.palette.primary.main,
  },
  attribution: {
    textAlign: "center",
    color: theme.palette.text.primary,
    "& span": {
      display: "inline-block",
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    "& span:last-child": {
      marginRight: 0,
    },
  },
  socialLinks: {
    // margin: `0 ${theme.spacing(1)}px`,
    padding: theme.spacing(1),
    // color: theme.palette.text.primary,
    // "&:hover": {
    //   color: theme.palette.primary.main,
    // },
  },
  bottomText: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",

    marginTop: theme.spacing(1),
    // fontFamily: theme.typography.fontFamilyMono,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <WaveBlock flatBottom={true}>
        <Container maxWidth="lg" className={classes.footerContent}>
          <div className={classes.attribution}>
            <Typography variant="subtitle2" className={classes.sectionTitle}>
              Attributions
            </Typography>
            <Typography variant="caption">
              <a href="https://www.freepik.com/free-vector/woman-addicted-social-media_6402798.htm">
                Girl vector - freepik @ www.freepik.com
              </a>
            </Typography>
            <Typography variant="caption">
              <a href="https://www.freepik.com/free-vector/flat-design-young-people-listening-music_5599551.htm">
                Heads vector - freepik @ www.freepik.com
              </a>
            </Typography>

            <Typography variant="caption">
              <a href="https://www.freepik.com/free-vector/people-jumping-youth-day-design_8648097.htm">
                Jumping people vector - freepik @ www.freepik.com
              </a>
            </Typography>

            <Typography variant="caption">
              <a href="https://www.freepik.com/free-vector/business-woman-with-coffee-posting-photo-internet_5481388.htm">
                Social media vector - pikisuperstar @ www.freepik.com
              </a>
            </Typography>

            <Typography variant="caption">
              <a href="https://www.freepik.com/free-vector/character-playing-videogame_7903623.htm">
                Couch gamers vector - freepik @ www.freepik.com
              </a>
            </Typography>

            <Typography variant="caption">
              <a href="https://www.freepik.com/free-vector/error-404-concept-landing-page_5060706.htm">
                FAQ vector - pikisuperstar @ www.freepik.com
              </a>
            </Typography>
          </div>
          <div className={classes.bottomText}>
            <Typography variant="body2">
              {`© KGG ${new Date().getFullYear()}, Made with <3 by `}
              <a href="https://kylezheng.dev" target="_blank" rel="noopener noreferrer">
                @zhengkyl
              </a>
            </Typography>

            <a
              className={classes.socialLinks}
              href="https://twitter.com/kappagaga"
              target="_blank"
              rel="noopener noreferrer"
              alt="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              className={classes.socialLinks}
              href="https://www.instagram.com/kappagaga/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </Container>
      </WaveBlock>
    </footer>
  )
}

export default Footer
