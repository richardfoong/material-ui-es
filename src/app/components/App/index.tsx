import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { ServiceList } from "app-components/ServiceList";
import { Header } from "app-components/Header";
import { Search } from "app-components/Search";

export default () => (
  <Grid container direction='column'>
    <Header />
    <Search />
    <ServiceList />
  </Grid>
);
