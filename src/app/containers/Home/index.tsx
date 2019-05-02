import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import Home, { HomeProps } from '../../components/Home';
import { ServiceActions } from '../../actions';
import { bindActionCreators, Dispatch } from 'redux';

const HomeContainer = (props: HomeProps) => {
  return <Home {...props} />;
};

const mapStateToProps = (state: RootState) => {
  return {
    services: state.services
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(ServiceActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
