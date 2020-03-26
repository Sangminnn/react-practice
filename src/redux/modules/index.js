import { combineReducers } from 'redux';
import listReducer from './reducer';
import { listSaga } from './sagas';
// import listing, { listSaga } from './listing';
import { all } from 'redux-saga/effects';

export default combineReducers({
  listReducer
});

export function* rootSaga() {
  yield all([listSaga()])
};