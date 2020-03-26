import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ButtonComponent } from '../components';

function Buttons(props) {
  
  const items = [];
  
  useMemo(() => {
    props.selections.forEach(i => items.push({...i, active: false}));
  }, [items]);

  const [selections, setSelections] = useState(items);

  const removeItem = useSelector(state => state.listReducer.removeItem);

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

      if(next[index].active) {
        props.activeChange({
          ...next[index],
          mid: props.mid,
          mname: props.mname
        });
      } else {
        props.activeChange(next[index].id);
      }
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