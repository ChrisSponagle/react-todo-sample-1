import React, { PureComponent } from 'react';
import Item from './Item';
import '../css/ItemList.css'

export default class ItemList extends PureComponent {

  render() {
    return(
      <ul id='itemList'>
        {
          this.props.items.map(item => (
            <Item {...this.props } key={item.id} item={item} />

          ))
        }
      </ul>
    )
  }
}
