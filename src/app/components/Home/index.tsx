import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { ServiceList } from "app/components/ServiceList";
import { Header } from "app/components/Header";
import { SearchMain } from "app/components/Search";
import { RootState } from 'app/reducers';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { ServiceActions } from '@ap-actions/';

export interface HomeProps {
  services: RootState.ServicesState;
  actions: ServiceActions;
}

const styles = createStyles({
  root: {
    backgroundColor: 'lightgray',
  }
});

interface StyleProps { classes: { [className in keyof typeof styles]: string } };

export default withStyles(styles)((props: HomeProps & StyleProps) => (
  <Grid container direction='column' className={props.classes.root}>
    <Header />
    <SearchMain actions={props.actions} services={props.services} />
    <ServiceList services={props.services} actions={props.actions} />
  </Grid>
));
