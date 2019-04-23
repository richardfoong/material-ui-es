import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { ServiceList } from "app-components/ServiceList";
import { Header } from "app-components/Header";

export default () => (
  <Grid direction='column'>
    <Header />
    <ServiceList />
  </Grid>
);
