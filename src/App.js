import data from './restaurants.json';
import css_module from './App.module.css';
import ResBlock from './components/ResBlock';
import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';

//最終的code
function App() {
  const [main_data, setData] = useState(data);
  const deleteHandler = (id) => {
    setData((prev) => prev.filter((e) => e.uuid !== id));
  };
  return (
    <div className={css_module.ctn}>
      <InputForm setData={setData} />
      {main_data.map((x) => (
        <ResBlock
          name={x.name}
          rate={x.rate}
          addr={x.address}
          key={x.uuid}
          deleteHandler={() => deleteHandler(x.uuid)}
        />
      ))}
    </div>
  );
}

export default App;
