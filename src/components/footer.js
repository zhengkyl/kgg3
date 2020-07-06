import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({

}))

const Footer = () => {
  const classes = useStyles()


  return (
      <>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <div>
        Icons made by{" "}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </div>
      </>
  )
}

export default Footer
