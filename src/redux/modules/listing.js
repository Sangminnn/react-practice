import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as ActionUtils from '../../lib/actionUtils';

// interface ResponseType = EventType[];

// interface EventType {
//   id: string;
//   name: string;
//   done: boolean;
// };

// interface MarketType {
//   id: string;
//   name: string;
//   done: boolean;
// };

// interface SelectionType {
//   id: string;
//   name: string;
//   done: boolean;
// };

const GET_START = 'listing/GET_START';
const GET_MATCH_INFO = 'listing/GET_MATCH_INFO';
const GET_ACTIVE_LIST = 'listing/GET_ACTIVE_LIST';
const REMOVE_ITEM = 'listing/REMOVE_ITEM';
// const GET_MATCH_INFO_SUCCESS = 'listing/GET_MATCH_INFO_SUCCESS';

// export const getMatchInfo = createAction(GET_MATCH_INFO, ActionUtils.getMatchInfo);
// export const getMatchInfoSuccess = createAction(GET_MATCH_INFO_SUCCESS, list => list);
export const getStart = createAction(GET_START);
export const getMatchInfo = createAction(GET_MATCH_INFO, (list) => list)
export const getActiveList = createAction(GET_ACTIVE_LIST, list => list)
export const removeItem = createAction(REMOVE_ITEM);


const initialState = {
  event: [],
  activeList: [],
  removeItem: [],
};

export default handleActions({
  [GET_START]: (state, action) => {
    console.log('start');
  }, 
  [GET_MATCH_INFO]: (state, action) =>  
    // console.log(action.payload.data)
    produce(state, (draft) => {
      console.log('success');
      draft.event = action.payload.data;
      console.log(action.payload.data);
    }),
  [GET_ACTIVE_LIST]: (state, action) => 
    produce(state, draft => {
      console.log('액티브리스트: ', action.payload)
      draft.activeList = action.payload;
    }),
  [REMOVE_ITEM]: (state, action) => {
    return produce(state, draft => {
      // console.log(id);
      draft.removeItem = action.payload;
    })
  }
}, initialState);

function* getMatchAsync() {
  try {
    // console.log('get start');
    const list = yield call(ActionUtils.getMatchInfo);
    // console.log(list);
    yield put(getMatchInfo(list))
  } catch (e) {
    console.log('error!!');
  }
};

export function* listSaga() {
  yield takeEvery(GET_START, getMatchAsync)
};