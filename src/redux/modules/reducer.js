import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  GET_START,
  GET_MATCH_INFO,
  GET_ACTIVE_LIST,
  REMOVE_ITEM
} from './actions';

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
      draft.removeItem = action.payload;
    })
  }
}, initialState);
