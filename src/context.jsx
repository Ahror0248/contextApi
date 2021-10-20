import React, { useState, createContext } from "react";

export const Kino = createContext();

export const KinoProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, name: "Harry Potter", prize: "100$" },
    { id: 2, name: "Croods", prize: "200$" },
    { id: 3, name: "Mr Been", prize: "1300$" },
    { id: 4, name: "Lords of Ring", prize: "450$" },
  ]);

  return <Kino.Provider value={[data, setData]}>{children}</Kino.Provider>;
};
 