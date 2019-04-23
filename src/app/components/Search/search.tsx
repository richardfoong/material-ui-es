import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const Styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

interface StyleProps { classes: { [className in keyof typeof Styles]: string } };

interface Props {styles : React.CSSProperties};

function CustomizedInputBase(props : StyleProps & Props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1} style={props.styles}>
      <IconButton className={classes.iconButton} aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <InputBase className={classes.input} placeholder="Enter key or search item" />
      <Divider className={classes.divider} />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}

export default withStyles(Styles)(CustomizedInputBase);
