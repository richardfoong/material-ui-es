import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles, createStyles } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';
import { RootState } from 'app/reducers';
import { CartIcon } from '@ap-icons/';

const styles = createStyles({
  root: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: 'lightgray',
    width: '70%',
    alignSelf: 'center',
    marginTop: '3rem',
  },
  parent: {
    alignItems: 'center',
    margin: 'auto',
  },
  paper: {
    height: '7rem',
    backgroundColor: 'white',
    margin: 'auto',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: '3px',
  },
  item: {
  },
  itemLabel: {
    marginBottom: 'auto',
    fontFamily: 'AP Letter',
    fontSize: '1.125rem',
    lineHeight: '1.25rem',
    textAlign: 'center',
    color: '#382F2D',
  },
  itemIcon: {
    marginTop: 'auto',
    marginBottom: '0.5rem',
  }
});

interface Props {
  services: RootState.ServicesState;
  classes: { [className in keyof typeof styles]: string };
}

const ServiceListComponent = ({ classes, services }: Props) => {
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.parent} spacing={16}>
        {services.filtered.map(value => (
          <Grid key={value.id} item className={classes.item} xs={6} sm={4} md={3} xl={4}>
            <Grid container className={classes.paper} direction="column" alignItems='center'>
              <CartIcon {...styles.itemIcon} />
              <FormLabel className={classes.itemLabel}>{value.text}</FormLabel>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

ServiceListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const ServiceList = withStyles(styles)<any>(ServiceListComponent);