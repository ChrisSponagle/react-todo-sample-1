import React, { PureComponent } from 'react';
import '../css/ItemForm.css';

const editItem = item => {
  return dispatch => {
    dispatch({ type: 'EDIT_ITEM', item });
  };
};

export default class ItemForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      newItem: ''
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if(nextProps.editItem && nextProps.editItem.id) {
      editItem(nextProps.editItem.description);
    }
    return null;
  }

  onSubmit = (event) => {
    event.preventDefault();

      const item = {
        description: this.state.newItem,
        completed: false
      }
      this.props.onNewItemSubmited(item);

    this.setState({
      newItem: ''
    })
  }

  onDescriptionChange = (event) => {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    return (
      <form className='submitForm' onSubmit={this.onSubmit}>
        <input className='inputTask' type='text' placeholder={'Enter new task'} value={this.state.newItem} onChange={this.onDescriptionChange} />
        <div onClick={this.onSubmit} className='submitButton'/>
      </form>
    )
  }
}
