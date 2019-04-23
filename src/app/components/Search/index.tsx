import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';

const BackgroundPanelStyles = createStyles({
  root: {
    height: '16rem',
  }
});

interface Props { classes: { [className in keyof typeof BackgroundPanelStyles]: string } };

const BackgroundPanelComponent = ({ classes }: Props) => {
  return (
    <Grid container className={classes.root}>

    </Grid>
  )
};

export const BackgroundPanel = withStyles(BackgroundPanelStyles)(BackgroundPanelComponent);
