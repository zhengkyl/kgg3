import React, { useState } from "react"

import clsx from "clsx"
// import WaveSVG from "../assets/svgs/wave.svg"
import WaveSVG from "../assets/svgs/wave.min.svg"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  waveBlockContainer: {
    backgroundColor: "#1f1f1f",
    flex:1,
  },
  waveBlock: {
    display: "block",
    fill: "#1f1f1f",
    borderBottom: '1px solid #1f1f1f'
  },
  flipY: {
    transform: "scaleY(-1)",
  },
}))

const WaveBlock = ({children, flatTop, flatBottom}) => {
  const classes = useStyles()
  return (
    <>
      {flatTop || <WaveSVG className={classes.waveBlock} />}
      <div className={classes.waveBlockContainer}>{children}</div>
      {flatBottom || <WaveSVG className={clsx(classes.waveBlock, classes.flipY)} />}
      
    </>
  )
}

export default WaveBlock
