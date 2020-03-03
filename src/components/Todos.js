import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import ItemList from './ItemList';

const addItem = item => {
  return dispatch => {
    dispatch({ type: 'ADD_NEW_ITEM', item });
  };
};

const editItem = item => {
  return dispatch => {
    dispatch({ type: 'EDIT_ITEM', item });
  };
};

const removeItem = id => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_ITEM',
      id: id
    });
  };
};

class Todos extends PureComponent {

  onNewItemSubmited = item => {
    this.props.dispatch(addItem(item));
  };

  onEditItemSubmited = item => {
    this.props.dispatch(editItem(item));
    this.props.dispatch({
      type: 'FINISH_EDIT_ITEM'
    });
  };

  toggleItemCompletion = id => {
    this.props.dispatch({
      type: 'TOGGLE_ITEM_COMPLETION',
      id: id
    });
  };

  startEditItem = id => {
    this.props.dispatch({
      type: 'START_EDIT_ITEM',
      id: id
    });
  };

  removeItem = id => {
    this.props.dispatch(removeItem(id));
  };

  render() {
    const editItem = this.props.items.filter(item => {
      return item.id === this.props.activeEditItemId;
    })[0];

    return (
      <div>
        <div>
          <ItemForm
            onNewItemSubmited={this.onNewItemSubmited}
            onEditItemSubmited={this.onEditItemSubmited}
            editItem={editItem}
          />
        </div>
        <div>
          <ItemList
            items={this.props.items}
            onTogglComplete={this.toggleItemCompletion}
            onEditItem={this.startEditItem}
            onRemoveItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.todos,
    activeEditItemId: state.activeEditItemId
  };
};

export default connect(mapStateToProps)(Todos);
