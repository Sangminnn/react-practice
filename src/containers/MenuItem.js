import React from 'react';
import { useDispatch } from 'react-redux';
import * as listActions from '../redux/modules/actions';
import { MenuItemComponent, MenuItemWrapper } from '../components';

function MenuItem(props) {
  const dispatch = useDispatch();
  
  const onRemove = (id) => {
    console.log(id);
    dispatch(listActions.removeItem(id));
  }

  const menuItems = props.list.map(
    market => 
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