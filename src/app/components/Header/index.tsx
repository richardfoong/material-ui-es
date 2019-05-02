import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import { Logo, Search } from '../../icons';
import { CartIcon } from '../../icons';

const styles = createStyles({
  root: {
    height: '4rem',
    backgroundColor: '#292D33',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.0393739)',
    width: '100%',
    alignItems: 'center'
  },
  logo: {
    margin: '0 1rem'
  },
  labelText: {
    color: 'white',
    lineHeight: '4rem',
    margin: '0 1rem',
    fontSize: '1.125rem'
  },
  rightIconPanel: {
    width: 'auto',
    margin: '0 1rem 0 auto'
  }
});

const HeaderComponent = ({ classes }: any) => {
  return (
    <Grid container className={classes.root} direction="row">
      <Logo className={classes.logo} />
      <FormLabel className={classes.labelText}>Cart</FormLabel>
      <FormLabel className={classes.labelText}>Transactions</FormLabel>
      <FormLabel className={classes.labelText}>Cash</FormLabel>
      <Grid
        container
        className={classes.rightIconPanel}
        direction="row"
        alignContent="flex-end"
        spacing={8}
      >
        <Search />
        <CartIcon />
      </Grid>
    </Grid>
  );
};

export const Header = withStyles(styles)(HeaderComponent);
