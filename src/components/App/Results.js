import React from "react";
import Typography from "@material-ui/core/Typography";
import {Webcam} from "./Webcam";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10vh',
  },
}));

export const Results = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">Results</Typography>
    </div>
  );
};