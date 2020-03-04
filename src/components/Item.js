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

  // Controls line-through for tasks
  onChangeCompleteItem = e => {
    this.props.onTogglComplete(this.props.item.id);
  };

  // Fires whenever task input is active and displays update button
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

  // Fires whenever some types into input
  onDescriptionChange = (e) => {
    e.preventDefault();
    this.setState({
      newItem: event.target.value,
      updateView: true
    });
  }

  // Submits update to store and hides update button
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
        <form className='submitForm' onSubmit={this.onSubmitEdit}>
          {/* styled checkbox */}
          <label className='checkboxContainer'>
            <input type='checkbox' onChange={this.onChangeCompleteItem}
              defaultChecked={this.props.item.completed} />
            <span className='checkmark'></span>
          </label>
          {/* editable task input */}
          <input type='text' className='inputTask' style={{
              textDecoration: this.props.item.completed ? 'line-through' : 'none'
            }} value={this.state.newItem} onClick={this.onClickEdit} onChange={this.onDescriptionChange}/>
          {/* update button that will disappear when not in use */}
          {this.state.updateView && 
            <div onClick={this.onSubmitEdit} className='updateButton'>
              <h3 className='updateButtonFont'>Update</h3>
            </div>
          }
          {/* remove button for tasks */}
          <div onClick={this.onClickRemove} className='removeButton'/>
        </form>
      </li>
    );
  }
}
