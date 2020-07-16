import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({

}))

const Footer = () => {
  const classes = useStyles()


  return (
      <>

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
        <a href='https://www.freepik.com/free-vector/people-jumping-youth-day-design_8648097.htm'>People vector created by freepik - www.freepik.com</a>
        <a href="https://www.freepik.com/free-vector/business-woman-with-coffee-posting-photo-internet_5481388.htm">Business vector created by pikisuperstar - www.freepik.com</a>
      </div>
      </>
  )
}

export default Footer
