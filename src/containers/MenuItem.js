import React from 'react';
import { useDispatch } from 'react-redux';
import * as listActions from '../redux/modules/listing';
import { MenuItemComponent, MenuItemWrapper } from '../components';

function MenuItem(props) {
  const dispatch = useDispatch();
  
  const onRemove = (id) => {
    console.log(id, props.eid);
    dispatch(listActions.removeItem({id: id, eid: props.eid}));
  }

  const menuItems = props.list.map(
    market => 
      // const splitedTitle = market.mname.split(' ').shift();
      // const customTitle = splitedTitle.join(' ');
      (<MenuItemComponent 
        id={market.id}
        title={market.mname} 
        name={market.name} 
        price={market.price} 
        onRemove={onRemove}
      />)
    
  );

  return (
    <MenuItemWrapper>
      { menuItems }
    </MenuItemWrapper>
  )
};

export default MenuItem;