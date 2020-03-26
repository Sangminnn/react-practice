import { createAction } from 'redux-actions';

export const GET_START = 'listing/GET_START';
export const GET_ARG = 'listing/GET_ARG';
export const GET_MATCH_INFO = 'listing/GET_MATCH_INFO';
export const GET_ACTIVE_LIST = 'listing/GET_ACTIVE_LIST';
export const REMOVE_ITEM = 'listing/REMOVE_ITEM';

export const getStart = createAction(GET_START);
export const getArg = createAction(GET_ARG);
export const getMatchInfo = createAction(GET_MATCH_INFO, (list) => list)
export const getActiveList = createAction(GET_ACTIVE_LIST, list => list)
export const removeItem = createAction(REMOVE_ITEM);