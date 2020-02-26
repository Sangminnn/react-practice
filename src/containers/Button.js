import React from 'react';
import { ButtonComponent } from '../components';

function Button ({ id, onToggle, name, price, active }) {

  return (
    <ButtonComponent id={id} active={active} onToggle={onToggle} name={name} price={price} />
  )
};

export default Button;