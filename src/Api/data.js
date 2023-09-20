import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);
  return (
    <View>
      <Text>data</Text>
    </View>
  );
};

export default data;
