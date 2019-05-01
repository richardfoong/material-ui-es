import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { FormLabel } from '@material-ui/core';
import { ServiceActions } from '@ap-actions/';
import { ServicesState } from '@ap-reducers/';
import Search from './search';

const Styles = createStyles({
  root: {
    height: '16rem',
    background: 'radial-gradient(207.68px at 50% 18.87%, #006488 0%, #025572 100%), linear-gradient(180deg, #3E474D 0%, #292F33 100%);',
  },
  welcomeText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.125rem',
    lineHeight: '2rem',
    textAlign: 'center',
    margin: 'auto auto 0.3rem auto',
  },
  scanText: {
    fontFamily: 'AP Letter',
    fontSize: '2.5rem',
    lineHeight: '3.5rem',
    textAlign: 'center',
    color: 'white',
    margin: '0 auto auto auto',
  },
  search: {
    position: 'absolute',
    top: '19rem',
    left: '50%',
    width: '70%',
    transform: 'translateX(-50%)',
    borderRadius: '1rem',
  }
});

interface Props {
  classes: { [className in keyof typeof Styles]: string },
};

const BackgroundPanelComponent = ({ classes }: Props) => {
  return (
    <Grid container className={classes.root} direction='column'>
      <FormLabel className={classes.welcomeText}>Welcome to the new POS</FormLabel>
      <FormLabel className={classes.scanText}>Scan, Search, Sell</FormLabel>
    </Grid>
  )
};

interface MainProps extends Props {
  services: ServicesState;
  actions: typeof ServiceActions;
}

const Main = ({ classes, actions, services }: MainProps) => {
  return (
    <Grid container>
      <BackgroundPanelComponent classes={classes} />
      <Grid className={classes.search}>
        <Search styles={Styles.search} actions={actions} services={services} />
      </Grid>
    </Grid>
  )
};

export default withStyles(Styles)(Main);
