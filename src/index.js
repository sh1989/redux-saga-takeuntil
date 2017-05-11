import { cancel, fork, take } from 'redux-saga/effects';

function* performTakeUntil(startActionType, stopActionType, saga) {
  while (yield take(startActionType)) {
    const watchers = yield fork(saga);
    yield take(stopActionType);
    yield cancel(watchers);
  }
}

export function takeUntil(startActionType, stopActionType, saga) {
  return fork(performTakeUntil, startActionType, stopActionType, saga);
}
