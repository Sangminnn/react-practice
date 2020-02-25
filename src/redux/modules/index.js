import { combineReducers } from 'redux';
import listing, { listSaga } from './listing';
import { all } from 'redux-saga/effects';

export default combineReducers({
  listing
});

export function* rootSaga() {
  yield all([listSaga()])
};