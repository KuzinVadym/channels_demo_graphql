import React from 'react';

import Channels from "../Channels";
import Favorites from "../Favorites";

//styling
import useStyles from '../App/style';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        subtitle1: {
            fontFamily: 'Roboto',
            fontSize: 24,
            fontWeight: 500,
        },
        subtitle2: {
            fontFamily: 'Hepta Slab',
            fontSize: 24,
            fontWeight: 500,
        },
    },
});

const App = () => {
  const classes = useStyles();
  return(
      <ThemeProvider theme={theme}>
          <div className={classes.main}>
              <Channels />
              <Favorites />
          </div>
      </ThemeProvider>
  );
};

export default App;
