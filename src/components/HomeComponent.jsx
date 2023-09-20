import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../constants/theme";
import HomeGrid from "./HomeGrid";
const sections = ["Popular", "Religious", "Natural"];

const data = [
  { name: "Gallery", color: Colors.primary },
  { name: "Near By", color: Colors.secondary },
  { name: "Sights", color: Colors.Tertiary },
];

const HomeGridComponent = () => {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <>
    <View className = "flex flex-row gap-x-4 items-center justify-center">
      {data.map((item) => (
        <View key={item.color} style = {{backgroundColor:item.color, paddingVertical:10, paddingHorizontal:32, borderRadius:8}}>
            <Text className = "text-white">{item.name}</Text>
        </View>
      ))}
    </View>
    <View className = "flex flex-row items-center justify-between  mx-4 mt-8">
      <Text className = "font-semibold text-xl">Popular Destination</Text>
      <TouchableOpacity>
        <Text className = "font-semibold">
          See More
        </Text>
      </TouchableOpacity>
    </View>
    <HomeGrid/>
    </>
  );
};

export default HomeGridComponent;
