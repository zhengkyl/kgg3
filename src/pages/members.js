import React, { useCallback } from "react"
import { graphql} from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import clsx from "clsx"
import { Container, Typography } from "@material-ui/core"

import memberData from "../../content/members.yml"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  gridItem: {
    minWidth:300,
    padding: theme.spacing(4),
    textAlign: "center",
    flex:1,
    flexGrow:0,
    // flex: "0 0 0",
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
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  memberDesc: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  centerText: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  chicken:{
    filter:"grayscale(1)",
    float:"right",
    marginLeft:theme.spacing(1),
    marginTop:theme.spacing(1),
  },
  joinBlock:{
    [theme.breakpoints.up("sm")]:{
      display:"flex",
    }
  },
}))

const MembersPage = props => {
  const classes = useStyles()

  const ProfileContainer = useCallback(({ fluidImage, name, desc, children }) => (
    <div className={classes.gridItem}>
      {fluidImage && <Img fluid={fluidImage} className={classes.image} />}
      <Typography variant="h5" component="h3">{name}</Typography>
      <Typography variant="h6" component="span" className={classes.memberDesc}>
        {desc}
      </Typography>
      <div>{children}</div>
    </div>
  ),[classes])
  return (
    <>
      <SEO title="Members" />
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.blockyText}>
          Members
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          className={clsx(classes.sectionTitle, classes.centerText)}
        >
          Executive Board
        </Typography>

        <div className={classes.gridContainer}>
          {
            memberData.upper.map((member)=>{
              const names=member.name.toLowerCase().split(' ')
              console.log(`${names[0]}_${names[1]}`)
              return <ProfileContainer
              fluidImage={props.data[`${names[0]}_${names[1]}`].childImageSharp.fluid}
              name={member.name}
              desc={member.subtitle}
            />
            })
          }
        </div>
        <Typography
          variant="h3"
          component="h2"
          className={clsx(classes.sectionTitle, classes.centerText)}
        >
          Team Leaders
        </Typography>
        <div className={classes.gridContainer}>
          {
            memberData.lower.map((member)=>{
              const names=member.name.toLowerCase().split(' ')
              console.log(`${names[0]}_${names[1]}`)
              return <ProfileContainer
              fluidImage={props.data[`${names[0]}_${names[1]}`].childImageSharp.fluid}
              name={member.name}
              desc={member.subtitle}
            />
            })
          }
        </div>
        <Typography variant="h3" component="h2" className={classes.sectionTitle}>
          Looking to join?
        </Typography>
        <div className={classes.joinBlock}>
          <Typography variant="h6" component="p" style={{flex:1}}>
            KGG is always looking for more talented and talentless individuals.
            More info about Fall 2020 recruitment coming soon!
          </Typography>
          <Img fixed={props.data.chickenDuo.childImageSharp.fixed} className={classes.chicken}/>
        </div>
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
    josh_mcatee: file(relativePath: { eq: "people/josh_mcatee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    james_yin: file(relativePath: { eq: "people/james_yin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rachel_zhang: file(relativePath: { eq: "people/rachel_zhang.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sylvia_liu: file(relativePath: { eq: "people/sylvia_liu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    richard_li: file(relativePath: { eq: "people/richard_li.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pranav_anandarao: file(relativePath: { eq: "people/pranav_anandarao.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sai_pothireddy: file(relativePath: { eq: "people/sai_pothireddy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    peter_jiang: file(relativePath: { eq: "people/peter_jiang.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chris_yu: file(relativePath: { eq: "people/chris_yu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nandini_krishna: file(relativePath: { eq: "people/nandini_krishna.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ben_zhu: file(relativePath: { eq: "people/ben_zhu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    joseph_hsu: file(relativePath: { eq: "people/joseph_hsu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kevin_zhang: file(relativePath: { eq: "people/kevin_zhang.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    suruchi_sen: file(relativePath: { eq: "people/suruchi_sen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jaineel_patel: file(relativePath: { eq: "people/jaineel_patel.jpg" }) {
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
    chickenDuo: file(relativePath: { eq: "chicken_duo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
export default MembersPage
