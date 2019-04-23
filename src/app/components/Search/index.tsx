import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { FormLabel } from '@material-ui/core';

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
    margin: 'auto',
  },
  scanText: {
    fontFamily: 'AP Letter',
    fontSize: '2.5rem',
    lineHeight: '3.5rem',
    textAlign: 'center',
  }
});

interface Props { classes: { [className in keyof typeof Styles]: string } };

const BackgroundPanel = ({ classes }: Props) => {
  return (
    <Grid container className={classes.root} direction='column'>
      <FormLabel className={classes.welcomeText}>Welcome to the new POS</FormLabel>
      <FormLabel className={classes.scanText}>Scan, Search, Sell</FormLabel>
    </Grid>
  )
};

const SearchComponent = ({ classes }: Props) => {
  return (
    <BackgroundPanel classes={classes} />
  )
};

export const Search = withStyles(Styles)(SearchComponent);
