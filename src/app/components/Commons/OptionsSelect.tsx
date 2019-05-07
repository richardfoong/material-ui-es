import * as React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import { ExpandMore, ExpandLess } from '../../icons';

const styles = createStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: '0.5rem 1.5rem 0 2rem',
    backgroundColor: 'white'
  },
  title: {
    color: '#39302a',
    fontSize: '1.69rem',
    fontWeight: 400,
    lineHeight: '90%',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    fontFamily: 'roboto'
  },
  optionContainer: {
    alignItems: 'center'
  },
  option: {
    height: '3rem',
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
  },
  extendIcon: {
    color: '#008091',
    fontSize: '2rem',
    alignSelf: 'center',
    marginLeft: 'auto',
    cursor: 'pointer'
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
  extendable?: boolean;
}

export const OptionsSelect = withStyles(styles)((props: Props) => {
  const { extendable, classes, title, titleStyle, style, options } = props;
  const [extended, setExtended] = useState(extendable);
  return (
    <Grid className={classes.root} container direction="column" style={style}>
      <Grid container direction="row">
        <FormLabel className={classes.title} style={titleStyle || {}}>
          {title}
        </FormLabel>
        {extendable ? (
          extended ? (
            <ExpandLess styles={styles.extendIcon} onClick={() => setExtended(!extended)} />
          ) : (
            <ExpandMore styles={styles.extendIcon} onClick={() => setExtended(!extended)} />
          )
        ) : null}
      </Grid>
      {extended ? (
        <Grid container className={classes.optionContainer}>
          {options.map((option) => (
            <Grid item xs={4} className={classes.option} style={option.style || {}}>
              {option.text}
            </Grid>
          ))}
        </Grid>
      ) : null}
    </Grid>
  );
});

OptionsSelect.defaultProps = {
  extendable: true
};
