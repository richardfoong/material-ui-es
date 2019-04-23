import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { ServiceList } from "app/components/ServiceList";
import { Header } from "app/components/Header";
import { SearchMain } from "app/components/Search";

export default () => (
  <Grid container direction='column'>
    <Header />
    <SearchMain />
    <ServiceList />
  </Grid>
);
