import React from "react";
import Typography from "@material-ui/core/Typography";
import {Webcam} from "./Webcam";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10vh',
  },
}));

export const Scan = ({nextStep}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">Scannez pour recycler !</Typography>
      <Typography variant="subtitle1">Prenez une photo du code barre de votre produit, nous nous occupons du reste !</Typography>
      <Webcam nextStep={nextStep}/>
    </div>
  );
};