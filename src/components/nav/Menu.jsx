import React, { useState } from "react";
import { usePathname, useRouter } from "expo-router";
import { View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
// import * as Svg from "react-native-svg";
import { Ionicons, FontAwesome,AntDesign, Feather , MaterialIcons} from "@expo/vector-icons";
// import { icons } from "../../constants";

export default function Menu() {
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;

  return (
    <View className="absolute bottom-0 w-full z-20  ">
      <View
        className={`  h-14 w-[${windowWidth}]  bg-[#fff] flex-row items-center  justify-around  rounded-md rounded-b`}
      >
        <TouchableOpacity
          className=" w-11 h-11 flex gap-y-1 items-center justify-center "
          onPress={() => {
            router.push("/home/");
          }}
        >
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className=" w-11 h-11 flex gap-y-1 items-center justify-center"
          onPress={() => {
            router.push({
              pathname: "/location",
            });
          }}
        >
          {/* <Svg.SvgXml xml={icons.location} /> */}
          <Feather name="map-pin" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className=" w-11 h-11 flex  gap-y-1 items-center justify-center"
          onPress={() => router.push("/likes")}
        >
          {/* <Svg.SvgXml xml={icons.heart} /> */}
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className=" w-11 h-11 flex gap-y-1 items-center justify-center"
          onPress={() => router.push("/thingstodo")}
        >
          <MaterialIcons name="work-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
