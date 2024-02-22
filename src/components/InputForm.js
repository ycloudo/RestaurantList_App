import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputForm = (props) => {
  const [userInput, setUserInput] = useState({
    //給new data 一個 uuid
    uuid: uuidv4(),
    name: '',
    rate: 1,
    address: '',
  });
  const nameChangeHandler = (e) => {
    setUserInput((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };
  const rateChangeHandler = (e) => {
    setUserInput((prev) => ({
      ...prev,
      rate: parseInt(e.target.value, 10), //e.target.value取出來的值都是字串，要轉為整數
    }));
  };
  const addrChangeHandler = (e) => {
    setUserInput((prev) => ({
      ...prev,
      address: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault(); //取消預設的任何事件（這邊是想取消submit後重整頁面）
    //更新data
    props.setData((prev) => [...prev, userInput]);
    //清空userInput
    setUserInput((prev) => {
      return {
        ...prev,
        uuid: '',
        name: '',
        rate: 0,
        address: '',
      };
    });
  };
  return (
    //表單切版
    <form onSubmit={submitHandler} style={{ color: 'white' }}>
      <label>
        餐廳名稱：
        <input
          type="text"
          onChange={nameChangeHandler}
          value={userInput.name}
        />
      </label>
      <label>
        評分：
        <input
          type="number"
          min={1}
          max={5}
          onChange={rateChangeHandler}
          value={userInput.rate}
        />
      </label>
      <label>
        地址：
        <input
          type="text"
          onChange={addrChangeHandler}
          value={userInput.addr}
        />
      </label>
      <br />
      <input type="submit" value="送出" />
    </form>
  );
};

export default InputForm;
