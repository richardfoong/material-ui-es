import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { ServiceList } from '../ServiceList';
import { SearchMain } from '../Search';
import { ServicesState } from '../../reducers';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { ServiceActions } from '../../actions';

export interface HomeProps {
  services: ServicesState;
  actions: typeof ServiceActions;
}

const styles = createStyles({
  root: {
    backgroundColor: '#F3F4F5'
  }
});

interface StyleProps {
  classes: { [className in keyof typeof styles]: string };
}

export default withStyles(styles)((props: HomeProps & StyleProps) => (
  <Grid container direction="column" className={props.classes.root}>
    <SearchMain actions={props.actions} services={props.services} />
    <ServiceList services={props.services} actions={props.actions} />
  </Grid>
));
