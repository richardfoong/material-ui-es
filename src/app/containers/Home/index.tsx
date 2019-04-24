import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'app/reducers';
import Home, { HomeProps } from 'app/components/Home';

const HomeContainer = (props:HomeProps) => {
  return <Home {...props} />
};

const mapStateToProps = (state: RootState) => {
  return {
    services: state.services
  }
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
