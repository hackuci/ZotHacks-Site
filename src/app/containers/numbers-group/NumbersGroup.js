import React from "react";
import './NumbersGroup.scss';

function NumbersGroup(props) {
  return (
    <div className='numbers-group'>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default NumbersGroup;
