import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';


const styles = () => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    // backgroundColor: 'red',
  },
  parent: {
    alignItems: 'center',
    margin: 'auto',
  },
  paper: {
    height: 140,
    // maxWidth: 100,
    backgroundColor: 'red',
    margin: 'auto'
  },
  items: {
  },
  item: {
  }
});

const itemsArray = [1,2,3,4,5,6,7,8,9];

const ServiceListComponent = ({classes}: any) => {
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.parent} spacing={8}>
          {itemsArray.map(value => (
            <Grid key={value} item className={classes.item} xs={4} sm={4} md={3} xl={4}>
              <Paper className={classes.paper} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

ServiceListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const ServiceList = withStyles(styles)(ServiceListComponent)