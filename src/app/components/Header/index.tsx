import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

export namespace Header {
  export interface Props {
  }
}

const styles = () => ({
  root: {
    height: '4rem',
    backgroundColor: '#292D33',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.0393739)',
    width: '100%',
  }
});

const Header = ({ classes }: any) => {
  return (
    <Grid className={classes.root} xs={12} sm={12} md={12} lg={12} xl={12}>

    </Grid>
  )
};

export default withStyles(styles)(Header);
