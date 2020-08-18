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
import KggLogo from "../assets/svgs/kgg_yellow.svg"
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1400,
    justifyContent: "center",
    flexDirection: "row",
  },
  list: {
    padding: 0,
    width: 200,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      width: "initial",
    },
  },

  listItem: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      alignItems: "stretch",
      cursor: "pointer",
      width: "initial",
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
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
    paddingTop: `3px`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
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
  },
}))

const pages = [
  { title: "Home", path: "/" },
  { title: "Programs", path: "/programs" },
  { title: "Members", path: "/members" },
  { title: "Contact", path: "/contact" },
]

function HideOnScroll({ children }) {
  // const { children, window } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Navbar() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  // const router=useRouter();

  const toggleDrawer = open => event => {
    setOpen(open)
  }

  const MobileList = () => (
    <List className={classes.list}>
      {pages.map(page => (
        <Typography variant="h5" component="li" key={page.title}>
          <ListItem
            button
            className={classes.listItem}
            onClick={toggleDrawer(false)}
          >
            <Link to={page.path} className={classes.link}>
              {page.title}
            </Link>
          </ListItem>
        </Typography>
      ))}
      <Divider className={classes.divider} />
    </List>
  )
  const DesktopList = () => (
    <List className={classes.list}>
      {pages.map(page => (
        <ListItem
          key={page.title}
          className={classes.listItem}
          onClick={toggleDrawer(false)}
        >
          <Link
            to={page.path}
            className={classes.link}
            activeClassName={classes.activeLink}
            partiallyActive={page.path!=="/"}
          >
            <Typography variant="subtitle2" className={classes.displayText}>
              {page.title}
            </Typography>
          </Link>
        </ListItem>
      ))}
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
            <Link to="/" className={classes.logoLink}>
              <KggLogo className={classes.logo} />
            </Link>

            <Hidden smUp>
              <IconButton
                onClick={toggleDrawer(!open)}
                edge="end"
                className={classes.menuButton}
              >
                <MenuIcon open={open}></MenuIcon>
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              <DesktopList />
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Hidden smUp>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {/* Spacing element to pad top of drawer with height of appbar */}
          <Toolbar />
          <MobileList />
        </Drawer>
      </Hidden>

      {/* Spacing element to pad top of page with height of appbar */}
      <Toolbar />
    </>
  )
}
