import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';


const styles = (theme:any) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: 'red',
  },
  parent: {
    alignItems: 'center',
    margin: 'auto',
  },
  paper: {
    height: 140,
    width: 100,
    margin: 'auto'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  items: {
  },
  item: {
  }
});

const itemsArray = [1,2,3,4,5,6,7,8,9];

const ServiceListComponent = ({classes}: any) => {

  return (
    <Grid container className={classes.root} spacing={8}>
      <Grid item className={classes.parent} xs={8}>
        <Grid container className={classes.items} justify="center" spacing={8}>
          {itemsArray.map(value => (
            <Grid key={value} item className={classes.item} xs={6} md={4} xl={3}>
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