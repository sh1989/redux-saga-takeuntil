import React from 'react';
import { connect } from 'react-redux';
import { START, REQUEST, STOP } from './model/reducer';
import './App.css';

const App = ({ onStart, onIncrement, onStop, value }) => (
  <div className="App">
    <section>
      <button onClick={onStart}>Start</button>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onStop}>Stop</button>
    </section>
    <h2>{value}</h2>
  </div>
);

export default connect(
  state => ({
    value: state.value
  }),
  dispatch => ({
    onStart: () => dispatch({ type: START}),
    onIncrement: () => dispatch({ type: REQUEST}),
    onStop: () => dispatch({ type: STOP})
  })
)(App);
