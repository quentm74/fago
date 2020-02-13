import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import {Check, MyLocation, Place} from "@material-ui/icons";
import fago from "./fago.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  locationInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  found: {
    height: '5vh',
    width: '100%',
    display: 'flex',
    paddingTop: '8vh',
    paddingBottom: 'calc(8vh - 40px)',
  },
  foundText: {
    marginLeft: 30,
    marginRight: 50,
  },
  grid: {
    height: '10vh',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 28,
    margin: 4,
  },
  dividerContainer: {
    display: 'block',
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
  },
  generals: {
    width: '100%',
    backgroundColor: '#eeeeee',
  },
  imgContainer: {
    height: "calc(50vh - 64px)",
    overflow: 'hidden',
    "& > img": {
      height: '100%',
    }
  },
}));

export const Results = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.found}>
        <Typography variant="h2" color="primary" className={classes.foundText}>
          <Check fontSize="large" color="primary"/> Trouvé !
        </Typography>
        <Typography variant="h2">Nettoyant multi surface</Typography>
      </div>
      <div className={classes.dividerContainer}>
        <Divider orientation="horizontal"/>
      </div>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={5} className={classes.gridItem}>
          <Paper component="form" className={classes.locationInput}>
            <IconButton color="primary" className={classes.iconButton} aria-label="menu">
              <Place/>
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Chercher votre ville"
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon/>
            </IconButton>
            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
              <MyLocation/>
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <Typography variant="h5">OU</Typography>
        </Grid>
        <Grid item xs={5} className={classes.gridItem}>
          <Button variant="contained" className={classes.generals}>Resultats généraux</Button>
        </Grid>
      </Grid>
      <div className={classes.dividerContainer}>
        <Divider orientation="horizontal"/>
      </div>
      <div className={classes.imgContainer}>
        <img src={fago} alt="fago"/>
      </div>
      {/*<ul><Typography variant="h6">Bouteille plastique: A TRIER - déposer dans une poubelle jaune</Typography></ul>*/}
      {/*<ul><Typography variant="h6">Bouteille plastique: A TRIER - déposer dans une poubelle jaune</Typography></ul>*/}
    </div>
  );
};