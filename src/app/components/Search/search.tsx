import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import { ServiceActions } from '@ap-actions/';
import Select from 'react-select';
import { RootState } from '@ap-reducers/';

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

interface Props { styles: React.CSSProperties, actions: ServiceActions, services: RootState.ServicesState };

// function CustomizedInputBase(props: StyleProps & Props) {
//   const { classes } = props;

//   return (
//     <Paper className={classes.root} elevation={1} style={props.styles}>
//       <IconButton className={classes.iconButton} aria-label="Menu">
//         <MenuIcon />
//       </IconButton>
//       <InputBase className={classes.input} placeholder="Enter key or search item"
//         onChange={(event) => {
//           props.actions.filterService(event.target.value);
//         }} />
//       <Divider className={classes.divider} />
//       <IconButton className={classes.iconButton} aria-label="Search">
//         <SearchIcon />
//       </IconButton>
//     </Paper>
//   );
// }

const Search = (props: StyleProps & Props) => {
  const allServices = props.services.all.map(service => ({ value: service.id, label: service.text }));
  const searchedServices = props.services.searchedServices.map(s => ({ value: s.id, label: s.text }));
  const { setServicesForSearch, filterService } = props.actions;
  return (
    <Select
      value={searchedServices}
      isMulti
      onChange={(selectedOption: any) => {
        console.log('on change ', selectedOption);
        // setSelectedOption(selectedOption);
        setServicesForSearch(selectedOption.map(s => s.value));
      }}
      options={allServices}
      onInputChange={(e: string) => {
        filterService(e);
      }}
      placeholder="Enter key or search item"
      noOptionsMessage={() => null}
      components={{ Menu: () => null }}
    />);
};

export default withStyles(Styles)(Search);
// export default withStyles(Styles)(CustomizedInputBase);
