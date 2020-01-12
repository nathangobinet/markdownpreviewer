import React from 'react';
import { connect } from 'react-redux';
import SplitPanel from './SplitPanel';
// import {  } from '../redux/reducers';

// TODO: Import components then connect them to props

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  func: () => (
    dispatch(null)
  ),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(SplitPanel);

const App = () => (
  <div>
    <Container />
  </div>
);

export default App;
