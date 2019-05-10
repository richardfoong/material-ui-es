import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import { Menu } from '../../icons';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { Logo, SearchMaterialIcon, CartIcon } from '../../icons';

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
  },
  searchIcon: {
    color: 'white',
  }
});

const HeaderComponent = ({
  classes
}: {
  classes: { [className in keyof typeof styles]: string };
}) => {
  return (
    <Grid container className={classes.root} direction="row">
      <Logo styles={styles.logo} />
      <FormLabel className={classes.labelText}>12:00am Tuesday 2 April 2019. WCC: 350748</FormLabel>
      <Link to="/">
        <MenuItem className={classes.labelText}>Home</MenuItem>
      </Link>
      <Link to="/demo/OptionsSelect">
        <MenuItem className={classes.labelText}>Common Demo</MenuItem>
      </Link>
      <Link to="/demo">
        <MenuItem className={classes.labelText}>Rich's Demo</MenuItem>
      </Link>
      <Grid
        container
        className={classes.rightIconPanel}
        direction="row"
        alignContent="flex-end"
        spacing={24}
      >
        <SearchMaterialIcon styles={styles.searchIcon} />
        <CartIcon />
      </Grid>
    </Grid>
  );
};

export const Header = withStyles(styles)(HeaderComponent);
