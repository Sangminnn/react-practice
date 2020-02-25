import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ButtonComponent } from '../components';

function Buttons(props) {
  
  const items = [];
  
  const removeItem = useSelector(state => state.listing.removeItem);

  const itemList = props.selections.map(i => items.push({...i, active: false}));

  const [selections, setSelections] = useState(items)

  const onToggle = (id) => {
    console.log('변경되었습니다.', id);
    const index = selections.findIndex(selection => selection.id === id);

    if(index >= 0) {
      const selected = selections[index];
      let next = [...items];

      next[index] = {
        ...selected,
        active: !selected.active
      }
      // 이부분에 체크된 애만 업데이트 해주는 로직을 넣고 그걸 activeChange로 넣으면 될듯

      if(next[index].active) {
        props.activeChange({
          ...next[index],
          mid: props.mid,
          mname: props.mname
        })
      } else {
        props.activeChange(next[index].id)
      } 

      console.log('next');
      console.log(items);
      console.log(next);

      return setSelections(next);
    }

    return;
  }

  useEffect(() => {
    console.log('변경되었습니다.', removeItem);
    onToggle(removeItem);
  }, [removeItem])


  const buttons = selections.map(
    selection => 
      <ButtonComponent
        id={selection.id}
        onToggle={onToggle} 
        active={selection.active}
        name={selection.name} 
        price={selection.price} 
      />
  )

  return (
    <>
      { buttons }
    </>
  )
};

export default Buttons;