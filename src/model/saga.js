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

export function* performTakeUntil(startType, stopType, worker) {
  while (yield take(startType)) {
    const watchers = yield fork(worker);
    yield take(stopType);
    yield cancel(watchers);
  }
}

export function takeUntil(startType, stopType, worker) {
  return fork(performTakeUntil, startType, stopType, worker);
}

export default function* rootSaga() {
  yield all([
    takeUntil(START, STOP, watcher)
  ]);
}
