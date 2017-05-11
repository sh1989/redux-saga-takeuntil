import { all, cancel, fork, put, take, takeEvery } from 'redux-saga/effects';
import { START, REQUEST, INCREMENT, STOP } from './reducer';

export function* doIncrement() {
  yield put({ type: INCREMENT });
}

export function* watcher() {
  yield all([
    takeEvery(REQUEST, doIncrement)
  ]);
}

export default function* rootSaga() {
  while (yield take(START)) {
    console.log('starting');
    const watchers = yield fork(watcher);
    yield take(STOP);
    console.log('finishing');
    yield cancel(watchers);
  }
}
