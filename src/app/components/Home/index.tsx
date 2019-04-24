import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { ServiceList } from "app/components/ServiceList";
import { Header } from "app/components/Header";
import { SearchMain } from "app/components/Search";
import { RootState } from 'app/reducers';


export interface HomeProps {
  services: RootState.ServicesState
}

export default (props: HomeProps) => (
  <Grid container direction='column'>
    <Header />
    <SearchMain />
    <ServiceList services={props.services} />
  </Grid>
);
