import * as React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Expandable } from './Expandable';

const styles = createStyles({
  expendableStyle: {
    width: '75%'
  },
  optionContainer: {
    alignItems: 'center'
  },
  option: {
    minHeight: '3rem',
    lineHeight: '3rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    color: '#008091',
    border: '2px solid #008091',
    borderRadius: '0.375rem',
    marginRight: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    minWidth: '180px',
    textAlign: 'center',
    fontWeight: 700,
    margin: '0 auto'
  }
});

interface Props {
  classes: { [className in keyof typeof styles]: string };
  style?: React.CSSProperties;
  title: string;
  titleStyle?: React.CSSProperties;
  options: {
    text: string;
    style?: React.CSSProperties;
  }[];
}

export const OptionsSelect = withStyles(styles)((props: Props) => {
  const { classes, title, titleStyle, style, options } = props;
  const [subTitle, setSubTitle] = useState('');
  return (
    <Expandable
      title={title}
      titleStyle={titleStyle}
      style={{ ...styles.expendableStyle, ...style }}
      subTitle={subTitle}
    >
      <Grid container className={classes.optionContainer}>
        {options.map((option) => (
          <Grid
            item
            xs={4}
            className={classes.option}
            style={option.style || {}}
            onClick={() => setSubTitle(option.text)}
          >
            {option.text}
          </Grid>
        ))}
      </Grid>
    </Expandable>
  );
});
