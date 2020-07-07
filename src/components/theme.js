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
      fontFamily:`"Heebo", "Helvetica", "Arial", sans-serif`,
      fontFamilyMono:`"Inconsolata", "Lucida Console", "Monaco", sans-serif`,
      h1:{
        fontWeight:500,
      },
      h2:{
        fontFamily:`"Inconsolata", "Lucida Console", "Monaco", sans-serif`,
      },
      h4:{
        fontFamily:`"Inconsolata", "Lucida Console", "Monaco", sans-serif`,
      },
      h6:{
        fontFamily:`"Inconsolata", "Lucida Console", "Monaco", sans-serif`,
      }
    }
  })  
)

export default theme
