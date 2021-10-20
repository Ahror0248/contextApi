import React, { useState, useContext } from "react";
import { Kino } from "./context";

const Add = () => {
  const [data, setData] = useContext(Kino);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onAdd = () => {
    if (name.length !== 0 && price.length !== 0) {
      setData((prev) => [
        ...prev,
        { id: prev.length + 1, name: name, prize: price },
      ]);
    }

    setName("");
    setPrice("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="price"
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default Add;
