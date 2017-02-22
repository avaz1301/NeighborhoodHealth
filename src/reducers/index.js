import { combineReducers } from 'redux';
import AddrReducer from './reducer_add';

const rootReducer = combineReducers({
  search: AddrReducer,
});

export default rootReducer;
