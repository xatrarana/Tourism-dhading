import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons'; 


const data = [
  "Langauge",
  "Preferences",
  "Privacy and Security",
  "Data and Storage",
  "Chat Settings",
  "Log Out",
];

const SettingContainer = () => {
  return (
    <View>
      <View>
        <View className=" w-fit h-fit flex items-center pt-3 ">
          <Image
            style={{ objectFit: "fill" }}
            className="rounded-full"
            source={{
              uri: "https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg",
            }}
            height={120}
            width={120}
          />
          <Text className="font-bold text-2xl">Samir Kumal</Text>
          <Text className=" text-gray-400">kumalsameer124@gmail.com</Text>
        </View>
        <View className = "mt-12">
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <View className = "p-5 font-bold  bg-white my-2 mx-4 flex flex-row justify-between rounded-2xl ">
                
                <Text>{item}</Text>
                <View>
                <FontAwesome5 name="angle-right" size={24} color="black" />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingContainer;
