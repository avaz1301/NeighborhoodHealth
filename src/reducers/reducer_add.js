import {FETCH_COORDS} from '../actions/index';
import {UPDATE_LIST} from '../actions/index';

const INITIAL_STATE = {
  searches: [],
  coord: null
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_COORDS:
      return {
        ...state,
        coord: action.payload.data
      };
    case UPDATE_LIST:
      return{
        ...state,
        searches: [action.term, ...state.searches],
      };
    default:
      return state;
  }
}
