import {FETCH_COORDS} from '../actions/index';

const INITIAL_STATE = {
  searches: [],
  coord: null
};

export default function(state =INITIAL_STATE, action){
  switch(action.type){
    case FETCH_COORDS:
      return {
        ...state,
        searches: [action.term, ...state.searches],
        coord: action.payload.data
      }
    default:
      return state;
  }
}
