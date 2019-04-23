import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { ServiceList } from "@ap-components/ServiceList";
import Header from "@ap-components/Header";

export default () => (
  <Grid direction='column'>
    <Header />
    <ServiceList />
  </Grid>
);
