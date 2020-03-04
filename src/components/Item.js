import React, { PureComponent } from 'react';
import '../css/Item.css';

export default class Item extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      newItem: props.item.description,
      updateView: false
    }
  }

  onChangeCompleteItem = e => {
    this.props.onTogglComplete(this.props.item.id);
  };

  onClickEdit = e => {
    e.preventDefault();
    this.props.onEditItem(this.props.item.id);
    this.setState({
      updateView: true
    })
  };

  onClickRemove = e => {
    e.preventDefault();
    this.props.onRemoveItem(this.props.item.id);
  };

  onDescriptionChange = (e) => {
    e.preventDefault();
    this.setState({
      newItem: event.target.value,
      updateView: true
    });
  }
  onSubmitEdit = e => {
    e.preventDefault();
    this.props.onEditItemSubmited({...this.props.editItem, description: this.state.newItem });
    this.setState({
      updateView: false
    })
  }

  render() {
    return (
      <li>
        <form onSubmit={this.onSubmitEdit}>
          <input
            type='checkbox'
            onChange={this.onChangeCompleteItem}
            defaultChecked={this.props.item.completed}
          />
        
          <input type='text' className='inputTask' style={{
              textDecoration: this.props.item.completed ? 'line-through' : 'none'
            }} value={this.state.newItem} onClick={this.onClickEdit} onChange={this.onDescriptionChange}/>

          {this.state.updateView && <span>
            {' '}
            -{' '}
            <a onClick={this.onSubmitEdit} href='#'>
              Update
            </a>
          </span>}

          <span>
            {' '}
            -{' '}
            <a onClick={this.onClickRemove} href='#'>
              Remove
            </a>
          </span>
        </form>
      </li>
    );
  }
}
