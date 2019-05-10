import * as React from 'react';
import { useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles, createStyles } from '@material-ui/core/styles';

// @ts-ignore
import dragula from 'react-dragula';
import 'react-dragula/dist/dragula.min.css';

import * as PropTypes from 'prop-types';
import { ServicesState } from 'app/reducers';
import { ServiceActions } from '../../actions';
import { ServiceModel } from '../../models';
import RootRef from '@material-ui/core/RootRef';

const styles = createStyles({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F3F4F5',
    maxWidth: '700px',
    width: '70%',
    alignSelf: 'center',
    marginTop: '2rem'
  },
  parent: {
    alignItems: 'center',
    margin: 'auto'
  },
  paper: {
    height: '7rem',
    backgroundColor: 'white',
    margin: 'auto',
    marginBottom: '1rem',
    marginTop: '1rem',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
    borderRadius: '60px',
    maxWidth: '114px'
  },
  item: {},
  itemLabel: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 'auto',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: '#382F2D'
  },
  itemIcon: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});

interface Props {
  services: ServicesState;
  classes: { [className in keyof typeof styles]: string };
  actions: typeof ServiceActions;
}

const ServiceListComponent = ({ actions, classes, services }: Props) => {
  useEffect(() => {
    dragula([containerRef.current]);
  }, []);

  const containerRef = useRef(null);
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.parent} spacing={16}>
        <RootRef rootRef={containerRef}>
          <Grid container spacing={16} className="this-is-container">
            {services.filtered.map((value: ServiceModel) => (
              <Grid key={value.id} item className={classes.item} xs={6} sm={4} md={3} xl={4}>
                <Grid
                  container
                  className={classes.paper}
                  direction="column"
                  alignItems="center"
                  onClick={() => actions.addServiceOnSearch(value)}
                >
                  <value.icon styles={styles.itemIcon} />
                  <FormLabel className={classes.itemLabel}>{value.text}</FormLabel>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </RootRef>
      </Grid>
    </Grid>
  );
};

ServiceListComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export const ServiceList = withStyles(styles)<any>(ServiceListComponent);
