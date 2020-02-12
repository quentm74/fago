import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import WebcamL from "react-webcam";

const useStyles = makeStyles(theme => ({
  Webcam: {
    backgroundColor: '#eee',
    width: '55vh',
    height: '55vh',
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 40,
    fontSize: '1.4em',
    padding: "20px 35px",
  },
}));

export const Webcam = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <WebcamL videoConstraints={{deviceId: -1}} ref={null}/>
    );
  }

  return (
    <div className={classes.Webcam}>
      <Button className={classes.btn} variant="contained" color="primary" onClick={_ => setActive(true)}>Commencer à scanner</Button>
    </div>
  );
};

