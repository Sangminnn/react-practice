import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';
import * as listActions from '../redux/modules/actions';
import { ItemWrapper } from '../components'

function ListItems() {
  const dispatch = useDispatch();
  const event = useSelector(state => state.listReducer.event);
  
  const [lastList, setLastList] = useState([]);
  
  useEffect(() => {
    dispatch(listActions.getActiveList(lastList));
  }, [lastList]);
  
  const listSetting = (items) => {
    console.log(items);
      const nextList = lastList.filter(list => list.eid !== items.eid);
      const changedMarket = [...nextList, items].sort((a, b) => +a.eid[a.eid.length-1] - (+b.eid[b.eid.length-1]))
      setLastList(changedMarket);
  }

  const listItem = event.map(
    item => item.markets.length > 0 && (
      <ItemWrapper title={item.name}>
        <ListItem id={item.id} markets={item.markets} listSetting={listSetting}/>
      </ItemWrapper>
    )
  )

  return (
    <>
      { listItem }
    </>
  )
};

export default ListItems;