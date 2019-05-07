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
import { ServicesState } from '@ap-reducers/';
import Chip from '@material-ui/core/Chip';

const Styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: 16,
    flex: 1
  },
  iconButton: {
    padding: 16
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

interface StyleProps {
  classes: { [className in keyof typeof Styles]: string };
}

interface Props {
  styles: React.CSSProperties;
  actions: typeof ServiceActions;
  services: ServicesState;
}

const Search = (props: StyleProps & Props) => {
  const allServices = props.services.all.map((service) => ({
    value: service.id,
    label: service.text
  }));
  const searchedServices = props.services.searched.map((s) => ({ value: s.id, label: s.text }));
  const { setServicesForSearch, filterService, removeServiceFromSearch } = props.actions;
  return (
    <Select
      value={searchedServices}
      isMulti
      onChange={(selectedOption: any) => {
        setServicesForSearch(selectedOption.map((s: any) => s.value));
      }}
      options={allServices}
      onInputChange={(e: string, { action }) => {
        if (action === 'input-change') {
          filterService(e);
        }
      }}
      placeholder="Enter key or search item"
      noOptionsMessage={() => null}
      autoFocus={false}
      components={{
        Menu: () => null,
        DropdownIndicator: () => null,
        MultiValueLabel: (base) => {
          // console.log('base:', base);
          return (
            <Chip
              label={base.data.label}
              color="primary"
              style={{
                margin: 0,
                color: 'white',
                backgroundColor: '#008091',
                border: '1px solid #008091'
              }}
              onDelete={() => {
                removeServiceFromSearch(base.data.value);
              }}
            />
          );
        }
      }}
      styles={{
        multiValueRemove: (styles, { data }) => {
          return { ...styles, backgroundColor: 'transparent', display: 'none' };
        },
        multiValue: (styles) => {
          return { ...styles, backgroundColor: 'transparent' };
        },
        valueContainer: (styles) => {
          return { ...styles, backgroundColor: 'transparent', marginLeft: '8px' };
        },
        control: (styles) => {
          return { ...styles, borderRadius: '40px' };
        },
        indicatorSeparator: (styles) => {
          return { ...styles, backgroundColor: 'transparent' };
        }
      }}
    />
  );
};

export default withStyles(Styles)(Search);
