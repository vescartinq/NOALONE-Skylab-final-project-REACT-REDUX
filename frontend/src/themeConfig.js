import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const themeConfig = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
  },
});

export default themeConfig;
