import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { ServiceActions } from '@ap-actions/';
import Select from 'react-select';


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

interface Props { styles: React.CSSProperties, actions: ServiceActions };

function CustomizedInputBase(props: StyleProps & Props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1} style={props.styles}>
      <IconButton className={classes.iconButton} aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <InputBase className={classes.input} placeholder="Enter key or search item"
        onChange={(event) => {
          props.actions.filterService(event.target.value);
        }} />
      <Divider className={classes.divider} />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Search = (props: StyleProps & Props) => {
  const [selectedOption, setSelectedOption] = React.useState(options);
  return (
    <Select
      value={selectedOption}
      // styles={{ control: () => ({ width: '80%' }) }}
      isMulti
      defaultValue={[options[0], options[1]]}
      onChange={(selectedOption: any) => {
        setSelectedOption({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }}
      options={options}
    />);
};

export default withStyles(Styles)(Search);
// export default withStyles(Styles)(CustomizedInputBase);
