import React from 'react';
import { ButtonComponent } from '../components';

function Button ({ id, onToggle, name, price, active }) {
  
  // const [selection, setSelection] = useState({
  //   active: false,
  //   name,
  //   price
  // })

  // const onClick = () => {
  //   setSelection({
  //     ...selection,
  //     active: !selection.active
  //   });
  //   console.log(selection);
  // }

  return (
    <ButtonComponent id={id} active={active} onToggle={onToggle} name={name} price={price} />
  )
};

export default Button;