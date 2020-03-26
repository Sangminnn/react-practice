import React, { useState, useEffect } from 'react';
import { Header, MainComponent, ListMenu, MenuItems } from '../components';
import ListItems from './ListItems';
import MenuItem from './MenuItem';
import * as listActions from '../redux/modules/actions';
import { useSelector, useDispatch } from 'react-redux';

function MainContainer() {
  const dispatch = useDispatch();

  const [listToggle, setListToggle] = useState(false);
  const activeList = useSelector(state => state.listReducer.activeList);

  useEffect(() => {
    dispatch(listActions.getStart());
  }, [dispatch]);
 
  const onToggle = () => setListToggle(!listToggle);

  const menu = activeList.map(
    item => (<MenuItem eid={item.eid} list={item.list} /> )
  );

  return (
    <>
      <Header onToggle={onToggle}>
        Axios Test
      </Header>
      <ListMenu onToggle={onToggle} active={listToggle}>
        <MenuItems>
          { menu }
        </MenuItems>
      </ListMenu>
      <MainComponent>
        <ListItems />
      </MainComponent>
    </>
  )
};

export default MainContainer;