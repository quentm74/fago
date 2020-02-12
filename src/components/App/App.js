import React, {useState, useEffect} from "react";
import styles from './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {Container} from "@material-ui/core";
import {Webcam} from "../Webcam/Webcam";
import IconButton from "@material-ui/core/IconButton";
import {Menu} from "@material-ui/icons";
import {Scan} from "./Scan";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2bce3e',
    },
    secondary: {
      main: "#323232",
    }
  },
});

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  );
};

const STEPS = Object.freeze({
  SCAN: 0,
  FIND_ME: 1,
  RESULTS: 2,
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    height: "calc(100vh - 64px)",
  },
}));

const App = () => {
  const classes = useStyles();

  const [step, setStep] = useState(STEPS.SCAN);

  return (
    <div className={styles.App}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="secondary">
            <Menu/>
          </IconButton>
          <Typography variant="h6" className={classes.title} color="secondary">
            Fago
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Container>
          {step === STEPS.SCAN && <Scan/>}
        </Container>
      </div>
    </div>
  );
};