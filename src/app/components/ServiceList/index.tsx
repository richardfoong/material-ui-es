import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

const ServiceListComponent = ({classes}: any) => {

  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12}>
        <Grid container className={classes.demo} justify="center" spacing={16}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

ServiceListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const ServiceList = withStyles(styles)(ServiceListComponent)