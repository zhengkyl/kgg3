import React from "react"


import ContactSVG from "../assets/svgs/min/contact.min.svg"
import SEO from "../components/seo"

import { Container, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import FAQData from "../../content/faq.yml"
const useStyles = makeStyles(theme => ({
  blockyText: {
    marginTop: `0.8em`,
    marginBottom: `0.2em`,
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
  faqSection: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row-reverse",
    },
    // textAlign:"center",
  },
  faqGraphic:{
    maxWidth:600,
    display:"block",
    margin:"auto",
    flex:1,
  },
  faqText:{
    flex:1,
  }
}))

const ContactPage = props => {
  const classes = useStyles()

  const FaqBlock = ({ question, answer }) => (
    <>
      <Typography variant="h3" component="h2" className={classes.question}>
        {question}
      </Typography>
      <Typography variant="h6" component="p">{answer}</Typography>
    </>
  )
  return (
    <>
      <SEO title="Contact" />
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.blockyText}>
          Contact
        </Typography>
        <Typography variant="h4" component="p">Email us at </Typography>
        <Typography variant="h2" className={classes.email}>
          contact@kgg.gg
        </Typography>
        <Typography variant="h4" component="p">Visit in person at </Typography>
        <Typography variant="h2" className={classes.email}>
          HCRN 3F Middle Lounge
        </Typography>
        <Typography variant="h1" className={classes.blockyText}>
          FAQ
        </Typography>
        <div className={classes.faqSection}>
          <ContactSVG className={classes.faqGraphic}/>
          <div className={classes.faqText}>
            {FAQData.content.map((item, index) => (
              <FaqBlock question={item.question} answer={item.answer} />
              // createFaqBlock(item.question, item.answer
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default ContactPage
