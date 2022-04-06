import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState([
    { id: 1, name: "Vehicle1"},
    { id: 2, name: "Vehicle2"},
    { id: 3, name: "Vehicle3"},
    { id: 4, name: "Vehicle4"},
    { id: 5, name: "Vehicle5"},
    { id: 6, name: "Vehicle6"}


  ]);

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};