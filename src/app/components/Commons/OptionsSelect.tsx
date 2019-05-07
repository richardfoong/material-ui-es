import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';

const styles = createStyles({
  root: {

  },
  title: {
    color: '#39302a',
    fontSize: '1.69rem',
    fontWeight: 400,
    lineHeight: '90%',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    fontFamily: 'roboto',
  }
});

interface Props {
  classes: { [className in keyof typeof styles]: string };
  title: string;
  options?: {
    text: string;
    style?: React.CSSProperties;
  }
}

export const OptionsSelect = withStyles(styles)((props: Props) => {
  const { classes, title } = props;
  return (<Grid >
    <FormLabel className={classes.title}>{title}</FormLabel>
  </Grid>);
});
