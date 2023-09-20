import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
const sections = ["Popular", "Religious", "Natural"];

const data = [
  { name: "Gallery", color: "red" },
  { name: "Near By", color: "blue" },
  { name: "Sights", color: "green" },
];

const HomeGridComponent = () => {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <View className = "flex flex-row gap-x-4 items-center justify-center">
      {data.map((item) => (
        <View style = {{backgroundColor:item.color, padding:2}}>
            <Text>{item.name}</Text>
        </View>
      
      ))}
    </View>
  );
};

export default HomeGridComponent;
