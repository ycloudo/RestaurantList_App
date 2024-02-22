import css_module from '../App.module.css';
import { useState } from 'react';
import DeleteBtn from './DeleteBtn/DeleteBtn';

const ResBlock = (props) => {
  const [isFront, setFront] = useState(true); //true 為正面
  const statusHandler = () => {
    setFront((prev) => !prev);
  };
  return (
    <div>
      <div className={css_module.block} onClick={statusHandler}>
        {isFront ? (
          <>
            <p className={css_module.res_name}>{props.name}</p>
            <div className={css_module.rate_ctn}>{props.rate}</div>
          </>
        ) : (
          <p className={css_module.res_name}>{props.addr}</p>
        )}
      </div>
      <DeleteBtn deleteHandler={props.deleteHandler} />
    </div>
  );
};

export default ResBlock;
