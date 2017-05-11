import React from 'react';
import { connect } from 'react-redux';
import { BUTTON_ONE_CLICK, BUTTON_TWO_CLICK, BUTTON_THREE_CLICK } from './model/reducer';
import './App.css';

const App = ({ btnOneClick, btnTwoClick, btnThreeClick }) => (
  <div className="App">
    <section>
      <button onClick={btnOneClick}>1</button>
      <button onClick={btnTwoClick}>2</button>
      <button onClick={btnThreeClick}>3</button>
    </section>
  </div>
);

export default connect(null, dispatch => ({
  btnOneClick: () => dispatch({ type: BUTTON_ONE_CLICK}),
  btnTwoClick: () => dispatch({ type: BUTTON_TWO_CLICK}),
  btnThreeClick: () => dispatch({ type: BUTTON_THREE_CLICK})
}))(App);
