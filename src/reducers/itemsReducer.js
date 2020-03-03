import {
    ADD_NEW_ITEM,
    REMOVE_ITEM,
    EDIT_ITEM,
    TOGGLE_ITEM_COMPLETION,
} from '../constants/actionTypes';

export default (
  state = [{ id: 1, description: 'My Task', completed: true }],
  action
) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return [...state, { ...action.item, id: state.length + 1 }];
    case REMOVE_ITEM:
      return state.filter(item => {
        return item.id !== action.id;
      });
    case EDIT_ITEM:
      return state.map(item => {
        if (item.id === action.item.id) {
          return { ...item, description: action.item.description };
        }
        return item;
      });
    case TOGGLE_ITEM_COMPLETION:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    default:
      return state;
  }
};