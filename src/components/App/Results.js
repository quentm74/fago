import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import {Check, Delete, MyLocation, Place, Sync} from "@material-ui/icons";
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
  gridIcons: {
    display: 'flex',
  },
  gridItemtype: {
    display: 'flex',
    flexDirection: 'column',
  },
  paperIcon: {
    height: 80,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2bce3e',
    marginRight: 10,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: -5,
    width: '100%',
  },
  paperInfos: {
    padding: 20,
    width: '100%',
  },
  deleteY: {
    color: 'yellow',
  },
}));

const LOCALIZATION = Object.freeze({
  NONE: 0,
  RENNES: 1,
  DEFAULT: 2,
});

export const Results = () => {
  const classes = useStyles();

  const [localization, setLocalization] = useState(LOCALIZATION.RENNES);

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
      {localization === LOCALIZATION.NONE && (
        <div className={classes.imgContainer}>
          <img src={fago} alt="fago"/>
        </div>
      )}
      {localization === LOCALIZATION.RENNES && (
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={2} className={classes.gridItemtype}>
            <Typography color="primary" variant="h4">Bouteille</Typography>
          </Grid>
          <Grid item xs={3} className={classes.gridIcons}>
            <Divider orientation="vertical"/>
            <div className={classes.icons}>
              <Paper className={classes.paperIcon}>
                <Sync fontSize="large" className={classes.sync}/>
              </Paper>
              <Paper className={classes.paperIcon}>
                <Delete fontSize="large" className={classes.deleteY}/>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={7} className={classes.gridItem}>
            <Paper className={classes.paperInfos}>
              <Typography variant="h5">Informations complémentaires</Typography>
              <Typography variant="subtitle1">Les bouteilles en plastique transparentes ou opaques se recyclent toutes
                et se
                trient bien vidées avec leur bouchon. Vous pouvez les trier telles quelles ou aplaties dans leur
                longueur et non à la verticale. Exemples : les bouteilles d'eau, de lait, de jus de fruit, de sodas, de
                yaourt à boire, d'huile, de vinaigre mais également toutes les bouteilles en plastique de lessive
                liquide, d'assouplissant, de nettoyant pour le sol et d'eau de javel (seule bouteille de produit
                dangereux qui est accepté à condition d'être bien vidée).
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} className={classes.gridItemtype}>
            <Typography color="primary" variant="h4">Bouchon</Typography>
          </Grid>
          <Grid item xs={3} className={classes.gridIcons}>
            <Divider orientation="vertical"/>
            <div className={classes.icons}>
              <Paper className={classes.paperIcon}>
                <Sync fontSize="large" className={classes.sync}/>
              </Paper>
              <Paper className={classes.paperIcon}>
                <Delete fontSize="large" className={classes.deleteY}/>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={7} className={classes.gridItem}>
            <Paper className={classes.paperInfos}>
              <Typography variant="h5">Informations complémentaires</Typography>
              <Typography variant="subtitle1">Rennes soutient l'association "Un bouchon Un sourire" depuis 2000. Donnez
                vos bouchons en plastique ou liège à un point de collecte, l'association les recyclera et reversera les
                fonds à des projets pour les personnes handicapées. Vous trouverez un point de collecte à la biocoop 32
                Boulevard de Groslay
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      )}
      {/*<ul><Typography variant="h6">Bouteille plastique: A TRIER - déposer dans une poubelle jaune</Typography></ul>*/}
      {/*<ul><Typography variant="h6">Bouteille plastique: A TRIER - déposer dans une poubelle jaune</Typography></ul>*/}
    </div>
  );
};