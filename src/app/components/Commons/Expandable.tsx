import * as React from 'react';
import { useState, StatelessComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import FormLabel from '@material-ui/core/FormLabel';
import { ExpandMore, ExpandLess } from '../../icons';

const styles = createStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0.5rem 1.5rem 0 2rem',
    backgroundColor: 'white',
    width: '75%',
    margin: 'auto',
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
  subTitle: {
    margin: 'auto',
    color: '#00ac3e',
    fontSize: '1rem',
  },
  extendIcon: {
    color: '#008091',
    fontSize: '2rem',
    alignSelf: 'center',
    marginLeft: 'auto',
    cursor: 'pointer'
  },
  collapse: {
    width: '80%'
  }
});

interface Props {
  classes: { [className in keyof typeof styles]: string };
  style?: React.CSSProperties;
  title: string;
  titleStyle?: React.CSSProperties;
  collapseContainerStyle?: React.CSSProperties;
  subTitle?: string;
  subTitleStyle?: React.CSSProperties;
}

export const ExpandableComponent: StatelessComponent<Props> = (props) => {
  const {
    classes,
    title,
    titleStyle,
    style,
    children,
    collapseContainerStyle,
    subTitle,
    subTitleStyle
  } = props;
  const [extended, setExtended] = useState(true);

  return (
    <Grid className={classes.root} container direction="column" style={style}>
      <Grid container direction="row">
        <FormLabel className={classes.title} style={titleStyle || {}}>
          {title}
        </FormLabel>
        <FormLabel className={classes.subTitle} style={subTitleStyle}>
          {subTitle}
        </FormLabel>
        {extended ? (
          <ExpandLess
            styles={styles.extendIcon}
            onClick={() => {
              setExtended(!extended);
            }}
          />
        ) : (
          <ExpandMore
            styles={styles.extendIcon}
            onClick={() => {
              setExtended(!extended);
            }}
          />
        )}
      </Grid>
      <Collapse
        className={classes.collapse}
        style={collapseContainerStyle}
        in={extended}
        timeout={500}
      >
        {children}
      </Collapse>
    </Grid>
  );
};

ExpandableComponent.defaultProps = {
  collapseContainerStyle: {},
  subTitle: '',
  subTitleStyle: {},
};

export const Expandable = withStyles(styles)(ExpandableComponent);
