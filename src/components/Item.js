import React, { PureComponent } from 'react';

export default class Item extends PureComponent {

  onChangeCompleteItem = e => {
    this.props.onTogglComplete(this.props.item.id);
  };

  onClickEdit = e => {
    e.preventDefault();
    this.props.onEditItem(this.props.item.id);
  };

  onClickRemove = e => {
    e.preventDefault();
    this.props.onRemoveItem(this.props.item.id);
  };

  render() {
    return (
      <li>
        <input
          type='checkbox'
          onChange={this.onChangeCompleteItem}
          defaultChecked={this.props.item.completed}
        />
        <span
          style={{
            textDecoration: this.props.item.completed ? 'line-through' : 'none'
          }}
        >
          {this.props.item.description}
        </span>
        <span>
          {' '}
          -{' '}
          <a onClick={this.onClickEdit} href='#'>
            Edit
          </a>
        </span>
        <span>
          {' '}
          -{' '}
          <a onClick={this.onClickRemove} href='#'>
            Remove
          </a>
        </span>
      </li>
    );
  }
}
