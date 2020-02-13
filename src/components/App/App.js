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
import IconButton from "@material-ui/core/IconButton";
import {Menu} from "@material-ui/icons";
import {Scan} from "./Scan";
import {Results} from "./Results";
import fago from "./fagoW.png";

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
  RESULTS: 1,
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: 64,
    fontFamily: 'Montserrat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2.7em',
  },
  spacing: {
    flexGrow: 1,
  },
  container: {
    height: "calc(100vh - 64px)",
  },
}));

const App = () => {
  const classes = useStyles();

  const [step, setStep] = useState(STEPS.SCAN);
  const [barcode, setBarcode] = useState(null);

  return (
    <div className={styles.App}>
      <AppBar position="static">
        <Toolbar>
          <span className={classes.logo}>fago</span>
          <div className={classes.spacing}></div>
          <Button color="inherit" variant="contained">Connexion</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Container>
          {step === STEPS.SCAN && <Scan nextStep={(new_barcode) => {
            setStep(STEPS.RESULTS);
            setBarcode(new_barcode);
          }}/>}
          {step === STEPS.RESULTS && <Results barcode={barcode}/>}
        </Container>
      </div>
    </div>
  );
};