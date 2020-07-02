import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

/*
 This is an animated Hamburger Menu Icon.
 */

const useStyles = makeStyles((theme) => ({
  open : {
    position:'absolute',
    width: 25,
    height: 3,
    backgroundColor: theme.palette.text.primary,
    transition: `0.225s`,
    '&::before': {
      position:'absolute',
      content:"''",
      display:'block',
      top:-7,
      width: 25,
      height: 3,
      backgroundColor: theme.palette.text.primary,
      transition: `0.225s`,
    },
    '&::after': {
      position:'absolute',
      content:"''",
      display:'block',
      top:7,
      width: 25,
      height: 3,
      backgroundColor: theme.palette.text.primary,
      transition: `0.225s`,
    },
  },
  exit: {
    
    backgroundColor:'transparent',
    '&::before':{
      WebkitTransform: `translate(0,7px) rotate(45deg)`,
      transform: `translate(0,7px) rotate(45deg)`,
    },
    '&::after':{
      WebkitTransform: `translate(0,-7px) rotate(-45deg)`,
      transform: `translate(0,-7px) rotate(-45deg)`,
    }
  },
}));

export default function MenuIcon({ open }) {
  const classes = useStyles();
  return (
      <div className={clsx(classes.open, open && classes.exit)}></div>
  );
}
