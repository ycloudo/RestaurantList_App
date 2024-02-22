import React from 'react';
import css_module from './DeleteBtn.module.css';

const DeleteBtn = (props) => {
  return (
    <div>
      <button className={css_module.btn} onClick={props.deleteHandler}>
        刪除
      </button>
    </div>
  );
};

export default DeleteBtn;
