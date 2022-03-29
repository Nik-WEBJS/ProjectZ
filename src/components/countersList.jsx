import React, { useState } from "react";
import Couneter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь"},
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounteres = counters.filter((c) => c.id !== id);
    setCounters(newCounteres);
  };

  const handleReset = () => {
    console.log("reset");
    setCounters(initialState);
  };


  const handleIncrement = () => {
    const newValueIncrement = counters.map((d)=>d.value+1)
    setCounters(newValueIncrement)
  };

  const handleDicrement = () => {  
    const newValueDicrement = counters.map((d)=>d.value-1)
    setCounters(newValueDicrement)
  };

  return (
    <>
      {counters.map((count) => (
        <Couneter key={count.id} {...count} onDelete={handleDelete} onIncrement={handleIncrement} onDicrement={handleDicrement}/>
      ))}
      <button className="btn btn-primary btm-sm m-2" onClick={handleReset}>
        Сброс
      </button>
     
    </>
  );
};

export default CountersList;
