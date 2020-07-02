import {
  AppBar,
  Drawer,
  Divider,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  Slide,
  useScrollTrigger,
  Typography,
  Hidden,
} from "@material-ui/core"
import { Link } from "gatsby"
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "./menuIcon"
import clsx from "clsx"
import KggLogo from "../images/kgg_yellow.svg"
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1400,
    justifyContent: "center",
    flexDirection:'row',
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
    justifyContent:'space-between',
    flexGrow:1,
    maxWidth: theme.breakpoints.width("md"),
  },

  menuButton: {
    marginTop: "auto",
    marginBottom: "auto",
    padding: theme.spacing(3),
  },
}))

const pages = [
  { title: "Home", path: "/" },
  { title: "News", path: "/news" },
  { title: "Contact", path: "/contact" },
  { title: "Store", path: "/store" },
]

function HideOnScroll(props) {
  const { children, window } = props
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

  const mobileList = () => (
    <List className={classes.list}>
      {pages.map(page => (
        <Typography variant="h5" component="li">
          <ListItem
            key={page.title}
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
  const desktopList = () => (
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
          >
            <Typography variant="subtitle2">{page.title}</Typography>
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

            <Hidden xsDown>{desktopList()}</Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Hidden smUp>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {/* Spacing element to pad top of drawer with height of appbar */}
          <Toolbar />
          {mobileList()}
        </Drawer>
      </Hidden>

      {/* Spacing element to pad top of page with height of appbar */}
      <Toolbar />
    </>
  )
}
