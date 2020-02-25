import React, { useState, useEffect } from 'react';
import { Header, MainComponent, ListMenu, MenuItems } from '../components';
import ListItems from './ListItems';
import MenuItem from './MenuItem';
import * as listActions from '../redux/modules/listing';
import { useSelector, useDispatch } from 'react-redux';

function MainContainer() {
  const dispatch = useDispatch();

  const [listToggle, setListToggle] = useState(false);
  const activeList = useSelector(state => state.listing.activeList);

  // useEffect(() => {
  //   console.log(listToggle);
  // }, [listToggle])

  useEffect(() => {
    dispatch(listActions.getStart());
  }, []);
 
  const onToggle = () => setListToggle(!listToggle);

  const menu = activeList.map(
    item => (<MenuItem eid={item.eid} list={item.list} /> )
  )

  // const changedMarket = [...nextList, item].sort((a, b) => +a.id[a.id.length-1] - (+b.id[b.id.length-1]))

  // useEffect(() => {
  //   console.log(event);
  // }, [event])

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

// export default connect(
//   (state) => ({
//     event: state.listing.event
//   }),
//   (dispatch) => ({
//     ListActions: bindActionCreators(listActions, dispatch)
//   })
// )(MainContainer);