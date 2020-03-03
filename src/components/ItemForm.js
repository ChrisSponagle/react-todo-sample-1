import React, { PureComponent } from 'react';

export default class ItemForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      newItem: ''
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if(nextProps.editItem && nextProps.editItem.id) {
      console.log("NEXT", nextProps, "PREV", prevState)
      // this.setState({
      //   newItem: nextProps.editItem.description
      // })
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    if(this.props.editItem) {
      this.props.onEditItemSubmited({...this.props.editItem, description: this.state.newItem });
    } else {
      const item = {
        description: this.state.newItem,
        completed: false
      }
      this.props.onNewItemSubmited(item);
    }

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
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.newItem} onChange={this.onDescriptionChange} />
        <button type="submit" />
      </form>
    )
  }
}
