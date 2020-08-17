import React, { useState } from "react"

import clsx from "clsx"
// import WaveSVG from "../assets/svgs/wave.svg"
import WaveSVG from "../assets/svgs/min/wave.min.svg"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  waveBlockContainer: {
    backgroundColor: "#1f1f1f",
  },
  waveBlock: {
    display: "block",
    fill: "#1f1f1f",
    borderBottom: "1px solid #1f1f1f",
  },
  flipY: {
    transform: "scaleY(-1)",
  },
}))

const WaveBlock = ({
  children,
  flatTop,
  flatBottom,
  topBackgroundColor,
  bottomBackgroundColor,
}) => {
  const classes = useStyles()
  return (
    <>
      {flatTop || (
        <WaveSVG
          className={classes.waveBlock}
          style={{ backgroundColor: topBackgroundColor }}
        />
      )}
      <div className={classes.waveBlockContainer}>{children}</div>
      {flatBottom || (
        <WaveSVG
          className={clsx(classes.waveBlock, classes.flipY)}
          style={{ backgroundColor: bottomBackgroundColor }}
        />
      )}
    </>
  )
}

export default WaveBlock
