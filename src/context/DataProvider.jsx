import { View, Text } from "react-native";
import React, { useEffect, useState, useContext, createContext } from "react";
export const DataContext = createContext();
export function useDataProvider() {
  return useContext(DataContext);
}

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=mo4I_r-cd466df_PCDm1CeqXgmXeaTWcUV9HWDBeZM8"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
