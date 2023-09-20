import { View, Text } from "react-native";
import React, { useEffect, useState, useContext, createContext} from "react";
export const DataContext = createContext();
export function useDataProvider() {
    return useContext(DataContext);
  }

const DataProvider = ({children}) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
   <DataContext.Provider value = {data}>
        {children}
   </DataContext.Provider>
  );
};

export default DataProvider;
