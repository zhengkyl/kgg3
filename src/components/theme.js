import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
// import { light } from "@material-ui/core/styles/createPalette"

const theme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      type:'dark',
      primary:{
        main:'#FFE680',
      },
      background:{
        default:'#262626',
        paper:'#292929'
      }
    },
    typography:{
      fontFamily:`"Inconsolata", "Lucida Console", "Monaco", sans-serif`,
      h1:{
        fontFamily:`"Heebo", "Helvetica", "Arial", sans-serif`,
        fontWeight:500,
      },
      h2:{
        fontWeight:500,
      },
      h3:{
        fontFamily:`"Heebo", "Helvetica", "Arial", sans-serif`,
        fontWeight:500,
      },
      h4:{
        fontWeight:500,
      },
      h5:{
        fontFamily:`"Heebo", "Helvetica", "Arial", sans-serif`,
        fontWeight:500,
      },
      h6:{
        fontWeight:500,
      }
    }
  })  
)

export default theme
