import { takeEvery } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { BUTTON_ONE_CLICK, BUTTON_TWO_CLICK, BUTTON_THREE_CLICK } from './reducer';
import log from './api';

export function* onButtonOneClick() {
  yield call(log, '1');
}

export function* onButtonTwoClick() {
  yield call(log, '2');
}

export function* onButtonThreeClick() {
  yield call(log, '3');
}

export default function* rootSaga() {
  yield [
    takeEvery(BUTTON_ONE_CLICK, onButtonOneClick),
    takeEvery(BUTTON_TWO_CLICK, onButtonTwoClick),
    takeEvery(BUTTON_THREE_CLICK, onButtonThreeClick)
  ]
}
