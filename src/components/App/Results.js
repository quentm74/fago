import React from "react";
import Typography from "@material-ui/core/Typography";
import {Webcam} from "./Webcam";
import {makeStyles} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10vh',
  },
  locationInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  }
}));

export const Results = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">Trouvé: Nettoyant multi surface</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={classes.paper}>
            <Typography variant="h5">Localisez moi</Typography>
            <Paper component="form" className={classes.locationInput}>
              <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                <DirectionsIcon />
              </IconButton>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.paper}>
            <Typography variant="h5">OU</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <Typography variant="h5">Resultats généraux</Typography>
              <ul><Typography variant="h6">Bouteille plastique: A TRIER - déposer dans une poubelle jaune</Typography></ul>
              <ul><Typography variant="h6">Bouteille plastique: A TRIER - déposer dans une poubelle jaune</Typography></ul>
              
          </div>
        </Grid>
      </Grid>
    </div>
  );
};