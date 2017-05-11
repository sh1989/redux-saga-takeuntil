import { all, put,takeEvery } from 'redux-saga/effects';
import { START, REQUEST, INCREMENT, STOP } from './reducer';
import { takeUntil } from 'redux-saga-takeuntil';

export function* doIncrement() {
  yield put({ type: INCREMENT });
}

export function* watcher() {
  yield all([
    takeEvery(REQUEST, doIncrement)
  ]);
}

export default function* rootSaga() {
  yield all([
    takeUntil(START, STOP, watcher)
  ]);
}
