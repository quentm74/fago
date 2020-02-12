import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import WebcamL from "react-webcam";

const useStyles = makeStyles(theme => ({
  Webcam: {
    backgroundColor: '#eee',
    width: 400,
    height: 300,
    marginTop: 50,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 40,
    fontSize: '1.4em',
    padding: "20px 35px",
  },
  btn_relative: {
    borderRadius: 40,
    fontSize: '1.4em',
    padding: "20px 45px",
    position: 'relative',
    top: -110,
  },
}));

export const Webcam = ({nextStep}) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <React.Fragment>
      {active ? (
        <React.Fragment>
        <div className={classes.Webcam}>
    
          <WebcamL 
          videoConstraints={{
            height:1280,
            width:720,
            deviceId: -1}} 
          ref={null}
          height={300}
          width={400}
          />
          </div>
          <Button className={classes.btn_relative} variant="contained" color="primary"
                  onClick={nextStep}>Scan</Button>
                  
        </React.Fragment>
      ) : (
        
        <div className={classes.Webcam}>
        <Button className={classes.btn} variant="contained" color="primary" onClick={_ => setActive(true)}>Commencer à
          scanner</Button>
          </div>
      )}
    </React.Fragment>
  );
};

