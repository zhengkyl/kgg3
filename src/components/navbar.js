import {
  AppBar,
  Drawer,
  Divider,
  IconButton,
  Toolbar,
  List,
  ListItem,
  Slide,
  useScrollTrigger,
  Typography,
  Hidden,
} from "@material-ui/core"
import { Link } from "gatsby"
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "./menuIcon"
import KggLogo from "../assets/svgs/min/logo.min.svg"
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1400,
    justifyContent: "center",
    flexDirection: "row",
  },
  list: {
    padding: 0,
    // width: 200,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      width: "initial",
    },
  },

  
  logo: {
    height: 24,
  },
  logoLink: {
    cursor: "pointer",
    margin: "auto 0",
    display: "flex",
  },
  listItem: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      alignItems: "stretch",
      // cursor: "pointer",
      width: "initial",
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
  link: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    width: "100%",
    color: theme.palette.text.primary,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: `${theme.palette.text.secondary}`,
    },

    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
  },
  activeLink: {
    color:theme.palette.primary.main,
    backgroundColor:theme.palette.background.default,
    [theme.breakpoints.up("sm")]:{
      borderBottom: `3px solid ${theme.palette.primary.main}`,
      paddingTop: `3px`,
      // color:"unset",
      backgroundColor:"unset"
    },
    "&:hover":{
      color:'#b2a159'
    }
  },
  toolbar: {
    alignItems: "stretch",
    justifyContent: "space-between",
    flexGrow: 1,
    maxWidth: theme.breakpoints.width("lg"),
  },

  menuButton: {
    marginTop: "auto",
    marginBottom: "auto",
    padding: theme.spacing(3),
  },
  displayText: {
    fontFamily: `"Heebo", "Helvetica", "Arial", sans-serif`,
    fontWeight:500
  },
}))

const pages = [
  { title: "Home", path: "/" },
  { title: "Programs", path: "/programs" },
  { title: "Members", path: "/members" },
  { title: "Contact", path: "/contact" },
]
function HideOnScroll({ children }) {
  const scrollUp = useScrollTrigger({
    threshold: 0,
  })
  const pageNotAtTop = useScrollTrigger({
    threshold: 48,
    disableHysteresis: true,
  })
  return (
    <Slide appear={false} direction="top" in={!scrollUp}>
      {React.cloneElement(children, {
        elevation: pageNotAtTop ? 1 : 0,
        style: { backgroundColor: pageNotAtTop ? "#262626" : "transparent" },
      })}
    </Slide>
  )
}
export default function Navbar() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const toggleDrawer = open => event => {
    setOpen(open)
  }

  const NavList = ({ isMobile }) => (
    <List className={classes.list}>
      {pages.map(page => (
        <ListItem
          key={page.title}
          button={isMobile}
          className={classes.listItem}
          onClick={toggleDrawer(false)}
        >
          <Link
            to={page.path}
            className={classes.link}
            activeClassName={classes.activeLink}
            partiallyActive={page.path !== "/"}
          >
            <Typography variant="subtitle1" className={classes.displayText}>
              {page.title}
            </Typography>
          </Link>
        </ListItem>
      ))}
      <Divider className={classes.divider} />
    </List>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={1}
          position="fixed"
          color="inherit"
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Link to="/" className={classes.logoLink} alt="Home">
              <KggLogo className={classes.logo} />
            </Link>

            <Hidden smUp>
              <IconButton
                name="Menu button"
                onClick={toggleDrawer(!open)}
                edge="end"
                className={classes.menuButton}
              >
                <MenuIcon open={open}></MenuIcon>
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              {/* <DesktopList /> */}
              <NavList isMobile={false} />
            </Hidden>
          </Toolbar>
          <Hidden smUp>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              {/* Spacing element to pad top of drawer with height of appbar */}
              <Toolbar />
              {/* <MobileList /> */}
              <NavList isMobile />
            </Drawer>
          </Hidden>
        </AppBar>
      </HideOnScroll>

      {/* Spacing element to pad top of page with height of appbar */}
      <Toolbar />
    </>
  )
}
