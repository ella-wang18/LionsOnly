import React from 'react';
import {connect} from 'react-redux';
import {AuthenticationContainer, MainContainer} from "./src/util/router";

const App = ({isLogged}) => {
  console.log('Is logged: ', isLogged);
  return isLogged ? (
    <MainContainer />
  ) : (
    <AuthenticationContainer />
  );
};

const mapStateToProps = (state, props) => {
  return {
    isLogged: state.authReducer.isLogged,
  };
};

export default connect(
  mapStateToProps
)(App);
