import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import { Menu, Logo, Search } from '../../icons';
import { Cart } from '../../icons';

const styles = createStyles({
  root: {
    height: '4rem',
    backgroundColor: '#034C8F',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.0393739)',
    width: '100%',
    alignItems: 'center',
    paddingLeft: '.5rem'
  },
  logo: {
    margin: '0 1rem'
  },
  labelText: {
    color: 'white',
    lineHeight: '4rem',
    margin: '0 1rem',
    fontSize: '1rem'
  },
  rightIconPanel: {
    width: 'auto',
    padding: '0rem 0rem',
    margin: '0 1rem 0 auto'
  }
});

const HeaderComponent = ({ classes }: any) => {
  return (
    <Grid container className={classes.root} direction="row">
      <Menu className={classes.logo} />
      <Logo className={classes.logo} />
      <FormLabel className={classes.labelText}>12:00am Tuesday 2 April 2019. WCC: 350748</FormLabel>
      <Grid
        container
        className={classes.rightIconPanel}
        direction="row"
        alignContent="flex-end"
        spacing={24}
      >
        <Search className={classes.logo} />
        <Cart className={classes.logo} />
      </Grid>
    </Grid>
  );
};

export const Header = withStyles(styles)(HeaderComponent);
