import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_START,
  getMatchInfo
} from './actions';

import * as ActionUtils from '../../lib/actionUtils';

function* getMatchAsync() {
  try {
    const list = yield call(ActionUtils.getMatchInfo);
    yield put(getMatchInfo(list))
  } catch (e) {
    console.log('error!!');
  }
};

export function* listSaga() {
  yield takeLatest(GET_START, getMatchAsync);
};