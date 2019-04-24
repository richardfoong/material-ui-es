import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'app/reducers';
import Home, { HomeProps } from 'app/components/Home';
import { ServiceActions } from 'app/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from '@ap-utils/';

const HomeContainer = (props:HomeProps) => {
  return <Home {...props} />
};

const mapStateToProps = (state: RootState) => {
  return {
    services: state.services
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(omit(ServiceActions, 'Type'), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
