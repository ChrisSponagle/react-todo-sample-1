import {
    START_EDIT_ITEM,
    FINISH_EDIT_ITEM
} from '../constants/actionTypes';

export default (state = null, action) => {
      switch (action.type) {
        case START_EDIT_ITEM:
          return action.id;
        case FINISH_EDIT_ITEM:
          return null;
        default:
          return state;
      }
};