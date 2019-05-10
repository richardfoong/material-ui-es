import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { FormLabel } from '@material-ui/core';
import { ServiceActions } from '@ap-actions/';
import { ServicesState } from '@ap-reducers/';
import Search from './search';

const Styles = createStyles({
  root: {
    height: '15.5rem',
    background: 'linear-gradient(180deg, #034C8F 0%, #090E48 100%)'
  },
  welcomeText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.125rem',
    lineHeight: '2rem',
    textAlign: 'center',
    margin: 'auto auto 0.3rem auto'
  },
  scanText: {
    fontFamily: 'AP Letter',
    fontSize: '2.5rem',
    lineHeight: '3.5rem',
    textAlign: 'center',
    color: 'white',
    margin: '6rem 1rem auto 1rem'
  },
  search: {
    position: 'absolute',
    top: '18rem',
    left: '50%',
    maxWidth: '700px',
    width: '65%',
    transform: 'translateX(-50%)',
    borderRadius: '1rem',
    fontFamily: 'Roboto',
    color: '#736D6C'
  },

  categoryDivider: {
    display: 'flex',
    height: '2.5rem',
    color: '#535F67',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    borderBottom: '.5px solid #C6C6C6',
    width: '65%',
    maxWidth: '650px',
    textAlign: 'left',
    marginTop: '4.6rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

interface Props {
  classes: { [className in keyof typeof Styles]: string };
}

const BackgroundPanelComponent = ({ classes }: Props) => {
  return (
    <Grid container className={classes.root} direction="column">
      <FormLabel className={classes.scanText}>Hi Anne, Welcome to POST+</FormLabel>
    </Grid>
  );
};

interface MainProps extends Props {
  services: ServicesState;
  actions: typeof ServiceActions;
}

const Main = ({ classes, actions, services }: MainProps) => {
  return (
    <Grid container>
      <BackgroundPanelComponent classes={classes} />
      <FormLabel className={classes.categoryDivider}>Popular services</FormLabel>
      <Grid className={classes.search}>
        <Search styles={Styles.search} actions={actions} services={services} />
      </Grid>
    </Grid>
  );
};

export default withStyles(Styles)(Main);
