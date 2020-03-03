import React, { PureComponent, PropTypes } from 'react';
import Item from './Item';

export default class ItemList extends PureComponent {
  static propTypes = {
    onTogglComplete: PropTypes.func.isRequired
  }


  render() {
    return(
      <ul>
        {
          this.props.items.map(item => (
            <Item {...this.props } key={item.id} item={item} />

          ))
        }
      </ul>
    )
  }
}
