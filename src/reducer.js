import itemsReducer from './reducers/itemsReducer';
import activeEditItemId from './reducers/activeEditItemId';
import { combineReducers } from 'redux';

export default combineReducers({
    todos: itemsReducer,
    activeEditItemId: activeEditItemId
  });